import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Header  from '../components/header'
import  Footer  from '../components/footer'

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
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ps-5">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
