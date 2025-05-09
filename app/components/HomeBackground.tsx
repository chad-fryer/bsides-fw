import * as React from 'react'

const HomeBackground = React.memo(function HomeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-synthwave-bg overflow-hidden">
      {/* Main background image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Base illustration with parallax effect */}
          <div 
            className="absolute inset-0 bg-[url('/synthwave-hackers.png')] bg-no-repeat bg-center opacity-90 animate-float"
            style={{
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-synthwave-bg/30 via-transparent to-synthwave-bg/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-synthwave-bg/10 to-synthwave-bg/40" />
        </div>
      </div>

      {/* Animated grid overlay for synthwave effect */}
      <div className="absolute inset-0 mix-blend-overlay opacity-20">
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(66, 245, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(66, 245, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
          }} 
        />
      </div>

      {/* Neon glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-synthwave-blue/30 to-transparent animate-glow" />
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-synthwave-pink/30 to-transparent animate-glow" />
        
        {/* Side glows */}
        <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-synthwave-purple/30 to-transparent animate-glow" />
        <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-synthwave-purple/30 to-transparent animate-glow" />
      </div>

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none animate-scanline" 
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 51%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  )
})

HomeBackground.displayName = 'HomeBackground'

export default HomeBackground 