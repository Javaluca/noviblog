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
      <html lang="it">
        <Themed>
         {children}
        </Themed>
      </html>
  )
}
