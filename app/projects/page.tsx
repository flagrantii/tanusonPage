"use client"
import { useMemo, useState } from 'react'
import { webs } from '@/Data/web'
import { motion } from 'framer-motion'

const FILTERS = ['All', 'UX/UI', 'Frontend', 'Fullstack', 'AI', 'DevOps']

export default function ProjectsPage() {
  const [active, setActive] = useState<string>('All')

  const items = useMemo(() => {
    if (active === 'All') return webs
    return webs.filter((w) => (w as any).tags?.includes(active))
  }, [active])

  return (
    <div className="px-6 lg:px-8 mx-auto max-w-6xl py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Projects</h1>
      <p className="mt-3 text-gray-600">Filter by area and explore selected work.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${active===f ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-black hover:text-white'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((web) => (
          <motion.article key={web.id} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="flex flex-col gap-3 rounded-lg border p-5">
            <div className="flex items-center gap-3">
              <img src={web.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div>
                <h3 className="text-lg font-semibold"><a href={web.href}>{web.title}</a></h3>
                <p className="text-xs text-gray-500">{web.author.name} — {web.author.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{web.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {(web as any).tags?.map((t:string) => (
                <span key={t} className="text-xs rounded-full border border-gray-300 px-2 py-0.5">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
} 