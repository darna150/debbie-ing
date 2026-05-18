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
  alternates: {
    canonical: 'https://justdebbie.ing',
  },
  authors: [{ name: 'Debbie Melgarejo', url: 'https://justdebbie.ing' }],
  creator: 'Debbie Melgarejo',
  keywords: [
    'creative direction',
    'brand strategy',
    'content systems',
    'campaign direction',
    'film',
    'digital experience',
    'Manila',
    'remote',
    'Debbie Melgarejo',
  ],
  openGraph: {
    title: 'justdebbie.ing',
    description: 'Creative direction for brands that need less "what now?" and more "watch this."',
    url: 'https://justdebbie.ing',
    siteName: 'justdebbie.ing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'justdebbie.ing',
    description: 'Creative direction for brands that need less "what now?" and more "watch this."',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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