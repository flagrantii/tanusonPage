  export const techGroups = [
    { title: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Golang', 'Java', 'Python', 'C++', 'SQL'] },
    { title: 'Frameworks / Libraries', items: ['Next.js', 'Nest.js', 'Go Fiber', 'React', 'Prisma', 'Django', 'GORM'] },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase'] },
    { title: 'Tools', items: ['Git', 'Docker', 'Kubernetes'] },
    { title: 'Cloud and DevOps', items: ['AWS', 'DigitalOcean', 'Firebase', 'Vercel', 'GitHub Actions', 'Grafana', 'Argo CD'] },
  ]

  export type SimpleItem = { role: string; org: string; period: string; bullets: string[] }

  export const activities: SimpleItem[] = [
    {
      role: 'Software Engineer',
      org: 'Information System Development, SGCU',
      period: 'Jun 2024 – Present',
      bullets: [
        'Developed user selection group feature for incoming students website; up to 3,000 users/day.',
        'Designed DB model and project structure for CU Council; scalable and efficient system.',
        'Led development for Chu News website for university news and highlights.',
      ],
    },
    {
      role: 'Core Team',
      org: 'Thinc. (Thailand Incubator)',
      period: 'Aug 2024 – Present',
      bullets: [
        'Contributed to student‑run community focused on societal impact and real‑world skills.',
        'Supervised multiple projects and engineering teams for successful outcomes.',
      ],
    },
    {
      role: 'Core Team',
      org: 'Google Developer Student Club CU',
      period: 'Sep 2023 – Present',
      bullets: [
        'Leveraged Google tools to enhance teaching and learning experiences campus‑wide.',
      ],
    },
  ]
