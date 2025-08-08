"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ProjectGalleryProps = {
  images?: string[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [modalImg, setModalImg] = useState<string | null>(null)

  if (!images || images.length === 0) return null

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">Gallery</h2>
      <div className="mt-3 grid gap-3 grid-cols-2">
        {images.map((src) => (
          <motion.button
            key={src}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setModalImg(src)}
            className="group rounded-lg overflow-hidden border"
          >
            <img src={src} alt="" className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
            onClick={() => setModalImg(null)}
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={modalImg}
              alt="preview"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 