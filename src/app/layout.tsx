"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Header  from '../components/header'
import  Footer  from '../components/footer'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoviBlog',
  description: 'Blog for coders by coders',
  authors: { name: 'Javaluca' },
  keywords: [ 'java', 'javascript', 'python', 'html', 'coding' ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <html lang="it">
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
      </html>
  )
}
