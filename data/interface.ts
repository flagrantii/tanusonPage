export interface webJson {
    id: number;
    title: string;
    href: string;
    description: string;
    date: string;
    datetime: string;
    category: {
        title: string;
        href?: string;
    };
    author: {
        name: string;
        role: string;
        href: string;
        imageUrl: string;
    };
    technologies?: string[];
}

export interface certJson {
        id: number;
        title: string;
        href: string;
        description: string;
        date: string;
        datetime: string;
        category: { title: string; org: string };
          author: {
          name: string;
          role: string;
          href: string;
          imageUrl:
                string;
          cersimage: string;
      },
        skills: string[];
}

export interface careerJson {
        id: number;
        company: string;
        href: string;
        description: string;
        date: string;
        role: string;
        location: string;
        img: string;
}

export interface eduJson {
    id: number;
    company: string;
    href: string;
    description: string;
    date: string;
    role: string;
    location: string;
    img: string;
}

export interface ProjectMetrics {
  users?: string;
  accuracy?: string;
  satisfaction?: string;
  performance?: string;
}

export interface TechDetails {
  architecture: string;
  database: string;
  hosting: string;
  apis: string[];
}

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  status: string;
  category: string;
  technologies: string[];
  features: string[];
  images: string[];
  icon: string;
  background: string;
  githubUrl: string;
  demoUrl?: string;
  challenges: string[];
  learnings: string[];
  timeline: string;
  role: string;
  team?: string[];
  metrics?: ProjectMetrics;
  techDetails?: TechDetails;
  futureFeatures?: string[];
}