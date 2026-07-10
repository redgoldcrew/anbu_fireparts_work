import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anbu Fire Part Works | Fire Safety & Engineering Solutions, Tamil Nadu',
  description: 'Fire extinguisher sales, fire alarm systems, fire hydrant pipeline work and statutory fire buckets serving all over Tamil Nadu. Fully certified fire safety solutions.',
  generator: 'v0.app',
  openGraph: {
    title: 'Anbu Fire Part Works | Fire Safety & Engineering',
    description: 'Complete fire safety solutions across Tamil Nadu',
    url: 'https://anbufireparts.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anbu Fire Part Works',
    description: 'Fire safety and engineering solutions',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A1930',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
