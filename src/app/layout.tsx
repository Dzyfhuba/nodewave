import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import Background from '@/images/background1.png'

const inter = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], adjustFontFallback: true })

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
        <div className={styles.background}>
          <Image src={Background} alt='background' priority />
        </div>
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
