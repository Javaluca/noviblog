import Footer from '@/components/footer'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Themed } from './themed'

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
      <html lang="en">
        
          <body className='bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100'>
            <Themed>
              <Header />
              <main className="flex min-h-screen flex-col items-center justify-between py-10 px-3 lg:px-0">
                <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between">
                  {children}
                </div>
              </main>
              <Footer />
            </Themed>
          </body>
      </html>
  )
}
