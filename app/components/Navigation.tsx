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
    <header className="fixed w-full top-0 z-50">
      <nav 
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-synthwave-bg/30 backdrop-blur-sm border-b border-synthwave-blue/20" 
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <span className="text-2xl font-bold text-synthwave-blue animate-pulse">BSides</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-synthwave-blue hover:text-synthwave-pink transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-synthwave-blue hover:text-synthwave-pink transition-colors hover:shadow-neon-pink"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-synthwave-bg/90 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-synthwave-blue/20">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Home</span>
              <span className="text-2xl font-bold text-synthwave-blue animate-pulse">BSides</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-synthwave-blue hover:text-synthwave-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-bold leading-7 text-synthwave-blue hover:text-synthwave-pink hover:bg-synthwave-pink/10 transition-colors hover:shadow-neon-pink"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 