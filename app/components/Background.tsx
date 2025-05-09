import * as React from 'react'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-pop-black overflow-hidden">
      {/* Main illustration in top-left corner with gradient fade */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Base illustration */}
          <div className="absolute inset-0 bg-[url('/cafe-illustration.png')] bg-no-repeat bg-cover" />
          
          {/* Gradient overlays for fading */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pop-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pop-black" />
        </div>
      </div>

      {/* Halftone pattern overlay for vintage effect */}
      <div className="absolute inset-0 mix-blend-overlay opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 
            `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-pop-black via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-pop-black opacity-40" />
    </div>
  )
} 