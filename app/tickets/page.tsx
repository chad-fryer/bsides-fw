'use client';

import Link from 'next/link';

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 gap-4 h-full w-full opacity-10">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="aspect-square rounded-none bg-gradient-to-r from-[#7FDBFF] to-[#FFE600]"></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-black border border-[#7FDBFF] rounded-lg overflow-hidden transform hover:scale-[1.01] transition-all relative group">
          {/* Animated border gradient */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FF4B3E] via-[#FFE600] to-[#7FDBFF] rounded-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
          
          {/* Header */}
          <div className="relative bg-black px-6 py-8 border-b border-[#7FDBFF]">
            <div className="transform -rotate-2">
              <h1 className="text-5xl font-black uppercase tracking-tighter text-[#FFE600]" style={{ textShadow: '0 0 20px rgba(255,230,0,0.5)' }}>
                BSides Fort Wayne 2025
              </h1>
              <p className="mt-2 text-xl font-bold text-[#7FDBFF]">
                Saturday, June 7, 2025 • 8:00 AM - 5:00 PM EDT
              </p>
              <p className="mt-1 text-xl font-bold text-[#7FDBFF]">
                Walb Student Union • Fort Wayne, IN
              </p>
            </div>
          </div>

          {/* Ticket Information */}
          <div className="relative px-6 py-8 bg-black">
            <div className="space-y-8">
              {/* Important Notice */}
              <div className="border border-[#FF4B3E] rounded-lg p-4 bg-[#FF4B3E]/10 backdrop-blur-sm relative">
                <div className="absolute -top-3 left-4 bg-black px-2">
                  <span className="text-[#FF4B3E] font-bold uppercase text-sm">Important Notice</span>
                </div>
                <p className="text-[#FFE600] leading-relaxed">
                  Note: Due to the time required to print t-shirts and limited stock of badges, only tickets purchased prior to 4/1 will be guarenteed a shirt and badge. Please bring your ticket to receive your tshirt and badge.
                </p>
              </div>

              {/* Early Bird Ticket */}
              <div className="border border-[#FFE600] rounded-lg p-6 bg-black/50 backdrop-blur-sm transform hover:scale-[1.02] transition-transform relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FFE600] via-[#FF4B3E] to-[#7FDBFF] rounded-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-[#FFE600]">Early Registration Ticket</h3>
                      <p className="text-[#7FDBFF] mt-2 font-bold">Available until April 1st, 2025</p>
                      <ul className="mt-4 space-y-2 text-[#FFE600]">
                        <li className="flex items-center">
                          <span className="text-2xl mr-2 text-[#FF4B3E]">›</span> Conference Entry
                        </li>
                        <li className="flex items-center">
                          <span className="text-2xl mr-2 text-[#FF4B3E]">›</span> Guaranteed T-shirt
                        </li>
                        <li className="flex items-center">
                          <span className="text-2xl mr-2 text-[#FF4B3E]">›</span> Conference Badge
                        </li>
                        <li className="flex items-center">
                          <span className="text-2xl mr-2 text-[#FF4B3E]">›</span> Catered Lunch
                        </li>
                      </ul>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-[#FFE600]" style={{ textShadow: '0 0 10px rgba(255,230,0,0.5)' }}>$30</p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <a 
                      href="https://www.eventbrite.com/e/bsides-fort-wayne-2025-tickets-1091117996299?aff=ebdssbdestsearch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF4B3E] text-[#FFE600] px-8 py-3 rounded font-black text-xl uppercase tracking-wider hover:bg-[#FF4B3E]/80 transform hover:scale-105 transition-transform"
                    >
                      Get Tickets!
                    </a>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="border border-[#7FDBFF] rounded-lg p-6 bg-black/50 backdrop-blur-sm relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#7FDBFF] via-[#FFE600] to-[#FF4B3E] rounded-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#7FDBFF] mb-4">Important Information</h3>
                  <ul className="space-y-3 text-[#FFE600]">
                    <li className="flex items-center">
                      <span className="text-2xl mr-2 text-[#7FDBFF]">›</span>
                      Student discount available - Email bsidesfortwayne.tickets@gmail.com for promo code
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-2 text-[#7FDBFF]">›</span>
                      Free parking at Broyles Blvd Garage
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-2 text-[#7FDBFF]">›</span>
                      Doors open at 8:00 AM, Keynote starts at 9:00 AM
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-2 text-[#7FDBFF]">›</span>
                      Refunds available up to 7 days before the event
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-2 text-[#7FDBFF]">›</span>
                      Casual dress code recommended
                    </li>
                  </ul>
                </div>
              </div>

              {/* Event Features */}
              <div className="border border-[#FFE600] rounded-lg p-6 bg-black/50 backdrop-blur-sm relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FFE600] via-[#7FDBFF] to-[#FF4B3E] rounded-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#FFE600] mb-4">Event Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-[#7FDBFF]">
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Three speaker tracks
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Capture The Flag competition
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Badge Hacking
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Lock picking table
                      </li>
                    </ul>
                    <ul className="space-y-3 text-[#7FDBFF]">
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Exhibitor hall
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Conference swag
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Raffle prizes
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-2 text-[#FFE600]">›</span>
                        Networking opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 