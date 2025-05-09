import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeBackground from './components/HomeBackground'

export default function Home() {
  return (
    <>
      <HomeBackground />
      <div className="relative">
        {/* Hero section */}
        <div className="relative pt-14">
          {/* Decorative elements */}
          <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="h-96 w-96 rotate-45 bg-gradient-to-r from-[#FF4B3E]/20 to-[#FFE600]/30 blur-3xl" />
            </div>
          </div>

          <div className="py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="ml-auto max-w-lg text-right relative">
                <h1 className="text-2xl font-bold tracking-tight sm:text-4xl relative group">
                  <span className="relative inline-block group-hover:animate-glitch-1">
                    <span className="text-[#FFE600]">BSides</span>{' '}
                    <span className="text-[#FFE600]">Fort Wayne</span>
                    <span className="absolute -inset-1 animate-glitch-1 bg-[#FFE600]/20 blur-sm"></span>
                    <span className="absolute -inset-2 animate-glitch-2 bg-[#FFE600]/20 blur-sm"></span>
                  </span>
                  <br />
                  <span className="text-[#FF4B3E] animate-flicker">2025</span>
                </h1>
                <p className="mt-4 text-base leading-7 text-[#FFE600]">
                  Join us Saturday, <span className="text-[#7FDBFF]">June 7, 2025</span> at <Link href="https://www.pfw.edu/wuo" className="text-[#FFE600] hover:text-[#7FDBFF] transition-colors">Walb Student Union</Link> for Fort Wayne's Premier Information Security Conference
                </p>
                <div className="mt-6 flex items-center justify-end gap-x-4">
                </div>
              </div>
            </div>
          </div>

          {/* Invisible spacer to maintain layout */}
          <div className="h-64 sm:h-80" />
        </div>

        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#7FDBFF] sm:text-4xl">About BSides Fort Wayne</h2>
            <p className="mt-6 text-lg leading-8 text-[#FFE600]">
              BSides Fort Wayne is a community-driven information security conference that brings together professionals, 
              enthusiasts, and newcomers to share knowledge, experience, and ideas. Our goal is to create an open environment 
              for learning and collaboration in the information security community.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Engaging Talks",
                  description: "Learn from industry experts and practitioners sharing their knowledge on the latest security trends, techniques, and challenges."
                },
                {
                  title: "Hands-on Workshops",
                  description: "Get practical experience with interactive workshops covering various security topics, from lockpicking to defensive techniques."
                },
                {
                  title: "Networking",
                  description: "Connect with like-minded individuals, potential employers, and industry leaders in a welcoming and inclusive environment."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col relative group">
                  <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-[#FFE600]/20 to-[#FFE600]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <dt className="text-lg font-bold leading-7 text-[#7FDBFF] relative">{item.title}</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-lg leading-7 text-[#FFE600] relative">
                    <p className="flex-auto">{item.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
} 