export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
}

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Concert for Hope',
    date: 'April 12, 2026',
    location: 'Riverside Community Hall',
    description:
      'An evening of live performances featuring local musicians. All proceeds support instrument donations for underserved schools.',
  },
  {
    id: '2',
    title: 'Music Workshop Day',
    date: 'May 3, 2026',
    location: 'Downtown Arts Center',
    description:
      'Free workshops for children ages 8–16. Learn guitar, piano, and percussion from volunteer instructors.',
  },
  {
    id: '3',
    title: 'Annual Fundraising Gala',
    date: 'June 21, 2026',
    location: 'Grand Ballroom, City Hotel',
    description:
      'Join us for dinner, silent auction, and a special performance honoring our community partners and donors.',
  },
  {
    id: '4',
    title: 'Community Sing-Along',
    date: 'July 18, 2026',
    location: 'Central Park Amphitheater',
    description:
      'A family-friendly outdoor event bringing neighbors together through song. Bring a blanket and your voice!',
  },
]
