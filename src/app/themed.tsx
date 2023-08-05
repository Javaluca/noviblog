"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
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