import { useContext, createContext, useState, useCallback } from 'react';
import { commands } from '@/lib/commands';
import { useRouter } from "next/navigation";

interface TerminalContextType {
  history: Array<{ input: string; output: string }>;
  input: string;
  isTyping: boolean;
  typingOutput: string;
  setInput: (input: string) => void;
  handleCommand: (cmd: string) => void;
  clearHistory: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
}

interface TerminalProviderProps {
  children: React.ReactNode;
}

export function TerminalProvider({ children }: TerminalProviderProps) {
  const [history, setHistory] = useState<Array<{ input: string; output: string }>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingOutput, setTypingOutput] = useState('');
  const router = useRouter();

  const typeOutput = useCallback(async (text: string) => {
    setIsTyping(true);
    setTypingOutput('');

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setTypingOutput((prev) => prev + text[i]);
    }

    setIsTyping(false);
    setHistory((prev) => [...prev, { input: 'welcome', output: text }]);
    setTypingOutput('');
  }, []);

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const cmdParts = trimmedCmd.split(' ');

    try {
      const command = commands[cmdParts[0] as keyof typeof commands];
      
      if (!command) {
        setHistory((prev) => [
          ...prev,
          {
            input: cmd,
            output: `Command not found: ${cmdParts[0]}`,
          },
        ]);
        return;
      }

      const output = command.execute(cmdParts.slice(1));

      if (cmdParts[0] === 'clear') {
        setHistory([]);
        return;
      }

      
      if (output.startsWith("NAVIGATE:")) {
        const dir = output.split(":")[1];
        router.push(`/${dir}`);
        return;
      }

      if (cmdParts[0] === 'welcome') {
        typeOutput(output);
        return;
      }

      setHistory((prev) => [...prev, { input: cmd, output }]);
    } catch (error) {
      console.error('Command execution error:', error);
      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: 'An error occurred while executing the command',
        },
      ]);
    }
  }, [typeOutput]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const value = {
    history,
    input,
    isTyping,
    typingOutput,
    setInput,
    handleCommand,
    clearHistory,
  };

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
}