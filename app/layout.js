import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'justdebbie.ing',
  description: 'Creative direction for brands that need less "what now?" and more "watch this." Based in Manila, available remote.',
  metadataBase: new URL('https://justdebbie.ing'),
  openGraph: {
    title: 'justdebbie.ing',
    description: 'Creative direction for brands that need less "what now?" and more "watch this."',
    url: 'https://justdebbie.ing',
    siteName: 'justdebbie.ing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'justdebbie.ing',
    description: 'Creative direction for brands that need less "what now?" and more "watch this."',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script async src="https://cdn.seline.so/seline.js" />
        {children}
        <GoogleAnalytics gaId="G-ZLLE193BG3" />
        <Analytics />
      </body>
    </html>
  )
}