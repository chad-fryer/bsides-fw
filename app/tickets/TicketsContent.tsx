'use client';

import Link from 'next/link';

export default function TicketsContent() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-synthwave-bg/0 via-synthwave-purple/5 to-synthwave-bg/0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-blue/20 via-synthwave-purple/20 to-synthwave-pink/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-blue/20">
            <div className="transform -rotate-2">
              <h1 className="text-5xl font-black uppercase tracking-tighter text-synthwave-blue mb-4" style={{ textShadow: '2px 2px 8px rgba(66, 245, 255, 0.5), -2px -2px 8px rgba(66, 245, 255, 0.5)' }}>
                BSides Fort Wayne 2025
              </h1>
              <p className="text-xl font-bold text-synthwave-pink" style={{ textShadow: '0 0 10px rgba(255, 66, 255, 0.5)' }}>
                Saturday, June 7, 2025 • 8:00 AM - 5:00 PM EDT
              </p>
              <p className="text-xl font-bold text-synthwave-purple" style={{ textShadow: '0 0 10px rgba(191, 66, 255, 0.5)' }}>
                <a 
                  href="https://www.google.com/maps/dir//Walb+Student+Union,+Union+Cir+Dr,+Fort+Wayne,+IN+46815/@41.1177624,-85.1906765,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8815e3356c155555:0x4729add18077fc84!2m2!1d-85.1082757!2d41.1177918?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-synthwave-pink transition-colors duration-300"
                >
                  Walb Student Union
                </a> • Fort Wayne, IN
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-pink/20 via-synthwave-purple/20 to-synthwave-blue/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-pink/20">
            <div className="relative">
              <h2 className="text-3xl font-bold text-synthwave-pink mb-6" style={{ textShadow: '0 0 15px rgba(255, 66, 255, 0.5)' }}>Important Notice</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Due to the time required to print t-shirts and limited stock of badges, only tickets purchased prior to 4/1 will be guarenteed a shirt and badge. Please bring your ticket to receive your tshirt and badge.
              </p>
            </div>
          </div>
        </section>

        {/* Early Bird Ticket Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-blue/20 via-synthwave-pink/20 to-synthwave-purple/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-blue/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-synthwave-blue mb-2" style={{ textShadow: '0 0 15px rgba(66, 245, 255, 0.5)' }}>Early Registration Ticket</h2>
                <p className="text-synthwave-pink font-bold" style={{ textShadow: '0 0 10px rgba(255, 66, 255, 0.3)' }}>Available until April 1st, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-black text-synthwave-blue" style={{ textShadow: '2px 2px 8px rgba(66, 245, 255, 0.5), -2px -2px 8px rgba(66, 245, 255, 0.5)' }}>$30</p>
              </div>
            </div>
            
            <ul className="grid grid-cols-2 gap-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-pink">›</span> Conference Entry
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-pink">›</span> Guaranteed T-shirt
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-pink">›</span> Conference Badge
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-pink">›</span> Catered Lunch
              </li>
            </ul>

            <div className="flex justify-end">
              <a 
                href="https://www.eventbrite.com/e/bsides-fort-wayne-2025-tickets-1091117996299?aff=ebdssbdestsearch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 text-xl font-bold text-black bg-synthwave-blue hover:bg-synthwave-pink rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,66,255,0.5)]"
              >
                Get Your Ticket
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-purple/20 via-synthwave-blue/20 to-synthwave-pink/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-purple/20">
            <h2 className="text-3xl font-bold text-synthwave-purple mb-6" style={{ textShadow: '0 0 15px rgba(191, 66, 255, 0.5)' }}>Important Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-blue">›</span>
                Student discount available - Email bsidesfortwayne.tickets@gmail.com for promo code
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-blue">›</span>
                Free parking at Broyles Blvd Garage
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-blue">›</span>
                Doors open at 8:00 AM, Keynote starts at 9:00 AM
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-blue">›</span>
                Refunds available up to 7 days before the event
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-2xl mr-2 text-synthwave-blue">›</span>
                Casual dress code recommended
              </li>
            </ul>
          </div>
        </section>

        {/* Event Features Section */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-pink/20 via-synthwave-purple/20 to-synthwave-blue/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-pink/20">
            <h2 className="text-3xl font-bold text-synthwave-pink mb-6" style={{ textShadow: '0 0 15px rgba(255, 66, 255, 0.5)' }}>Event Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Three speaker tracks
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Capture The Flag competition
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Badge Hacking
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Lock picking table
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Exhibitor hall
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Conference swag
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Raffle prizes
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-2xl mr-2 text-synthwave-purple">›</span>
                  Networking opportunities
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 