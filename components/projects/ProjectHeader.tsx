import React from 'react'

type ProjectHeaderProps = {
  title: string
  date?: string
}

export default function ProjectHeader({ title, date }: ProjectHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        {date ? <p className="text-sm text-gray-500">{date}</p> : null}
      </div>
    </div>
  )
} 