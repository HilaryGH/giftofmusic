import { DonationForm } from '../components/DonationForm'

export function DonatePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Donate</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Your generosity fuels our programs — from instrument donations to free music
            lessons for children in underserved communities.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <DonationForm />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Where Your Donation Goes</h2>
                <ul className="mt-4 space-y-4">
                  {[
                    {
                      pct: '65%',
                      label: 'Instrument purchases & repairs',
                      desc: 'New and refurbished instruments for schools and families.',
                    },
                    {
                      pct: '20%',
                      label: 'Music education programs',
                      desc: 'Free lessons, workshops, and curriculum development.',
                    },
                    {
                      pct: '10%',
                      label: 'Community events',
                      desc: 'Concerts, outreach, and performance opportunities.',
                    },
                    {
                      pct: '5%',
                      label: 'Operations',
                      desc: 'Essential administrative costs to keep us running.',
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <span className="flex h-10 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                        {item.pct}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-800">{item.label}</p>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <h3 className="font-bold text-brand-800">Tax-Deductible Giving</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  The Gift of Music is a registered 501(c)(3) nonprofit organization.
                  Your donation is tax-deductible to the fullest extent allowed by law.
                  You will receive a receipt for your records.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="flex gap-1">
                  {['Visa', 'MC', 'Amex'].map((card) => (
                    <span
                      key={card}
                      className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-medium"
                    >
                      {card}
                    </span>
                  ))}
                </span>
                <span>Secure payments via Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
