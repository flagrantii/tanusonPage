export type WebItem = {
  id: number
  slug: string
  title: string
  href: {
    demoUrl: string
    repoUrl: string
  }
  description: string
  datetime: string
  category: { title: string; href: string }
  tags: string[]
  techStack: string[]
  images: string[]
  isDemo: boolean
  features: string[]
}

// Source of truth: WebItem[]
export const webItems: WebItem[] = [
  {
    id: 1,
    slug: 'trip-recommendation',
    title: 'Trip Recommendation',
    href: {
      demoUrl: '',
      repoUrl: 'https://github.com/flagrantii/TripRecommend',
    },
    description: 'AI-powered travel itinerary planner',
    datetime: '2023-04-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['Frontend', 'AI'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Google Maps API'],
    images: ['/projects/trip/trip-1.png', '/projects/trip/trip-2.png'],
    isDemo: false,
    features: [
      'AI-powered personalized recommendations',
      'Local insights and hidden gems',
      'Smart budget optimization',
    ],
  },
  {
    id: 2,
    slug: 'carbon-credits-marketplace',
    title: 'Carbon Credits Marketplace',
    href: {
      demoUrl: '',
      repoUrl: 'https://github.com/flagrantii/CaronCredit-main',
    },
    description: 'Eco-friendly shopping via carbon credit trading',
    datetime: '2023-05-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['Frontend', 'Fullstack'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB'],
    images: ['/projects/carbon/carbon-1.png', '/projects/carbon/carbon-2.png'],
    isDemo: false,
    features: [
      'Carbon credit tracking',
      'Integrated marketplace',
      'User-friendly interface',
    ],
  },
  {
    id: 3,
    slug: 'cunext-event',
    title: 'CUNEXT Event',
    href: {
      demoUrl: '',
      repoUrl: 'https://github.com/flagrantii/cunext-event',
    },
    description: 'Campus-wide event management app',
    datetime: '2024-03-01',
    category: { title: 'Mobile', href: '/projects?filter=Mobile' },
    tags: ['Frontend', 'Mobile'],
    techStack: ['React Native', 'Expo', 'Firebase', 'Golang', 'Tailwind', 'PostgreSQL'],
    images: ['/projects/event/event-1.png', '/projects/event/event-2.png'],
    isDemo: false,
    features: [
      'Event discovery',
      'Streamlined organization',
      'Seamless participant engagement',
      'Real-time data syncing',
    ],
  },
  {
    id: 4,
    slug: 'massage-reservation',
    title: 'Massage Reservation',
    href: {
      demoUrl: 'https://swdevprac2-project-get-a-good-rest-api-gules.vercel.app/',
      repoUrl: 'https://github.com/flagrantii/Massage-Reservation-2',
    },
    description: 'Effortless massage appointment management',
    datetime: '2024-04-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['Fullstack', 'DevOps'],
    techStack: ['Next.js', 'Node.js', 'Tailwind', 'Express', 'PostgreSQL', 'Vercel'],
    images: ['/projects/massage/massage-1.png', '/projects/massage/massage-2.png'],
    isDemo: true,
    features: [
      'Booking management',
      'User-practitioner communication',
      'Efficient scheduling system',
    ],
  },
  {
    id: 5,
    slug: 'golang-concurrency-api',
    title: 'Golang Concurrency API',
    href: {
      demoUrl: '',
      repoUrl: '',
    },
    description: 'High-performance API with Golang',
    datetime: '2024-06-01',
    category: { title: 'Server', href: '/projects?filter=Server' },
    tags: ['Backend', 'DevOps'],
    techStack: ['Golang', 'Docker', 'Redis', 'PostgreSQL', 'Prometheus'],
    images: [],
    isDemo: false,
    features: [
      'Concurrency management',
      'Optimized resource utilization',
      'Scalable system architecture',
    ],
  },
  {
    id: 6,
    slug: 'rub-puen-kao-mai-2024',
    title: 'Rub Puen Kao Mai 2024',
    href: {
      demoUrl: 'https://cufreshy2024.com/',
      repoUrl: 'https://github.com/isd-sgcu/rpkm67-backend',
    },
    description: 'Freshmen orientation registration platform',
    datetime: '2024-07-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['Fullstack', 'DevOps'],
    techStack: ['Next.js', 'Golang', 'Gin', 'PostgreSQL', 'DigitalOcean', 'AWS S3'],
    images: ['/projects/rpkm/rpkm-1.png', '/projects/rpkm/rpkm-2.png'],
    isDemo: true,
    features: [
      'Student registration',
      'Event information management',
      'User-friendly platform',
    ],
  },
  {
    id: 7,
    slug: 'nodi',
    title: 'Nodi',
    href: {
      demoUrl: 'https://thenodi.vercel.app/',
      repoUrl: 'https://github.com/flagrantii/dsde-web',
    },
    description: 'Neural similarity for research papers',
    datetime: '2024-12-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['AI', 'Frontend', 'Fullstack'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Qdrant', 'Python', 'Vercel', 'OpenAI API', 'Scopus API', 'Vertex AI'],
    images: ['/projects/nodi/nodi-1.png', '/projects/nodi/nodi-2.png', '/projects/nodi/nodi-3.png', '/projects/nodi/nodi-4.png'],
    isDemo: true,
    features: [
      'Intelligent conversation with research papers',
      'Paper recommendation based on conversation history',
      'User-friendly interface',
    ],
  },
  {
    id: 8,
    slug: 'kasalong',
    title: 'Kasalong',
    href: {
      demoUrl: 'https://www.kasalongrice.com/en/home/',
      repoUrl: '',
    },
    description: 'Premium Thai rice brand static website',
    datetime: '2024-07-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['Frontend'],
    techStack: ['WordPress', 'Yoast SEO'],
    images: ['/projects/rice/rice-1.png', '/projects/rice/rice-2.png'],
    isDemo: true,
    features: [
      'Showcase premium Thai rice',
      'Interactive product catalog',
      'Responsive design',
    ],
  },
  {
    id: 10,
    slug: 'zongggd',
    title: 'Zongggd',
    href: {
      demoUrl: 'https://www.zongggd.com/th',
      repoUrl: '',
    },
    description: 'Sticker and print shop e-commerce website',
    datetime: '2024-11-01',
    category: { title: 'Web', href: '/projects?filter=Web' },
    tags: ['Fullstack'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Nest.js', 'PostgreSQL', 'AWS S3', 'AWS Amplify', 'DigitalOcean'],
    images: ['/projects/sticker/sticker-1.png', '/projects/sticker/sticker-2.png'],
    isDemo: true,
    features: [
      'Sticker and print shop',
      'User-friendly interface',
      'Responsive design',
      'Efficient product management',
    ],
  },
  {
    id: 11,
    slug: 'shoppo',
    title: 'Shoppo',
    href: {
      demoUrl: '',
      repoUrl: 'https://github.com/flagrantii/ChatKan-MVP',
    },
    description: 'Browser extension that aids purchasing decisions',
    datetime: '2024-11-01',
    category: { title: 'Chrome Extension', href: '/projects?filter=Chrome%20Extension' },
    tags: ['AI', 'Frontend', 'Fullstack'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Python', 'Selenium', 'OpenAI API'],
    images: ['/projects/shoppo/shoppo-1.png', '/projects/shoppo/shoppo-2.png'],
    isDemo: false,
    features: [
      'Recommendation and alternative suggestions',
      'Shopee and Amazon support',
      'User-friendly interface',
    ],
  },
  {
    id: 12,
    slug: 'smart-parking',
    title: 'Smart Parking',
    href: {
      demoUrl: 'https://embedded-ui-three.vercel.app/',
      repoUrl: 'https://github.com/flagrantii/embedded-ui',
    },
    description: 'Parking Slot Management',
    datetime: '2024-11-01',
    category: { title: 'Hardware', href: '/projects?filter=Hardware' },
    tags: ['AI', 'Hardware', 'Frontend'],
    techStack: ['Next.js', 'TypeScript', 'C++', 'Firebase'],
    images: ['/projects/parking/parking-1.png', '/projects/parking/parking-2.png', '/projects/parking/parking-3.png', '/projects/parking/parking-4.png'],
    isDemo: true,
    features: [
      'Web-app',
      'Real-time data',
      'Report Data',
      'AI integration',
    ],
  },
  {
    id: 13,
    slug: 'servus',
    title: 'Servus',
    href: {
      demoUrl: 'https://servus-page.vercel.app/',
      repoUrl: '',
    },
    description: 'Close-professor for students (Discord Bot)',
    datetime: '2025-01-01',
    category: { title: 'Discord Bot', href: '/projects?filter=Discord%20Bot' },
    tags: ['AI', 'Integration'],
    techStack: ['Next.js', 'Discord.js', 'Typescript', 'Supabase', 'OpenAI API'],
    images: ['/projects/servus/servus-1.png', '/projects/servus/servus-2.png'],
    isDemo: true,
    features: [
      'AI integration',
      'Discord integration',
      'User-friendly interface',
    ],
  },
]

// Adapter for existing UI that expects a lighter structure named `webs`
// - author: hard-coded site owner
// - date: human-readable from datetime
// - href: string path to detail page
// - links: { live, repo }
export const webs = webItems.map((item) => ({
  id: item.id,
  slug: item.slug,
  title: item.title,
  href: `/projects/${item.slug}`,
  description: item.description,
  date: new Date(item.datetime).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  tags: item.tags,
  techStack: item.techStack,
  images: item.images,
  isDemo: item.isDemo,
  features: item.features,
  author: {
    name: 'Tanuson Chaboonchana',
    role: 'Software Engineer',
    imageUrl: '/me4.png',
  },
  links: {
    live: item.href.demoUrl,
    repo: item.href.repoUrl,
  },
})) 