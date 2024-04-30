import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Finder",
  description: "Find a pair programmer or a mentor to help you with your coding problems.",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode}>) 
{
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <ModeToggle />
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
