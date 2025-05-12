'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  imageUrl: string
  talkTitle: string
  talkDescription: string
}

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="bg-black/40 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-black/50 relative"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {speaker.name === 'Dr. Chase Cunningham' && (
        <div className="absolute top-4 right-[-20px] bg-red-600 text-white px-8 py-1 transform rotate-[30deg] z-10 font-bold shadow-lg">
          KEYNOTE
        </div>
      )}
      <div className="relative w-full h-96">
        <Image
          src={speaker.imageUrl}
          alt={speaker.name}
          fill
          className="object-cover"
          style={{ objectPosition: speaker.name === 'Arvin Freeland' ? 'center 25%' : 
                                 speaker.name === 'Brett Gilsinger' ? 'center 25%' : 'center 15%' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 bg-black/20">
        <h2 className="text-2xl font-bold mb-2 text-cyan-400">{speaker.name}</h2>
        <p className="text-cyan-300/90 mb-2">
          {speaker.title}{speaker.company && ` at ${speaker.company}`}
        </p>
        <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">{speaker.talkTitle}</h3>
        {speaker.talkDescription && (
          <p className="text-cyan-300/90 mb-4">
            {speaker.talkDescription}
          </p>
        )}
        <p 
          className={`text-gray-300 whitespace-pre-line ${isExpanded ? '' : 'line-clamp-4'} transition-all duration-300`}
          dangerouslySetInnerHTML={{ __html: speaker.bio }}
        />
        <button 
          className="mt-2 text-cyan-400 text-sm hover:underline focus:outline-none hover:text-cyan-300"
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  )
} 