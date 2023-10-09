import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Nodewave',
  description: 'Nodewave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
