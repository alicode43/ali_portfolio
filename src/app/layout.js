import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Rustam's Porfolio",
  description:  "Rustam's Porfolio",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/images/hero-image.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
