"use client"
import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import { webs } from '@/Data/web'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectDetailPage() {
  const params = useParams() as { slug?: string }
  const slug = params?.slug
  const project = useMemo(() => webs.find(w => (w as any).slug === slug), [slug]) as any
  const [modalImg, setModalImg] = useState<string | null>(null)

  if (!project) {
    return (
      <div className="px-6 lg:px-8 mx-auto max-w-4xl py-16">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <a className="underline underline-offset-4 mt-2 inline-block" href="/projects">Back to Projects</a>
      </div>
    )
  }

  return (
    <div className="px-6 lg:px-8 mx-auto max-w-4xl py-16">
      <div className="flex items-center gap-3">
        <img src={project.author.imageUrl} className="h-10 w-10 rounded-full" alt="" />
        <div>
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <p className="text-sm text-gray-500">{project.date}</p>
        </div>
      </div>

      <p className="mt-6 text-gray-700">{project.description}</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">The Problem</h2>
        <p className="mt-2 text-sm text-gray-700">{project.problem}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">UX Process</h2>
        <ol className="mt-3 list-decimal ml-6 text-sm text-gray-700 space-y-1">
          {project.uxProcess?.map((s: string) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack?.map((t: string) => (
            <span key={t} className="rounded-full border border-gray-300 px-3 py-1 text-xs">{t}</span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="mt-3 grid gap-3 grid-cols-2">
          {project.images?.map((src: string) => (
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
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Links</h2>
        <div className="mt-2 flex gap-4 text-sm">
          {project.links?.live && <a className="underline underline-offset-4" href={project.links.live} target="_blank" rel="noopener">Live Demo</a>}
          {project.links?.repo && <a className="underline underline-offset-4" href={project.links.repo} target="_blank" rel="noopener">GitHub</a>}
        </div>
      </section>

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
    </div>
  )
} 