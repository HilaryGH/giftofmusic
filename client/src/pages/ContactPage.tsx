import { ContactForm } from '../components/ContactForm'

export function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Have a question, want to volunteer, or interested in partnering with us?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-xl" aria-hidden="true">✉️</span>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <a
                        href="mailto:hello@thegiftofmusic.com"
                        className="text-brand-600 hover:underline"
                      >
                        hello@thegiftofmusic.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl" aria-hidden="true">📞</span>
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-semibold text-slate-800">Address</p>
                      <p>123 Harmony Lane</p>
                      <p>Music City, MC 12345</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-bold">Office Hours</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
                  <li>Saturday: 10:00 AM – 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
