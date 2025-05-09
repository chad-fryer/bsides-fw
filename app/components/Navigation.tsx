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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-synthwave-bg/50 backdrop-blur-sm border-b border-synthwave-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-orbitron text-synthwave-blue hover:text-synthwave-pink transition-colors duration-300 font-medium relative group tracking-wider text-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-synthwave-pink transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" 
                  style={{ boxShadow: '0 0 10px rgba(255, 36, 150, 0.5)' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 