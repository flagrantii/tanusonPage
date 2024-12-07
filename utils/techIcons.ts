import { 
  FaReact, FaNodeJs, FaVuejs, FaAngular, FaPython, 
  FaJava, FaDocker, FaAws, FaDatabase, FaGithub,
  FaHtml5, FaCss3, FaJs, FaPhp, FaLaravel,
  FaSass, FaBootstrap, FaWordpress, FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiMysql,
  SiFirebase, SiGraphql, SiTailwindcss, SiNextdotjs,
  SiExpress, SiDjango, SiFlask, SiSpring, SiKubernetes,
  SiRedis, SiElasticsearch, SiVercel, SiHeroku, SiNetlify,
  SiGooglecloud, SiDigitalocean,
  SiExpo, SiGo,
  SiPrometheus,
  SiGin,
  SiNestjs,
  SiSelenium
} from 'react-icons/si';
import { IconType } from 'react-icons';

export interface TechIconMapping {
  icon: IconType;
  color: string;
  gradient?: string;
}

export const techIconsMap: { [key: string]: TechIconMapping } = {
  // Frontend
  'React': { icon: FaReact, color: '#61DAFB', gradient: 'linear-gradient(45deg, #61DAFB, #00B2FF)' },
  'React Native': { icon: FaReact, color: '#61DAFB', gradient: 'linear-gradient(45deg, #61DAFB, #00B2FF)' },
  'Vue.js': { icon: FaVuejs, color: '#4FC08D', gradient: 'linear-gradient(45deg, #4FC08D, #3AA776)' },
  'Angular': { icon: FaAngular, color: '#DD0031', gradient: 'linear-gradient(45deg, #DD0031, #C3002F)' },
  'Next.js': { icon: SiNextdotjs, color: '#FFFFFF', gradient: 'linear-gradient(45deg, #FFFFFF, #333333)' },
  'HTML5': { icon: FaHtml5, color: '#E34F26', gradient: 'linear-gradient(45deg, #E34F26, #F06529)' },
  'CSS3': { icon: FaCss3, color: '#1572B6', gradient: 'linear-gradient(45deg, #1572B6, #33A9DC)' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E', gradient: 'linear-gradient(45deg, #F7DF1E, #F4D03F)' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', gradient: 'linear-gradient(45deg, #3178C6, #235A97)' },
  'Tailwind': { icon: SiTailwindcss, color: '#38B2AC', gradient: 'linear-gradient(45deg, #38B2AC, #2C7A7B)' },
  'Bootstrap': { icon: FaBootstrap, color: '#7952B3', gradient: 'linear-gradient(45deg, #7952B3, #553C7B)' },
  'Sass': { icon: FaSass, color: '#CC6699', gradient: 'linear-gradient(45deg, #CC6699, #9B4D7A)' },

  // Backend
  'Node.js': { icon: FaNodeJs, color: '#339933', gradient: 'linear-gradient(45deg, #339933, #2E8B57)' },
  'Express': { icon: SiExpress, color: '#FFFFFF', gradient: 'linear-gradient(45deg, #FFFFFF, #333333)' },
  'Python': { icon: FaPython, color: '#3776AB', gradient: 'linear-gradient(45deg, #3776AB, #2B5B84)' },
  'Django': { icon: SiDjango, color: '#092E20', gradient: 'linear-gradient(45deg, #092E20, #0C4B33)' },
  'Flask': { icon: SiFlask, color: '#FFFFFF', gradient: 'linear-gradient(45deg, #FFFFFF, #333333)' },
  'Java': { icon: FaJava, color: '#007396', gradient: 'linear-gradient(45deg, #007396, #005B7F)' },
  'Spring': { icon: SiSpring, color: '#6DB33F', gradient: 'linear-gradient(45deg, #6DB33F, #4F872F)' },
  'PHP': { icon: FaPhp, color: '#777BB4', gradient: 'linear-gradient(45deg, #777BB4, #5B5B93)' },
  'Laravel': { icon: FaLaravel, color: '#FF2D20', gradient: 'linear-gradient(45deg, #FF2D20, #CC241A)' },
  'WordPress': { icon: FaWordpress, color: '#21759B', gradient: 'linear-gradient(45deg, #21759B, #1A5F7A)' },
  'Golang': { icon: SiGo, color: '#00ADD8', gradient: 'linear-gradient(45deg, #00ADD8, #008B94)' },
  'JavaFX': { icon: FaJava, color: '#007396', gradient: 'linear-gradient(45deg, #007396, #005B7F)' },
  'Gin': { icon: SiGin, color: '#00ADD8', gradient: 'linear-gradient(45deg, #00ADD8, #008B94)' },
  'Nest.js': { icon: SiNestjs, color: '#E0234E', gradient: 'linear-gradient(45deg, #E0234E, #C01D3D)' },
  // Database
  'MongoDB': { icon: SiMongodb, color: '#47A248', gradient: 'linear-gradient(45deg, #47A248, #3F8E3F)' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791', gradient: 'linear-gradient(45deg, #336791, #2A537A)' },
  'MySQL': { icon: SiMysql, color: '#4479A1', gradient: 'linear-gradient(45deg, #4479A1, #376789)' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28', gradient: 'linear-gradient(45deg, #FFCA28, #FFA000)' },
  'Redis': { icon: SiRedis, color: '#DC382D', gradient: 'linear-gradient(45deg, #DC382D, #B02C23)' },
  'GraphQL': { icon: SiGraphql, color: '#E10098', gradient: 'linear-gradient(45deg, #E10098, #B4007B)' },
  'Elasticsearch': { icon: SiElasticsearch, color: '#005571', gradient: 'linear-gradient(45deg, #005571, #004058)' },

  // DevOps & Cloud
  'Docker': { icon: FaDocker, color: '#2496ED', gradient: 'linear-gradient(45deg, #2496ED, #1D76BB)' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5', gradient: 'linear-gradient(45deg, #326CE5, #2951B9)' },
  'AWS': { icon: FaAws, color: '#FF9900', gradient: 'linear-gradient(45deg, #FF9900, #CC7A00)' },
  'Google Cloud': { icon: SiGooglecloud, color: '#4285F4', gradient: 'linear-gradient(45deg, #4285F4, #3367D6)' },
  'Vercel': { icon: SiVercel, color: '#FFFFFF', gradient: 'linear-gradient(45deg, #FFFFFF, #333333)' },
  'Heroku': { icon: SiHeroku, color: '#430098', gradient: 'linear-gradient(45deg, #430098, #380083)' },
  'Netlify': { icon: SiNetlify, color: '#00C7B7', gradient: 'linear-gradient(45deg, #00C7B7, #00A395)' },
  'DigitalOcean': { icon: SiDigitalocean, color: '#0080FF', gradient: 'linear-gradient(45deg, #0080FF, #0066CC)' },
  'Expo': { icon: SiExpo, color: '#FFFFFF', gradient: 'linear-gradient(45deg, #FFFFFF, #FFFFFF)' },
  'Prometheus': { icon: SiPrometheus, color: '#E6522C', gradient: 'linear-gradient(45deg, #E6522C, #C34220)' },
  // Tools
  'Figma': { icon: FaFigma, color: '#F24E1E', gradient: 'linear-gradient(45deg, #F24E1E, #FF7262)' },
  'Selenium': { icon: SiSelenium, color: '#01A71C', gradient: 'linear-gradient(45deg, #01A71C, #BEF0B3)' },
} as const; 