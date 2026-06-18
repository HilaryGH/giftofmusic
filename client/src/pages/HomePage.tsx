import { Hero } from '../components/Hero'
import { SectionPreview } from '../components/SectionPreview'
import { ButtonLink } from '../components/ui/Button'

export function HomePage() {
  return (
    <>
      <Hero />
      <SectionPreview />

      <section className="bg-gradient-to-r from-brand-600 to-brand-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Gift Can Change a Life
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Just $25 provides a child with their first music lesson. Every donation —
            big or small — helps us bring instruments, instruction, and joy to
            communities in need.
          </p>
          <ButtonLink to="/donate" variant="secondary" size="lg" className="mt-8">
            Give the Gift of Music
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
