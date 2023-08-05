"use client"
import { ThemeProvider } from "next-themes";

export function Themed({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
    )
}