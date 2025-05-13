'use client'

import * as React from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavigation = (href: string) => {
    if (href === '/') {
      router.push(href)
      scrollToTop()
    }
    setMobileMenuOpen(false)
  }

  // Handle click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu')
      const button = document.getElementById('menu-button')
      if (mobileMenuOpen && menu && !menu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-synthwave-bg/50 backdrop-blur-sm border-b border-synthwave-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="menu-button"
              type="button"
              className="text-synthwave-blue hover:text-synthwave-pink transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation - centered */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.href === '/' ? scrollToTop : undefined}
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 w-64 bg-synthwave-bg/75 transform transition-transform duration-300 ease-in-out md:hidden border-r border-synthwave-blue/20`}
      >
        <div className="pt-20 pb-4 px-4 bg-synthwave-bg/75">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className="font-orbitron text-synthwave-blue hover:text-synthwave-pink transition-colors duration-300 font-medium tracking-wider text-lg py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 