import type { Event } from '../data/events'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card hover className="flex flex-col">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="mt-1 text-sm font-medium text-brand-600">{event.date}</p>
        </div>
        <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Upcoming
        </span>
      </div>

      <p className="text-sm text-slate-500">
        <span className="font-medium text-slate-700">📍</span> {event.location}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{event.description}</p>

      <Button
        variant="outline"
        size="sm"
        className="mt-6 w-full sm:w-auto"
        onClick={() => alert(`Registration for "${event.title}" — coming soon!`)}
      >
        Register
      </Button>
    </Card>
  )
}
