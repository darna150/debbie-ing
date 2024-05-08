import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.justdebbie.ing/'),
  title: 'Just Debbie',
  description: "Her goal isn't just a job—it's a mission to make the world better, bit by bit, leaving behind a trail of awesome projects that bring big changes to people's lives.",
  authors: [{ name: 'Just Debbie', url: '/' }],
  creator: 'Just Debbie',
  publisher: 'Just Debbie',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Just Debbie',
    description: "Her goal isn't just a job—it's a mission to make the world better, bit by bit, leaving behind a trail of awesome projects that bring big changes to people's lives.",
    type: 'website',
    url: '/',
    locale: 'en_us',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 600,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
