import { useState } from 'react'
import { galleryImages } from '../data/gallery'
import { Lightbox } from '../components/Lightbox'
import type { GalleryImage } from '../data/gallery'

export function GalleryPage() {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Moments of joy, connection, and transformation — captured from our programs
            and community events around the country.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelected(image)}
                className="group relative aspect-square overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${image.gradient} text-5xl transition-transform duration-300 group-hover:scale-105`}
                >
                  {image.icon}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent p-4 pt-12 text-left">
                  <p className="text-sm font-semibold text-white">{image.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </>
  )
}
