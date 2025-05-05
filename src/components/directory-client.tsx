'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { DirInfoSchema, type DirInfo } from '@/lib/types/schema';

export default function DirectoryClient({ dirInfo }: { dirInfo: DirInfo }) {
  const router = useRouter();
  const parsed = DirInfoSchema.safeParse(dirInfo);
  if (!parsed.success) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen p-4">
      <motion.div
        className="terminal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="scanline" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-terminal-green" />
            <AlertTriangle className="w-12 h-12 text-terminal-green animate-pulse" />
          </div>

          <h1 className="text-4xl mb-4 glitch">{dirInfo.name}</h1>
          <p className="text-xl mb-6">{dirInfo.message}</p>

          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-terminal-green hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Terminal
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}