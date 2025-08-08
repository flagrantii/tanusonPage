import { webs } from '@/Data/web'

export type WebSummary = (typeof webs)[number]

export function findProjectBySlug(slug: string): WebSummary | undefined {
  return webs.find((w) => w.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return webs.map((w) => w.slug)
} 