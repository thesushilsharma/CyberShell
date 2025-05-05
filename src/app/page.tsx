"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { commands } from "@/lib/commands";
import { CommandInputSchema } from "@/lib/types/schema";

export default function Home() {
  const [history, setHistory] = useState<
    Array<{ input: string; output: string }>
  >([]);
  const [input, setInput] = useState("");
  const [bootSequence, setBootSequence] = useState(true);
  const [typingOutput, setTypingOutput] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setBootSequence(false);
      setHistory([
        {
          input: "banner",
          output: commands.banner.execute([]),
        },
      ]);
      handleCommand("welcome");
    }, 2000);

    return () => clearTimeout(bootTimer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const typeOutput = async (text: string) => {
    setIsTyping(true);
    setTypingOutput("");

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setTypingOutput((prev) => prev + text[i]);
    }

    setIsTyping(false);
    setHistory((prev) => [...prev, { input: "welcome", output: text }]);
    setTypingOutput("");
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const cmdParts = trimmedCmd.split(" ");

    try {
      const parsedCommand = CommandInputSchema.parse({
        command: cmdParts[0],
        args: cmdParts.slice(1),
      });

      const command = commands[parsedCommand.command as keyof typeof commands];

      if (!command) {
        setHistory((prev) => [
          ...prev,
          {
            input: cmd,
            output: `Command not found: ${parsedCommand.command}`,
          },
        ]);
        return;
      }

      const output = command.execute(parsedCommand.args);

      if (parsedCommand.command === "clear") {
        setHistory([]);
        return;
      }

      if (output.startsWith("NAVIGATE:")) {
        const dir = output.split(":")[1];
        router.push(`/${dir}`);
        return;
      }

      if (parsedCommand.command === "welcome") {
        typeOutput(output);
        return;
      }

      setHistory((prev) => [...prev, { input: cmd, output }]);
    } catch (error: unknown) {
      console.log("error", error);
      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: "Invalid command format",
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleCommand(input);
    setInput("");
  };

  return (
    <div className="min-h-screen p-4">
      <motion.div
        className="terminal"
        ref={terminalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="scanline" />

        <AnimatePresence>
          {bootSequence ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-terminal-green"
            >
              <Terminal className="w-16 h-16 mb-4" />
              <p className="glitch">Initializing system...</p>
              <p>Loading modules...</p>
              <p>Establishing connection...</p>
            </motion.div>
          ) : (
            <>
              {history.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="command-line">
                    <span className="prompt">guest@cybershell:~$</span>
                    <span>{entry.input}</span>
                  </div>
                  <pre className="output whitespace-pre-wrap">
                    {entry.output}
                  </pre>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  <pre className="output whitespace-pre-wrap">
                    {typingOutput}
                    <span className="cursor">▋</span>
                  </pre>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="command-line">
                <span className="prompt">guest@cybershell:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="command-input"
                  autoFocus
                  spellCheck="false"
                />
              </form>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
