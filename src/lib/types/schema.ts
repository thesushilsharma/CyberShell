import { z } from "zod";

export const CommandSchema = z.object({
  description: z.string(),
  execute: z.function()
    .args(z.array(z.string()).optional().or(z.undefined()))
    .returns(z.string())
});

// Command input schema for parsing user commands
export const CommandInputSchema = z.object({
  command: z.string(),
  args: z.array(z.string()).optional(),
});

export const DirInfoSchema = z.object({
  name: z.string(),
  description: z.string(),
  message: z.string(),
});



export type Command = z.infer<typeof CommandSchema>;
export type CommandInput = z.infer<typeof CommandInputSchema>;

export type DirInfo = z.infer<typeof DirInfoSchema>;