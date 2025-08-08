import React from 'react'

type ProjectTechStackProps = {
  techStack?: string[]
}

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  if (!techStack || techStack.length === 0) return null

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">Tech Stack</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full border border-gray-300 px-3 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
} 