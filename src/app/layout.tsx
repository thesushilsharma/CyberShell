import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Terminal Interface - Navigate Secure Directories",
  description: "Explore a sleek, animated terminal UI that showcases classic system commands with a modern twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 🕵️ Console Easter Egg */}
      <Script id="console-easter-egg" strategy="afterInteractive">
        {`
            console.log(
              "%c🔓 SECURITY BREACH DETECTED 🔓",
              "color: #00ff00; font-size: 20px; font-weight: bold;"
            );
            console.log(
              "%cWARNING: Unauthorized access to this console may result in immediate termination.",
              "color: #ff0000; font-size: 14px;"
            );
            console.log(
              "%cTIP: Try running 'help' in the terminal for available commands...",
              "color: #00ff00; font-size: 12px;"
            );
            console.log(
              "%c[HIDDEN]: Some secrets can only be found in the source...",
              "color: #888888; font-size: 10px;"
            );
          `}

      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Hidden source code easter egg */}
        {/* 
          SECURITY LEVEL: MAXIMUM
          STATUS: COMPROMISED
          HIDDEN COMMAND FOUND: Try 'matrix' in the terminal
          01010100 01101000 01100101 00100000 01100011 01100001 01101011 
          01100101 00100000 01101001 01110011 00100000 01100001 00100000 
          01101100 01101001 01100101
        */}

        {/* 
          ███████╗██╗   ██╗███████╗██╗  ██╗██╗██╗      
          ██╔════╝██║   ██║██╔════╝██║  ██║██║██║      
          ███████╗██║   ██║███████╗███████║██║██║      
          ╚════██║██║   ██║╚════██║██╔══██║██║██║      
          ███████║╚██████╔╝███████║██║  ██║██║███████╗ 
          ╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝ 
          
          Found this secret? Play around with the terminal...
        */}
        {children}
      </body>
    </html>
  );
}
