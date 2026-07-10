import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anbu Fire Part Works | Fire Safety & Engineering Solutions, Tamil Nadu',
  description: 'Anbu Fire Part Works provides fire extinguisher sales, refilling, servicing, fire alarm systems, hydrant installation, AMC, and complete fire safety solutions in Madurai and across Tamil Nadu. Contact us today for reliable fire protection services.',
  keywords:'Best Fire Extinguisher Dealer in Madurai, Fire Extinguisher Refilling Near Me, Fire Safety Equipment Supplier Near Me, Fire Alarm Installation Company, Fire Hydrant Installation Services, Fire Safety AMC Services, Industrial Fire Safety Solutions, Commercial Fire Protection Services, Office Fire Safety Equipment, Factory Fire Safety Systems',
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
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2E3239',
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
        {process.env.VERCEL_ANALYTICS_ENABLED === 'true' && <Analytics />}
      </body>
    </html>
  )
}
