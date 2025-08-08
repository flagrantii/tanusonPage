import React from 'react'

type ProjectFeaturesProps = {
  features?: string[]
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) return null

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">Features</h2>
      <ul className="mt-3 list-disc ml-6 text-sm text-gray-700 space-y-1">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  )
} 