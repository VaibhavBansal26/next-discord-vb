import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord VB',
  description: 'Discord using next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
