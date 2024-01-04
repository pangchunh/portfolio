import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

/* eslint-disable */
export const metadata = {
  title: "Peter Pang's Portfolio",
  description: 'Full Stack Developer from Vancouver, BC',
}

/* eslint-disable */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
