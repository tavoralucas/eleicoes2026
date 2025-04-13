type TimelineEvent = {
  date: string
  title: string
  description: string
  type: "position" | "party" | "achievement" | "controversy"
}

export default function CandidateTimeline({ events }: { events: TimelineEvent[] }) {
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="space-y-6">
      {sortedEvents.map((event, index) => (
        <div key={index} className="relative pl-8 pb-6">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
          <div className={`absolute left-[-5px] top-1 w-3 h-3 rounded-full ${getEventColor(event.type)}`}></div>

          <div>
            <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-gray-600 mt-1">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function getEventColor(type: string): string {
  switch (type) {
    case "position":
      return "bg-blue-500"
    case "party":
      return "bg-purple-500"
    case "achievement":
      return "bg-green-500"
    case "controversy":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("pt-BR", { year: "numeric", month: "long" })
}
