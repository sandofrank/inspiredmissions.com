'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface GalleryProps {
  images: string[]
  columns?: 2 | 3 | 4
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map((src) => ({ src }))

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  }

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-3 my-8`}>
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square cursor-pointer overflow-hidden rounded shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            onClick={() => {
              setIndex(idx)
              setOpen(true)
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' }
        }}
      />
    </>
  )
}
