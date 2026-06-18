import { Link } from 'react-router-dom'

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: '◎' },
  { label: 'YouTube', href: '#', icon: '▶' },
  { label: 'Twitter', href: '#', icon: '𝕏' },
]

const footerLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
                ♪
              </span>
              <span className="font-display text-lg font-bold text-brand-800">
                The Gift of Music
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Bringing the transformative power of music to communities who need it most.
              Every note is a gift of hope.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:hello@thegiftofmusic.com"
                  className="transition-colors hover:text-brand-600"
                >
                  hello@thegiftofmusic.com
                </a>
              </li>
              <li>123 Harmony Lane</li>
              <li>Music City, MC 12345</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} The Gift of Music. All rights reserved. A registered
          501(c)(3) nonprofit organization.
        </div>
      </div>
    </footer>
  )
}
