import React from 'react'

type ProjectLinksProps = {
  live?: string
  repo?: string
}

export default function ProjectLinks({ live, repo }: ProjectLinksProps) {
  if (!live && !repo) return null

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">Links</h2>
      <div className="mt-2 flex gap-4 text-sm">
        {live ? (
          <a className="underline underline-offset-4" href={live} target="_blank" rel="noopener">
            Live Demo
          </a>
        ) : null}
        {repo ? (
          <a className="underline underline-offset-4" href={repo} target="_blank" rel="noopener">
            GitHub
          </a>
        ) : null}
      </div>
    </section>
  )
} 