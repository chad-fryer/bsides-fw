import '../styles/schedule.css'

interface Event {
  time: string
  title: string
  duration?: string
  type?: 'keynote' | 'break' | 'closed'
  startTime?: string // HH:MM format
  endTime?: string // HH:MM format
  gridRowStart?: number
  gridRowEnd?: number
}

interface Track {
  name: string
  events: Event[]
}

function convertTimeToGridRow(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  // Each 30-minute interval gets 2 rows, starting from 8:00 AM (row 1)
  return ((hours - 8) * 4) + Math.floor(minutes / 15) + 1
}

function parseTime(timeString: string): string {
  // Convert "8:15 AM" to "08:15"
  const [time, period] = timeString.split(' ')
  let [hours, minutes] = time.split(':').map(Number)
  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

function processEvents(events: Event[]): Event[] {
  return events.map(event => {
    const [startTimeStr, endTimeStr] = event.time.split(' - ')
    const startTime = parseTime(startTimeStr)
    const endTime = parseTime(endTimeStr)
    
    return {
      ...event,
      startTime,
      endTime,
      gridRowStart: convertTimeToGridRow(startTime),
      gridRowEnd: convertTimeToGridRow(endTime)
    }
  })
}

const scheduleData: Track[] = [
  {
    name: "International Ballroom",
    events: [
      {
        time: "8:00 AM - 9:00 AM",
        title: "Doors Open / Registration",
        duration: "(60 mins)"
      },
      {
        time: "9:00 AM - 10:00 AM",
        title: "Opening Statements & Opening Keynote Chase Cunningham (Dr. Zero Trust)",
        duration: "(60 mins)",
        type: "keynote"
      },
      {
        time: "10:00 AM - 11:00 AM",
        title: "Brett Gilsinger: Making of the 2025 BSidesFW Badge Panel",
        duration: "(60 mins)"
      },
      {
        time: "11:00 AM - 11:30 AM",
        title: "Rob Rodriguez: The Art of Social Engineering: Lessons from the Real World",
        duration: "(30 mins)"
      },
      {
        time: "11:30 AM - 12:00 PM",
        title: "BREAK - PREP FOR LUNCH",
        duration: "(30 mins)",
        type: "break"
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "LUNCH - INTERNATIONAL BALLROOM",
        duration: "(60 mins)",
        type: "break"
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Richard Rieben: Building Resilient AI: Security Frameworks and Certification Standards",
        duration: "(60 mins)"
      },
      {
        time: "2:00 PM - 3:00 PM",
        title: "Chris Saylor: Overcomming Imposter Syndrome",
        duration: "(60 mins)"
      },
      {
        time: "3:00 PM - 3:30 PM",
        title: "Chris Ritchhart: The AI Revolution: Past, Present, and the Road Ahead",
        duration: "(30 mins)"
      },
      {
        time: "3:30 PM - 4:30 PM",
        title: "Michael Miller (Technical Track Closing Keynote): Architecting Defensible Networks",
        duration: "(60 mins)",
        type: "keynote"
      },
      {
        time: "4:30 PM - 5:00 PM",
        title: "Closing Statments and Door Prizes Giveaway",
        duration: "(30 mins)"
      }
    ]
  },
  {
    name: "Classic Ballroom",
    events: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "ROOMS CLOSED - KEYNOTE",
        type: "closed"
      },
      {
        time: "10:00 AM - 10:30 AM",
        title: "Chuck Knox: Leveraging Remote Sensing Data and Machine Learning for Predicting Petroleum Deposits",
        duration: "(30 mins)"
      },
      {
        time: "10:30 AM - 11:00 AM",
        title: "Anushree Vaidya: Empathy: The Missing Link in Cybersecurity Education",
        duration: "(30 mins)"
      },
      {
        time: "11:00 AM - 11:30 AM",
        title: "Corey Hlavacek: Breaking Up Safely: Cybersecurity Essentials for Divestitures",
        duration: "(30 mins)"
      },
      {
        time: "11:30 AM - 12:00 PM",
        title: "Haris Qazi: Privacy in a world of Surveillance Capitalism",
        duration: "(30 mins)"
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "LUNCH - INTERNATIONAL BALLROOM",
        duration: "(60 mins)",
        type: "break"
      },
      {
        time: "1:00 PM - 1:30 PM",
        title: "Patrick Scherrer: All the times I really screwed up",
        duration: "(30 mins)"
      },
      {
        time: "1:30 PM - 2:00 PM",
        title: "Erin Petty: Building Confidence in Our IT Teams",
        duration: "(30 mins)"
      },
      {
        time: "2:00 PM - 3:00 PM",
        title: "LeeAnn Larson & Jon Taylor: How AI is transforming industries & reshaping the future of technology",
        duration: "(60 mins)"
      },
      {
        time: "3:00 PM - 3:30 PM",
        title: "Stephen Heindel: Practical Graph Theory for All Levels",
        duration: "(30 mins)"
      },
      {
        time: "3:30 PM - 4:30 PM",
        title: "Emma Clouse (Leadership Track Closing Keynote): Building Trust as a Leader",
        duration: "(60 mins)",
        type: "keynote"
      }
    ]
  },
  {
    name: "Fireside Chat",
    events: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "ROOMS CLOSED - KEYNOTE",
        type: "closed"
      },
      {
        time: "10:00 AM - 11:00 AM",
        title: "RESERVED - NOT AVAILABLE FOR TALKS",
        type: "closed"
      },
      {
        time: "11:00 AM - 11:30 AM",
        title: "Arvin Freeland: Introduction to Content Delivery Networks",
        duration: "(30 mins)"
      },
      {
        time: "11:30 AM - 12:00 PM",
        title: "Corban Saylor: Embracing Mistakes in IT: From Crisis to Growth",
        duration: "(30 mins)"
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "LUNCH - INTERNATIONAL BALLROOM",
        duration: "(60 mins)",
        type: "break"
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Reet Kaur: Hacking the Machine: Unmasking the top 10 LLM Vulnerabilities & Real World Exploits",
        duration: "(60 mins)"
      },
      {
        time: "2:00 PM - 2:30 PM",
        title: "Michael Loggins: Creating Value from Shadow IT",
        duration: "(30 mins)"
      },
      {
        time: "2:30 PM - 3:00 PM",
        title: "Michael Contino: From Code to Clicks: Transitioning to Low-Code Engineering and Its Impact on Information Security",
        duration: "(30 mins)"
      },
      {
        time: "3:00 PM - 4:30 PM",
        title: "ROOM CLOSED - 3 PM",
        type: "closed"
      }
    ]
  },
  {
    name: "CTF/Badge Hacking",
    events: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "ROOMS CLOSED - KEYNOTE",
        type: "closed"
      },
      {
        time: "10:00 AM - 4:00 PM",
        title: "CTF Open"
      },
      {
        time: "4:00 PM - 5:00 PM",
        title: "CTF CLOSED - 4PM",
        type: "closed"
      }
    ]
  }
]

const processedScheduleData: Track[] = scheduleData.map(track => ({
  ...track,
  events: processEvents(track.events)
}))

export default function Schedule() {
  return (
    <div className="schedule-container">
      {processedScheduleData.map((track, trackIndex) => (
        <div key={trackIndex} className="track">
          <h2 className="track-title">{track.name}</h2>
          <div className="events-container">
            {track.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className={`event-item ${event.type || ''}`}
                style={{
                  gridRow: `${event.gridRowStart} / ${event.gridRowEnd}`
                }}
              >
                <div className="time">{event.time}</div>
                <div className="title">{event.title}</div>
                {event.duration && (
                  <div className="duration">{event.duration}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 