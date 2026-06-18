import { upcomingEvents } from '../data/events'
import { EventCard } from '../components/EventCard'

export function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Upcoming Events</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Join us at concerts, workshops, and community gatherings. Every event
            supports our mission to bring music to those who need it most.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
