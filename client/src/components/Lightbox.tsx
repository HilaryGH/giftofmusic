import { useEffect } from 'react'
import type { GalleryImage } from '../data/gallery'

interface LightboxProps {
  image: GalleryImage | null
  onClose: () => void
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
    >
      <div
        className="relative max-w-lg w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex h-64 items-center justify-center bg-gradient-to-br ${image.gradient} text-7xl sm:h-80`}
        >
          {image.icon}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold">{image.title}</h3>
          <p className="mt-2 text-sm text-slate-600">
            A moment from our community programs — music bringing people together.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
