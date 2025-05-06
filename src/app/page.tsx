"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { commands } from "@/lib/commands";
import { CommandInputSchema } from "@/lib/types/schema";
import { TerminalProvider, useTerminal } from "@/hooks/useTerminal";


function TerminalComponent() {
  const {
    history,
    input,
    isTyping,
    typingOutput,
    setInput,
    handleCommand,
  } = useTerminal();
  
  const [bootSequence, setBootSequence] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setBootSequence(false);
      handleCommand('banner');
      handleCommand('welcome');
    }, 2000);

    return () => clearTimeout(bootTimer);
  }, [handleCommand]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleCommand(input);
    setInput('');
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

export default function Home() {
  return (
    <TerminalProvider>
      <TerminalComponent />
    </TerminalProvider>
  );
}
