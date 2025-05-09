import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | BSidesFW 2025',
  description: 'Learn about BSides Fort Wayne, a community-driven information security conference.',
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-synthwave-bg/0 via-synthwave-purple/5 to-synthwave-bg/0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* What is BSides Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-blue/20 via-synthwave-purple/20 to-synthwave-pink/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-blue/20">
            <h1 className="text-5xl font-bold text-synthwave-blue mb-8">What is BSides?</h1>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Each BSides is a community-driven framework for building events for and by information security community members. 
                The goal is to expand the spectrum of conversation beyond the traditional confines of space and time. It creates 
                opportunities for individuals to both present and participate in an intimate atmosphere that encourages collaboration. 
                It is an intense event with discussions, demos, and interaction from participants. It is where conversations for the 
                next-big-thing are happening.
              </p>
              <a 
                href="http://www.securitybsides.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-synthwave-blue hover:text-synthwave-pink transition-colors group"
              >
                <span className="group-hover:underline">Learn more about BSides</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* What is BSidesFortWayne Section */}
        <section className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-synthwave-pink/20 via-synthwave-purple/20 to-synthwave-blue/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-synthwave-pink/20">
            <h2 className="text-4xl font-bold text-synthwave-pink mb-8">What is BSidesFortWayne?</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                BSidesFortWayne started as a conversation amongst friends with the desire to see an information security conference 
                right here in our city. "Better Together" is a theme for our local conference. When we connect with other information 
                security professionals and share our knowledge openly, we can each better secure ourselves and the organizations that 
                we help protect. We're also extremely excited to see how this can open up new opportunities for organizations to find 
                talent and for folks that are wanting to break into the information security industry to gain knowledge and make 
                connections with people that may help propel them into the industry.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 