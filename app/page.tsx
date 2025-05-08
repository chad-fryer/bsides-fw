import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative isolate bg-black min-h-screen">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                BSides Fort Wayne 2025
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join us on Saturday, June 7, 2025 at Walb Student Union for Fort Wayne's Premier Information Security Conference
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/tickets"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Get your ticket
                </Link>
                <Link href="/schedule" className="text-sm font-semibold leading-6 text-white">
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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About BSides Fort Wayne</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            BSides Fort Wayne is a community-driven information security conference that brings together professionals, 
            enthusiasts, and newcomers to share knowledge, experience, and ideas. Our goal is to create an open environment 
            for learning and collaboration in the information security community.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">Engaging Talks</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Learn from industry experts and practitioners sharing their knowledge on the latest security trends, 
                  techniques, and challenges.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">Hands-on Workshops</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Get practical experience with interactive workshops covering various security topics, from penetration 
                  testing to defensive techniques.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">Networking</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Connect with like-minded individuals, potential employers, and industry leaders in a welcoming and 
                  inclusive environment.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
} 