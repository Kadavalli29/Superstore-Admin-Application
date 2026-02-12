import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuperStore Admin Dashboard',
  description: 'Professional admin dashboard for superstore management',
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
