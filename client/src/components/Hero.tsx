import { ButtonLink } from './ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-warm-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-200">
            <span aria-hidden="true">♪</span>
            Nonprofit · Music · Hope
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The Gift of{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Music
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            We believe every child deserves access to the joy and healing power of music.
            Through instrument donations, free lessons, and community concerts, we bring
            hope to families who need it most.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to="/donate" size="lg">
              Donate Now
            </ButtonLink>
            <ButtonLink to="/about" variant="outline" size="lg">
              Learn More
            </ButtonLink>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-brand-200/60 pt-10">
            {[
              { value: '5,000+', label: 'Instruments Donated' },
              { value: '120+', label: 'Schools Served' },
              { value: '50K+', label: 'Lives Touched' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-brand-700 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
