import * as React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Background from './components/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BSides Fort Wayne',
  description: 'Fort Wayne\'s Premier Information Security Conference',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white relative`}>
        <Background />
        <div className="relative min-h-screen">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 