import { ImpactCard } from '../components/ImpactCard'
import { ButtonLink } from '../components/ui/Button'

const impactHighlights = [
  {
    icon: '🎻',
    title: '5,000+ Instruments',
    description: 'Donated to schools and families who could not afford their own.',
  },
  {
    icon: '🏫',
    title: '120+ Schools',
    description: 'Partner schools across the country now have thriving music programs.',
  },
  {
    icon: '👨‍🏫',
    title: '200+ Volunteers',
    description: 'Passionate musicians teaching the next generation for free.',
  },
  {
    icon: '🌟',
    title: '50,000+ Lives',
    description: 'Children and families touched by the healing power of music.',
  },
]

export function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Our Story</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              The Gift of Music was founded in 2010 by a group of musicians who believed
              that access to music should never depend on income. What started as a single
              instrument drive in a local school gym has grown into a nationwide movement
              of hope, healing, and harmony.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                To provide free access to musical instruments, education, and performance
                opportunities for underserved children and communities. We believe music
                is not a luxury — it is a fundamental human need that fosters creativity,
                confidence, and connection.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Through partnerships with schools, community centers, and healthcare
                facilities, we deliver programs that use music as a tool for healing,
                learning, and joy.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                A world where every child — regardless of background or circumstance —
                has the opportunity to discover their voice through music. We envision
                communities united by shared melodies, where the gift of a single
                instrument can spark a lifetime of passion.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                By 2030, we aim to reach 500 schools and donate 20,000 instruments,
                creating a lasting legacy of musical opportunity for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Numbers tell a story, but the real impact is in the smiles, the first notes
              played, and the confidence gained.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactHighlights.map((item) => (
              <ImpactCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Whether you donate, volunteer, or attend an event — you become part of
            something bigger than yourself.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to="/donate" size="lg">
              Donate Now
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline" size="lg">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
