"use client"
import { motion } from 'framer-motion'

export default function AboutPage() {
  const timeline = [
    { date: '2023', title: 'Software Engineer Intern', subtitle: 'Some Software House', location: 'Bangkok' },
    { date: '2017 - 2023', title: 'PCSHS-NST', subtitle: 'STEM Program', location: 'Thailand' },
  ]

  const skills = ['UX/UI', 'Frontend', 'Backend', 'AI', 'DevOps', 'React', 'Next.js', 'Tailwind', 'Node.js', 'Python']

  return (
    <div className="px-6 lg:px-8 mx-auto max-w-5xl py-16">
      <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-3xl sm:text-4xl font-semibold">About Me</motion.h1>
      <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="mt-4 text-gray-600">
        I design and build products end-to-end — from research and UX to performant frontend, solid backends, and smart automation.
      </motion.p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-medium mb-4">Timeline</h2>
          <ol className="relative border-l border-gray-200">
            {timeline.map((item) => (
              <li key={item.title} className="mb-8 ml-4">
                <div className="absolute w-3 h-3 bg-black rounded-full -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.date}</time>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle} — {item.location}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-4">Skill Map</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <motion.span
                key={s}
                whileHover={{ scale: 1.06 }}
                className="select-none inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-800 hover:bg-black hover:text-white transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 