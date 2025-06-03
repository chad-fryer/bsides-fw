import { Metadata } from 'next'
import SpeakerCard from '../components/SpeakerCard'

export const metadata: Metadata = {
  title: 'Speakers | BSides Fort Wayne 2024',
  description: 'Meet our amazing lineup of speakers for BSides Fort Wayne 2024',
}

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

// Temporary speaker data - this could be moved to a separate data file or CMS later
const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Chase Cunningham',
    title: 'DrZeroTrust',
    company: '',
    bio: `Dr. Chase Cunningham is a cybersecurity strategist and thought leader, celebrated for pioneering the influential Zero Trust Extended (ZTX) Framework at Forrester Research, significantly accelerating the adoption of Zero Trust principles globally.

With extensive executive leadership experience, including roles as Chief Strategy Officer at Demo-Force.com and Ericom Software, Dr. Cunningham has consistently driven market innovation, strategic partnerships, and growth initiatives. His unique talent for aligning complex cybersecurity strategies with practical business objectives has consistently delivered impactful market results and heightened technology adoption.

Beyond his executive roles, Dr. Cunningham advises senior leaders within the U.S. Department of Defense and international governments, shaping critical cybersecurity policies and frameworks. A sought-after keynote speaker and strategic advisor, he is known for translating sophisticated cybersecurity challenges into clear, actionable insights, earning multiple accolades for his engaging presentations.

Committed passionately to the belief that cybersecurity is a fundamental human right, Dr. Cunningham leverages his visionary approach, innovative thinking, and extensive industry connections to foster secure, resilient digital environments.

Connect:

Twitter: @cynjachasec

Podcast: https://anchor.fm/chase-cunningham8

YouTube: https://www.youtube.com/c/chasecunningham`,
    imageUrl: '/speakers/speaker9.jpeg',
    talkTitle: 'Opening Keynote',
    talkDescription: '',
  },
  {
    id: '2',
    name: 'Richard Rieben',
    title: 'Partner & HITRUST Practice Lead',
    company: 'Linford & Co.',
    bio: 'Richard Rieben is a recovering IT guy who found his true calling in the world of audits and assessments. As a Partner and HITRUST Practice Lead at Linford & Co., he helps organizations navigate security frameworks like HITRUST, SOC, CMMC, and NIST—without losing their minds. With 20+ years in IT and cybersecurity and certs like CISSP, PMP, GSNA, and CASP+ under his belt, Richard brings a practical, real-world perspective to building better security programs. He holds a BS and MBA from Western Governors University and enjoys translating compliance-speak into something humans can actually understand.',
    imageUrl: '/speakers/speaker1.jpeg',
    talkTitle: 'Building Resilient AI: Security Frameworks and Certification Standards',
    talkDescription: '',
  },
  {
    id: '3',
    name: 'Patrick Scherrer',
    title: 'Information Security Manager',
    company: 'Rea Magnet Wire',
    bio: `Patrick Scherrer began his IT Career working the helpdesk in a call center while studying Chemical Engineering. The work demands and passion for IT quickly took over and he abandoned his studies for a career in IT serving roles in Unix and Linux, database and network administration. With the birth of his youngest son in 2009, he returned to finish his degree in Information Technology at Indiana Tech in 2013, followed by an MBA from IPFW in 2014. He enjoys being and adult learner, completing a Masters in Cybersecurity Management from Purdue Global in 2022 and will begin studies in a DBA program in the fall. He also holds an ISACA Certified Information Security Manager (CISM) certification and is a United States Marine Corps veteran.

Patrick has been the Information Security and IT Operations manager at Rea Magnet Wire since 2014. Focusing on Cybersecurity, IT resiliency and IT Operations.  He is deeply committed to furthering STEM education and has served as a member of the Board of Directors for Girl Scouts of Northern Indiana and Michigan.`,
    imageUrl: '/speakers/speaker2.jpg',
    talkTitle: 'All the times I really screwed up',
    talkDescription: '',
  },
  {
    id: '4',
    name: 'Emma Clouse',
    title: 'Quality Assurance Manager',
    company: 'Sweetwater Sound',
    bio: `Emma Clouse is currently a Quality Assurance Manager at Sweetwater Sound, with a primary focus on supporting the business CRM. Previously she worked as a Quality Assurance Manager at Epic Systems overseeing the projects and QA team responsible for the Radiology and Gastroenterology applications (Radiant and Lumens, respectively). She holds a master's degree in philosophy and uses this training, particularly in formal logic, to find bugs breaking the hearts of developers everywhere.`,
    imageUrl: '/speakers/speaker3.jpeg',
    talkTitle: 'Build Trust as a Leader',
    talkDescription: '',
  },
  {
    id: '5',
    name: 'Chris Ritchhart',
    title: 'Solutions Architect',
    company: 'Check Point Software Technologies',
    bio: `Chris Ritchhart is a seasoned cybersecurity professional with over 25 years in IT and more than a decade specializing in cybersecurity. As a Solutions Architect at Check Point Software Technologies, he is dedicated to helping organizations strengthen their security posture through innovative and effective solutions.

With deep expertise in AI technologies—both in development and malicious applications—Chris specializes in endpoint security, offensive tactics, evasion techniques, and advanced defensive measures. His extensive experience in cyber threat mitigation, attack simulation, and security optimization makes him a trusted advisor in the field.

Beyond cybersecurity, Chris is a passionate photographer with a keen eye for landscapes and architectural photography. He also enjoys spending time with his 19-year-old son and his loyal pit mix, Jax.`,
    imageUrl: '/speakers/speaker4.jpeg',
    talkTitle: 'The AI Revolution: Past, Present, and the Road Ahead',
    talkDescription: '',
  },
  {
    id: '6',
    name: 'Reet Kaur',
    title: 'CEO',
    company: 'Sekaurity',
    bio: `Reet Kaur is the CEO of <i>Sekaurity</i>, a consultancy specializing in AI, Cloud, and On-Prem security, as well as risk management, compliance, and governance. With over 24 years of experience, she has built and led security programs for Fortune 100 and 500 companies, as well as the public sector, focusing on risk-driven security strategies, governance, and innovation.

Previously, Reet served as the CISO at Portland Community College, Executive Director of Digital IT Risk at Merck, and Director of Security GRC at Nike. She has led initiatives in Cloud and Application Security, AI-driven Risk Management, Post-Quantum Cryptography, and Threat Analytics. Her work emphasizes automation-first cybersecurity and cultivating a culture of continuous compliance powered by AI.

A recognized industry thought leader and speaker, Reet has presented at premier security conferences, including RSA Conference, Black Hat, and CISO Summits. She actively contributes to Cyversity, serves on nonprofit boards, and mentors emerging cybersecurity professionals.

Reet holds several cybersecurity certifications and remains at the forefront of AI security, governance, and cyber risk management—helping organizations navigate today's dynamic threat landscape`,
    imageUrl: '/speakers/speaker5.jpeg',
    talkTitle: 'Hacking the Machine: Unmasking the top 10 LLM Vulnerabiliities & Real World Exploits',
    talkDescription: '',
  },
  {
    id: '7',
    name: 'Arvin Freeland',
    title: 'CDN Systems Administrator',
    company: 'Marriott International',
    bio: 'Arvin is a CDN Systems Administrator with a background in online threat managed services.',
    imageUrl: '/speakers/speaker6.jpeg',
    talkTitle: 'Introduction to Content Delivery Networks',
    talkDescription: '',
  },
  {
    id: '8',
    name: 'Haris Qazi',
    title: 'Cybersecurity Engineer',
    company: 'Deloitte',
    bio: 'Certified cybersecurity consultant with a proven track record in identifying and mitigating cyber threats to protect sensitive data and prevent potential breaches. Skilled in conducting thorough risk assessments, implementing robust security measures, and providing strategic solutions to enhance overall cybersecurity posture.',
    imageUrl: '/speakers/speaker7.jpeg',
    talkTitle: 'Privacy in a world of Surveillance Capitalism',
    talkDescription: '',
  },
  {
    id: '9',
    name: 'Brett Gilsinger',
    title: 'President and Chief Technology Officer',
    company: 'Endeavor Communications and GigTel',
    bio: `Brett Gilsinger is a seasoned technology executive with over 25 years of expertise in the telecommunications industry. He currently serves as the President and Chief Technology Officer at Endeavor Communications and GigTel. Before joining Endeavor in 2020, Brett had a distinguished 20-year career at Frontier Communications, where he held various leadership roles, including Vice President of Network Operations at a national level. Throughout his career, Brett has led large technical teams responsible for resolving complex network issues for millions of customers across the U.S.

In addition to his Bachelor's degree in Organizational Leadership from Millikin University, Brett holds an MBA from Southern New Hampshire University (SNHU), further enhancing his strategic and operational leadership capabilities. With a deep technical understanding of telecom infrastructure, including broadband delivery technologies and fiber-optic systems, Brett's expertise has led to significant operational efficiencies and improved customer satisfaction throughout his career.`,
    imageUrl: '/speakers/speaker8.png',
    talkTitle: 'Making of the 2025 BSidesFW Badge Panel',
    talkDescription: '',
  },
  {
    id: '10',
    name: 'Michael Contino',
    title: 'Principal Security Engineer',
    company: 'Bark.co',
    bio: `Michael Contino is an accomplished cybersecurity expert serving as the Principal Security Engineer at Bark.co, a leading dog products and services company. Specializing in vulnerability management, cloud security, and containerization. Michael excels in securing digital infrastructures for financial services and e-commerce sectors. His primary expertise lies in Linux-based environments, where he leverages advanced skills in secure architecture, data security and risk management. A graduate of the Indiana Institute of Technology with degrees in networking and information security, Michael holds the OSCP, LPIC-3 Security, is an exam developer for the Linux foundation, and on his way to completing the cloud native foundations  kubestronaut program. His career is driven by a passion for protecting organizational assets through culture-driven solutions and modern technical strategies.`,
    imageUrl: '/speakers/speaker10.png',
    talkTitle: 'From Code to Clicks: Transitioning to Low-Code Engineering and Its Impact on Information Security',
    talkDescription: '',
  },
  {
    id: '11',
    name: 'Michael Miller',
    title: 'Manager, Cybersecurity Platform Engineering',
    company: 'Cardinal Health',
    bio: `Michael is a seasoned cybersecurity leader, educator, and speaker with over 13 years of experience in enterprise security, networking, automation, and operations. With a strong focus on security engineering and talent development, he brings practical insight and technical depth to every discussion.

Known for his engaging style and passion for empowering the next generation of cybersecurity professionals, Michael speaks on topics ranging from automation and security architecture to team development and career growth.`,
    imageUrl: '/speakers/speaker11.jpeg',
    talkTitle: 'Architecting Defensible Networks',
    talkDescription: '',
  }
]

export default function SpeakersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </main>
  )
} 