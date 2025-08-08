"use client"
import { motion } from 'framer-motion'

export default function AboutPage() {
  const timeline = [
    {
      date: '2023',
      title: 'Software Engineer Intern',
      subtitle: 'Some Software House',
      location: 'Bangkok',
      description:
        'Built feature-reporting flows end-to-end: API integration, UI polish, and internal docs. Partnered with designers to ship fast iterations.',
    },
    {
      date: '2017 - 2023',
      title: 'PCSHS-NST',
      subtitle: 'STEM Program',
      location: 'Thailand',
      description:
        'Explored programming, product building, and research. Led student projects and developed a love for shipping useful tools.',
    },
  ]

  const skillGroups: Array<{ title: string; skills: string[] }> = [
    {
      title: 'UX/UI',
      skills: ['Figma'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Go', 'PHP'],
    },
    {
      title: 'Data',
      skills: ['SQL', 'MongoDB'],
    },
    {
      title: 'AI',
      skills: ['Python (ML)'],
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'GitHub'],
    },
  ]

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
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-4">Skill Map</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg border p-4">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.06 }}
                      className="select-none inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-800 hover:bg-black hover:text-white transition-colors"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 