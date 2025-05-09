import { Metadata } from 'next'
import Schedule from '../components/Schedule'

export const metadata: Metadata = {
  title: 'Schedule | BSidesFW 2024',
  description: 'Conference schedule for BSidesFW 2024',
}

export default function SchedulePage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">Conference Schedule</h1>
      <Schedule />
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold text-cyan-400 animate-glow">Conference concludes at 5:00 PM</p>
      </div>
    </main>
  )
} 