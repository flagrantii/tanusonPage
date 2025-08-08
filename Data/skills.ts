export type SkillGroup = { title: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  { title: 'Programming Languages', skills: ['JavaScript', 'TypeScript', 'Golang', 'Java', 'Python', 'C++', 'SQL'] },
  { title: 'Frameworks / Libraries', skills: ['Next.js', 'Nest.js', 'Go Fiber', 'React', 'Prisma', 'Django', 'GORM'] },
  { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase'] },
  { title: 'Tools', skills: ['Git', 'Docker', 'Kubernetes'] },
  { title: 'Cloud and DevOps', skills: ['AWS', 'DigitalOcean', 'Firebase', 'Vercel', 'GitHub Actions', 'Grafana', 'Argo CD'] },
  { title: 'AI', skills: ['Python (ML)'] },
  { title: 'DevOps', skills: ['Docker', 'GitHub'] },
]