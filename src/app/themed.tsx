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
            <body className='bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100'>
              
                <Header />
                <main className="flex min-h-screen flex-col items-center justify-between md:p-24 px-2 py-3">
                  <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between">
                    {children}
                  </div>
                </main>
                <Footer />
            </body>
          </ThemeProvider>
    )
}