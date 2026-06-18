import { Link } from 'react-router-dom'
import { Card } from './ui/Card'

const previews = [
  {
    title: 'Events',
    description:
      'Join us at concerts, workshops, and community gatherings that celebrate music and raise funds for our mission.',
    to: '/events',
    icon: '📅',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    title: 'Gallery',
    description:
      'See the smiles, the performances, and the moments that show how music changes lives in our communities.',
    to: '/gallery',
    icon: '📷',
    accent: 'from-warm-400 to-warm-600',
  },
  {
    title: 'About',
    description:
      'Discover our story, meet our team, and learn how a simple idea grew into a movement of hope through music.',
    to: '/about',
    icon: '💙',
    accent: 'from-brand-400 to-brand-600',
  },
]

export function SectionPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Explore Our Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From community events to inspiring stories — see how The Gift of Music is
            making a difference every day.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {previews.map((item) => (
            <Link key={item.to} to={item.to} className="group">
              <Card hover className="h-full">
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-2xl shadow-md`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
