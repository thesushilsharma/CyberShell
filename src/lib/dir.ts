import { DirInfo } from "./types/schema";

export const DIRECTORIES: Record<string, DirInfo> = {
  projects: {
    name: 'Projects Directory',
    description: 'Top secret project files',
    message: 'ACCESS GRANTED: Welcome to the classified projects archive...',
  },
  personal: {
    name: 'Personal Files',
    description: 'Confidential information',
    message: 'ALERT: You\'ve accessed personal records. “Be careful what you wish for, you may get it” - Nyota Uhura...',
  },
  system: {
    name: 'System Core',
    description: 'Critical system files',
    message: 'WARNING: Core system access detected. Security protocols activated...',
  },
};