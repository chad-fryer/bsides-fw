import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative pt-14">
        {/* Decorative elements */}
        <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="h-96 w-96 rotate-45 bg-gradient-to-r from-[#FF4B3E]/20 to-[#FFE600]/30 blur-3xl" />
          </div>
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center relative">
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#FFE600]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#FFE600]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#FFE600]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#FFE600]" />

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl relative group">
                <span className="relative inline-block group-hover:animate-glitch-1">
                  <span className="text-[#FFE600]">BSides</span>{' '}
                  <span className="text-[#FFE600]">Fort Wayne</span>
                  <span className="absolute -inset-1 animate-glitch-1 bg-[#FFE600]/20 blur-sm"></span>
                  <span className="absolute -inset-2 animate-glitch-2 bg-[#FFE600]/20 blur-sm"></span>
                </span>
                <br />
                <span className="text-[#FFE600] animate-flicker">2025</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#FFE600]">
                Join us on <span className="text-[#FFE600]">Saturday, June 7, 2025</span> at Walb Student Union for Fort Wayne's Premier Information Security Conference
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/tickets"
                  className="relative group rounded-md bg-[#FF4B3E] px-3.5 py-2.5 text-sm font-bold text-[#FFE600] shadow-sm hover:bg-[#FF4B3E]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4B3E]"
                >
                  <span className="relative z-10">Get your ticket</span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FFE600]/50 to-[#FFE600]/50 opacity-0 blur transition group-hover:opacity-100" />
                </Link>
                <Link href="/schedule" className="text-sm font-bold leading-6 text-[#FFE600] hover:text-[#FFE600] transition-colors">
                  View schedule <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#7FDBFF] sm:text-4xl">About BSides Fort Wayne</h2>
          <p className="mt-6 text-lg leading-8 text-[#FFE600]">
            BSides Fort Wayne is a community-driven information security conference that brings together professionals, 
            enthusiasts, and newcomers to share knowledge, experience, and ideas. Our goal is to create an open environment 
            for learning and collaboration in the information security community.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Engaging Talks",
                description: "Learn from industry experts and practitioners sharing their knowledge on the latest security trends, techniques, and challenges."
              },
              {
                title: "Hands-on Workshops",
                description: "Get practical experience with interactive workshops covering various security topics, from penetration testing to defensive techniques."
              },
              {
                title: "Networking",
                description: "Connect with like-minded individuals, potential employers, and industry leaders in a welcoming and inclusive environment."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col relative group">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-[#FFE600]/20 to-[#FFE600]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <dt className="text-base font-bold leading-7 text-[#7FDBFF] relative">{item.title}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-[#FFE600] relative">
                  <p className="flex-auto">{item.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 