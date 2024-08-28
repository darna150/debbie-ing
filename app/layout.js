import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

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