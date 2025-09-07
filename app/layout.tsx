import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEVEN7OS',
  description: 'Real estate CRM built for high-speed deal markers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}