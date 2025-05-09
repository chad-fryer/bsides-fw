import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomeBackground from './components/HomeBackground'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSides Fort Worth",
  description: "BSides Fort Worth - Security Conference",
};

// Enable static rendering for better performance
export const dynamic = 'force-static'
export const revalidate = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} text-white relative min-h-screen`}>
        <HomeBackground />
        <div className="relative min-h-screen flex flex-col">
          <Navigation />
          <main className="container mx-auto px-4 py-8 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 