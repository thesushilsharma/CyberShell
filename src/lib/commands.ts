import { BANNER, WELCOME_MSG } from "./banner";
import { DIRECTORIES } from "./dir";
import { Command } from "./types/schema";


export const commands : Record<string, Command> = {
  help: {
    description: "Show available commands",
    execute: () => `
[COMMAND DATABASE v2.1.6]
╒══════════════════════════════════════════════╕
│ AVAILABLE COMMANDS                           │
╞══════════════════════════════════════════════╡
│ help     - Display this command list         │
│ about    - Show identity profile             │
│ whois    - Detailed personal analysis        │
│ skills   - Technical capabilities            │
│ projects - Portfolio showcase                │
│ contact  - Secure communication info         │
│ clear    - Clear terminal buffer             │
│ banner   - Display intro sequence            │
│ ls       - List file directories             │
│ cd       - Navigate directories              │
│ whoami   - Current session info              │
│ hack     - Unauthorized operation            │
│ matrix   - Enter simulation mode             │
╘══════════════════════════════════════════════╛
`,
  },
  about: {
    description: "Display identity profile",
    execute: () => `
[IDENTITY VERIFIED: Sushil Sharma]
╒══════════════════════════════════════════════╕
│ FULL-STACK OPERATOR                          │
│ MISSION CRITICAL STATUS                      │
├──────────────────────────────────────────────┤
│ ████ ACTIVE PROJECTS: 7                      │
│ ████ SYSTEM UPTIME: 99.999%                  │
│ ████ SECURITY RATING: ULTRA                  │
╘══════════════════════════════════════════════╛
`,
  },
  whois: {
    description: "Detailed personal analysis",
    execute: () => `
[BIO-METRIC SCAN COMPLETE]
╒══════════════════════════════════════════════╕
│ NAME: Sushil Sharma                          │
│ TITLE: Full Stack Operator                   │
│ SPECIALIZATION:                              │
│ ▸ Web Development                            │
│ ▸ DevOps Automation                          │
│ ▸ AI Integration                             │
│ ▸ Programming Languages                      │
├──────────────────────────────────────────────┤
│ PROFILE:                                     │
│ A visionary developer blending               │
│ technical mastery with creative              │
│ innovation. Early coding adopter             │
│ with proven track record in:                 │
│ - Full-stack architecture                    │
│ - Blockchain solutions                       │
│ - Performance optimization                   │
├──────────────────────────────────────────────┤
│ PHILOSOPHY:                                  │
│ "Building tomorrow's systems                 │
│  with today's technology while               │
│  maintaining Himalayan focus"                │
╘══════════════════════════════════════════════╛
`,
  },
  skills: {
    description: "List technical capabilities",
    execute: () => `
[SKILL MATRIX v4.7.3]
╒══════════════════════════════════════════════╕
│ CORE COMPETENCIES                            │
├──────────────────────────────────────────────┤
│ FRONTEND DOMINANCE                           │
│ ▸ React.js         [ULTRA]                   │
│ ▸ Next.js          [MASTER]                  │
│ ▸ TypeScript       [EXPERT]                  │
│ ▸ Tailwind CSS     [MASTER]                  │
│ ▸ Tanstack Query   [PRO]                     │
├──────────────────────────────────────────────┤
│ BACKEND SUPREMACY                            │
│ ▸ Node.js          [EXPERT]                  │
│ ▸ Express          [PRO]                     │
│ ▸ C++              [ADVANCED]                │
│ ▸ MySQL            [MASTER]                  │
│ ▸ API Design       [ULTRA]                   │
├──────────────────────────────────────────────┤
│ OPERATIONS EXCELLENCE                        │
│ ▸ GitHub           [ADMIN]                   │
│ ▸ Cloudflare       [MAX]                     │
│ ▸ Docker           [PRO]                     │
│ ▸ Blockchain       [EXPERT]                  │
╘══════════════════════════════════════════════╛
`,
  },
  projects: {
    description: "Portfolio showcase",
    execute: () => `
[PROJECT VAULT ACCESS GRANTED]
╒══════════════════════════════════════════════╕
│ PROJECT: Ctrl-Alt-De-Debt                    │
├──────────────────────────────────────────────┤
│ CATEGORY: Financial Liberation               │
│ CLASSIFICATION: 🔒 TOP_SECRET               │
│ STACK: Next.js, PostgreSQL,                  │
│        Tailwind CSS, TypeScript,             │
│        Zod, Kinde Auth                       │
├──────────────────────────────────────────────┤
│ PROJECT: MAYALU                              │
├──────────────────────────────────────────────┤
│ CATEGORY: Dating App                         │
│ CLASSIFICATION: 🛡️ CONFIDENTIAL             │
│ STACK: Next.js, Tailwind CSS,                │
│        TypeScript, Zod,                      │
│        Neon PostgreSQL, Kinde Auth           │
├──────────────────────────────────────────────┤
│ PROJECT: keymebaby                           │
├──────────────────────────────────────────────┤
│ CATEGORY: Security Automation                │
│ CLASSIFICATION: 🌐 OPEN_SOURCE              │
│ STACK: Node.js, Express,                     │
│        Supabase, Zod,                        │
│        Telegram Bot API                      │
├──────────────────────────────────────────────┤
│ PROJECT: Unfriended                          │
├──────────────────────────────────────────────┤
│ CATEGORY: Social Network Analysis            │
│ CLASSIFICATION: 🌐 OPEN_SOURCE              │
│ STACK: GoLang                                │
├──────────────────────────────────────────────┤
│ PROJECT: LOOP                                │
├──────────────────────────────────────────────┤
│ CATEGORY: University Rating System           │
│ CLASSIFICATION: 🚨 RESTRICTED               │
│ STACK: Next.js, Tailwind CSS,                │
│        TypeScript, Zod,                      │
│        Neon PostgreSQL, Kinde Auth           │
╘══════════════════════════════════════════════╛
`
  },
  contact: {
    description: "Secure communication info",
    execute: () => `
[ENCRYPTED SECURE COMMUNICATION CHANNELS]
╒══════════════════════════════════════════════╕
│ EMAIL:    thesushilsharma@proton.me          │
│ GITHUB:   github.com/thasushilsharma         │
│ LINKEDIN: linkedin.com/in/thesushilsharma    │
├──────────────────────────────────────────────┤
│ PGP FINGERPRINT: [AVAILABLE ON REQUEST]      │
╘══════════════════════════════════════════════╛
[END TRANSMISSION]
`,
  },
  clear: {
    description: "Clear terminal buffer",
    execute: () => "CLEAR_TERMINAL",
  },
  banner: {
    description: "Display intro sequence",
    execute: () => BANNER,
  },
  welcome: {
    description: "Display welcome message",
    execute: () => WELCOME_MSG,
  },
  ls: {
    description: 'List directories',
    execute: () => `
Available directories:
${Object.entries(DIRECTORIES).map(([key, value]) => `${key}/ - ${value.description}`).join('\n')}
    `,
  },
  cd: {
    description: "Change directory",
    execute: (args?: string[]) => {
      const dir = args?.[0];
      if (!dir) return "Usage: cd <dirname>";
      if (DIRECTORIES[dir as keyof typeof DIRECTORIES]) {
        return `NAVIGATE:${dir}`;
      }
      return `Directory not found: ${dir}`;
    },
  },
  whoami: {
    description: "Current session info",
    execute: () => `
[SESSION STATUS]
╒══════════════════════════════════════════════╕
│ USER: Unknown                                │
│ LEVEL: [REDACTED]                            │
│ STATUS: Monitoring Himalayan Network         │
│ MESSAGE: "Self-introspection in progress"    │
╘══════════════════════════════════════════════╛
`,
  },
  hack: {
    description: "Attempt to hack the mainframe",
    execute: () => `
[SECURITY BREACH DETECTED]
╒══════════════════════════════════════════════╕
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░ SYSTEM SHIELDING INITIATED ░░░░         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
├──────────────────────────────────────────────┤
│ WARNING: Unauthorized access attempt         │
│ detected from location: [UNKNOWN]            │
│ INITIATING HACK SEQUENCE                     │
│ Loading... ███████████████████████ 100%      │
│ Initiating countermeasures...                │
╘══════════════════════════════════════════════╛
ACCESS DENIED
Nice try, but our security is better than that! 😎
`,
  },
  matrix: {
    description: "Enter simulation mode",
    execute: () => `
[RED PILL CONSUMED]
Welcome to the Matrix, Sushil
Time to see how deep the rabbit hole goes...
“Be careful what you wish for, you may get it” - Nyota Uhura
${".".repeat(50)}
`,
  },
};
