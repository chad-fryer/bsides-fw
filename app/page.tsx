import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeBackground from './components/HomeBackground'

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 relative">
      <HomeBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-synthwave-bg/0 via-synthwave-purple/5 to-synthwave-bg/0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Hero Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-blue/20 via-synthwave-purple/20 to-synthwave-pink/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-blue/20">
            <div className="text-right">
              <h1 className="text-6xl font-black uppercase tracking-tighter mb-4" style={{ textShadow: '2px 2px 8px rgba(66, 245, 255, 0.5), -2px -2px 8px rgba(66, 245, 255, 0.5)' }}>
                <span className="text-synthwave-blue">BSidesFW</span>
                <br />
                <span className="text-synthwave-pink">2025</span>
              </h1>
              <p className="text-xl font-bold text-gray-300 leading-relaxed">
                Join us <span className="text-synthwave-pink">Saturday, June 7, 2025</span> at{' '}
                <a 
                  href="https://www.google.com/maps/dir//Walb+Student+Union,+Union+Cir+Dr,+Fort+Wayne,+IN+46815/@41.1177624,-85.1906765,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8815e3356c155555:0x4729add18077fc84!2m2!1d-85.1082757!2d41.1177918?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-synthwave-blue hover:text-synthwave-pink transition-colors duration-300"
                >
                  Walb Student Union
                </a>{' '}
                for Fort Wayne's Premier Information Security Conference
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-pink/20 via-synthwave-purple/20 to-synthwave-blue/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-pink/20">
            <h2 className="text-4xl font-bold text-synthwave-pink mb-8" style={{ textShadow: '0 0 15px rgba(255, 66, 255, 0.5)' }}>
              About BSidesFW
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              BSidesFW is a community-driven information security conference that brings together professionals, 
              enthusiasts, and newcomers to share knowledge, experience, and ideas. Our goal is to create an open environment 
              for learning and collaboration in the information security community.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Engaging Talks",
              description: "Learn from industry experts and practitioners sharing their knowledge on the latest security trends, techniques, and challenges.",
              color: "blue"
            },
            {
              title: "Hands-on Workshops",
              description: "Get practical experience with interactive workshops covering various security topics, from lockpicking to defensive techniques.",
              color: "purple"
            },
            {
              title: "Networking",
              description: "Connect with like-minded individuals, potential employers, and industry leaders in a welcoming and inclusive environment.",
              color: "pink"
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r from-synthwave-${item.color}/20 via-synthwave-purple/20 to-synthwave-blue/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse`} />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-synthwave-blue/20 h-full">
                <h3 
                  className={`text-2xl font-bold text-synthwave-${item.color} mb-4`}
                  style={{ textShadow: `0 0 15px rgba(${item.color === 'blue' ? '66, 245, 255' : item.color === 'purple' ? '191, 66, 255' : '255, 66, 255'}, 0.5)` }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
} 