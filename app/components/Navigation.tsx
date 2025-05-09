'use client'

import * as React from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">
              Home
            </Link>
            <Link href="/schedule" className="text-cyan-400 hover:text-cyan-300">
              Schedule
            </Link>
            <Link href="/speakers" className="text-cyan-400 hover:text-cyan-300">
              Speakers
            </Link>
            <Link href="/tickets" className="text-cyan-400 hover:text-cyan-300">
              Tickets
            </Link>
            <Link href="/about" className="text-cyan-400 hover:text-cyan-300">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 