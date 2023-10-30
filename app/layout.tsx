import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'; 
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'My Side Project',
  description: 'The app I have created',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-gradient-to-bl from-slate-400 to-zinc-100 ${inter.className}`}>{children}
          <Analytics/>
      </body>
    </html>
  )
}
