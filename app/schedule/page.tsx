import { Metadata } from 'next'
import Schedule from '../components/Schedule'

export const metadata: Metadata = {
  title: 'Schedule | BSidesFW 2025',
  description: 'Conference schedule for BSidesFW 2025',
}

export default function SchedulePage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-synthwave-bg/0 via-synthwave-purple/5 to-synthwave-bg/0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-5xl font-bold text-center mb-12 text-synthwave-blue" style={{ textShadow: '2px 2px 8px rgba(66, 245, 255, 0.5), -2px -2px 8px rgba(66, 245, 255, 0.5)' }}>
          Conference Schedule
        </h1>
        <Schedule />
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-synthwave-pink" style={{ textShadow: '0 0 15px rgba(255, 66, 255, 0.5)' }}>
            Conference concludes at 5:00 PM
          </p>
        </div>
      </div>
    </main>
  )
} 