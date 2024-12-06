import { ProjectDetail } from './interface';

export const projects: ProjectDetail[] = [
    {
      id: 1,
      title: "Trip Recommendation",
      description: "AI-powered travel itinerary planner",
      longDescription: "An innovative travel companion app that leverages AI to create personalized travel experiences in Bangkok. The app analyzes user preferences, travel history, and real-time data to suggest optimal itineraries, hidden gems, and local experiences.",
      status: "Completed",
      category: "Web",
      technologies: [
        "HTML", 
        "CSS",
        "JavaScript",
        "Google Maps API"
      ],
      features: [
        "AI-powered personalized recommendations",
        "Local insights and hidden gems",
        "Smart budget optimization",
      ],
      icon: "/icon/triplogo.jpg",
      background: "/background/trip.png",
      images: [
        "/projects/trip/trip-1.png",
        "/projects/trip/trip-2.png",
      ],
      githubUrl: "https://github.com/flagrantii/TripRecommend",
      demoUrl: "",
      challenges: [
        "Implementing complex AI algorithms for personalized recommendations",
        "Optimizing real-time data processing for large-scale user base",
        "Creating an intuitive UX for complex travel planning"
      ],
      learnings: [
        "Advanced AI integration in web applications",
        "Large-scale data processing and optimization",
        "UX design for complex user journeys"
      ],
      timeline: "April 2023",
      role: "FullStack Developer",
      techDetails: {
        architecture: "Monolithic",
        database: "MongoDB",
        hosting: "OnRender",
        apis: [
        ]
      },
    },
    {
      id: 2,
      title: "Carbon Credits Marketplace",
      description: "Eco-friendly shopping via carbon credit trading",
      longDescription: "Bridging sustainability and consumerism, Carbon Credit Marketplace enables the trading of carbon credits through clothing purchases. This innovative web app promotes eco-friendly shopping habits while empowering users to contribute positively to environmental conservation efforts through their everyday choices.",
      status: "Completed",
      category: "Web",
      technologies:  ["HTML", "CSS", "JavaScript"],
      features: [
        "Carbon credit tracking",
        "Integrated marketplace",
        "User-friendly interface"
      ],
      icon: "/icon/carbonlogo.jpg",
      background: "/background/carbon.png",
      images: [
        "/projects/carbon/carbon-1.png",
        "/projects/carbon/carbon-2.png"
      ],
      githubUrl: "https://github.com/flagrantii/CaronCredit-main",
      demoUrl: "",
      challenges: [
        "Building a marketplace ecosystem",
        "Ensuring eco-sustainability integration",
        "Creating a user-friendly interface",
        "Ensuring scalability and performance"
      ],
      learnings: [
        "Sustainable web app design",
        "Marketplace implementation strategies"
      ],
      timeline: "May 2023",
      role: "FullStack Developer / UXUI Designer",
      techDetails: {
        architecture: "Monolithic",
        database: "MongoDB",
        hosting: "OnRender",
        apis: [
        ]
      },
    },
    {
      id: 3,
      title: "CUNEXT Event",
      description: "Campus-wide event management app",
      longDescription: "Revolutionizing university event management, CUNEXT Event employs React Native and Expo to streamline event discovery, organization, and engagement for students and faculty. It integrates comprehensive features for seamless planning and participation, enhancing campus-wide event experiences.",
      status: "Completed",
      category: "Mobile",
      technologies: ["React Native", "Expo", "Firebase", "Golang", "Tailwind CSS"],
      features: [
        "Event discovery",
        "Streamlined organization",
        "Seamless participant engagement",
        "Real-time data syncing"
      ],
      icon: "/icon/CUNEXT.png",
      background: "/background/event.png",
      images: [
        "/projects/event/event-1.png",
        "/projects/event/event-2.png"
      ],
      githubUrl: "https://github.com/flagrantii/cunext-event",
      demoUrl: "",
      challenges: [
        "Ensuring real-time data syncing",
        "Enhancing user engagement features",
        "Ensuring scalability and performance",
        "Ensuring real-time data syncing"
      ],
      learnings: [
        "Mobile-first design",
        "Real-time application workflows",
        "Ensuring scalability and performance"
      ],
      timeline: "March 2024",
      role: "Frontend Developer / Mobile Developer",
      techDetails: {
        architecture: "Monolithic",
        database: "PostgreSQL",
        hosting: "Expo",
        apis: [
        ]
      },
    },
    {
      id: 4,
      title: "Massage Reservation",
      description: "Effortless massage appointment management",
      longDescription: "Designed for ease and efficiency, Massage Reservation is a user-friendly web app for booking and managing massage appointments. It streamlines scheduling processes for clients and practitioners, ensuring seamless communication and enhancing overall service accessibility and satisfaction.",
      status: "Completed",
      category: "Web",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "Express", "PostgreSQL"],
      features: [
        "Booking management",
        "User-practitioner communication",
        "Efficient scheduling system"
      ],
      icon: "/icon/logo1.png",
      background: "/background/massage.png",
      images: [
        "/projects/massage/massage-1.png",
        "/projects/massage/massage-2.png"
      ],
      githubUrl: "https://github.com/flagrantii/Massage-Reservation-2",
      demoUrl: "https://swdevprac2-project-get-a-good-rest-api-gules.vercel.app/",
      challenges: [
        "Optimizing appointment scheduling",
        "Improving communication channels",
        "Ensuring scalability and performance"
      ],
      learnings: [
        "Service-based application architecture",
        "User-focused design enhancements"
      ],
      timeline: "April 2024",
      role: "FullStack Developer / DevOps Engineer",
      techDetails: {
        architecture: "Monolithic",
        database: "MongoDB",
        hosting: "Vercel",
        apis: [
        ]
      },
    },
    {
      id: 5,
      title: "Minesweeper with JavaFX",
      description: "Classic gaming with JavaFX",
      longDescription: "Developed using JavaFX, Mine Sweeper offers a classic gaming experience with an intuitive user interface. Players navigate through a grid to uncover mines while strategically flagging potential dangers, combining logic and concentration in an engaging, interactive gameplay format.",
      status: "Completed",
      category: "Application",
      technologies: ["Java", "JavaFX"],
      features: [
        "Classic Minesweeper gameplay",
        "Intuitive user interface",
        "Interactive grid navigation"
      ],
      icon: "/icon/bomb.png",
      background: "/background/mine.png",
      images: [
        "/projects/mine/mine-1.png",
        "/projects/mine/mine-2.png"
      ],
      githubUrl: "https://github.com/flagrantii/Minesweeper-java",
      demoUrl: "",
      challenges: [
        "Designing intuitive gameplay mechanics",
        "Optimizing UI for responsiveness"
      ],
      learnings: [
        "JavaFX application development",
        "Enhancing gameplay interaction"
      ],
      timeline: "May 2024",
      role: "Developer / Designer",
      techDetails: {
        architecture: "Monolithic",
        database: "",
        hosting: "",
        apis: [
        ]
      },
    },
    {
      id: 6,
      title: "Golang Concurrency API",
      description: "High-performance API with Golang",
      longDescription: "Developed as part of an internship, the Golang Concurrency API enhances application performance with robust concurrency management. This project showcases advanced Golang programming skills, optimizing resource utilization and scalability in distributed systems and high-demand environments.",
      status: "Completed",
      category: "Server",
      technologies: ["Golang", "Docker", "Redis", "PostgreSQL", "Prometheus"],
      features: [
        "Concurrency management",
        "Optimized resource utilization",
        "Scalable system architecture"
      ],
      icon: "/icon/golang.jpg",
      background: "/background/golang.png",
      images: [],
      githubUrl: "",
      demoUrl: "",
      challenges: [
        "Concurrency optimization",
        "Scalable architecture design",
        "Ensuring scalability and performance",
        "Race condition prevention"
      ],
      learnings: [
        "Concurrency patterns in Golang",
        "Distributed system principles",
        "Implementing monitoring and logging"
      ],
      timeline: "June 2024",
      role: "Software Developer Internship",
      techDetails: {
        architecture: "Monolithic",
        database: "PostgreSQL",
        hosting: "",
        apis: [
        ]
      },
    },
    {
      id: 7,
      title: "Rub Puen Kao Mai 2024",
      description: "Freshmen orientation registration platform",
      longDescription: "Freshmen orientation registration website for the Student Government of Chulalongkorn University.",
      status: "Completed",
      category: "Web",
      technologies: ["Next.js", "Golang", "Gin", "PostgreSQL"],
      features: [
        "Student registration",
        "Event information management",
        "User-friendly platform"
      ],
      icon: "/icon/sgcu_logo.jpg",
      background: "/background/rpkm.png",
      images: [
        "/projects/rpkm/rpkm-1.png",
        "/projects/rpkm/rpkm-2.png"
      ],
      githubUrl: "https://github.com/isd-sgcu/rpkm67-backend",
      demoUrl: "https://cufreshy2024.com/",
      challenges: [
        "Ensuring smooth registration workflows",
        "Balancing scalability and user experience"
      ],
      learnings: [
        "Backend integration techniques",
        "High-traffic web app performance"
      ],
      timeline: "July 2024",
      role: "Software Developer",
      metrics: {
        users: "3000+",
        accuracy: "95%",
        satisfaction: "4.9/5"
      },
      techDetails: {
        architecture: "Microservices",
        database: "PostgreSQL",
        hosting: "DigitalOcean",
        apis: [
        ]
      },
    },
    {
      id: 8,
      title: "Nodi",
      description: "Discover and connect research papers through intelligent conversations",
      longDescription: "Nodi is a web application that allows users to discover and connect research papers through intelligent conversations. It uses advanced natural language processing techniques to understand the content of the papers and to generate intelligent conversations with the users.",
      status: "Development",
      category: "Web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Qdrant", "Python"],
      features: [
        "Intelligent conversation with research papers",
        "Paper recommendation based on conversation history",
        "User-friendly interface",
      ],
      icon: "/icon/nodi.png",
      background: "/background/nodi.png",
      images: [
        "/projects/nodi/nodi-1.png",
        "/projects/nodi/nodi-2.png"
      ],
      githubUrl: "https://github.com/flagrantii/dsde-web",
      demoUrl: "https://thenodi.vercel.app/",
      challenges: [
        "Implementing advanced natural language processing techniques",
        "Ensuring scalable and efficient system architecture"
      ],
      learnings: [
        "Advanced natural language processing",
        "Scalable system architecture"
      ],
      timeline: "December 2024",
      role: "Software Developer",
      techDetails: {
        architecture: "Monolithic",
        database: "PostgreSQL",
        hosting: "Vercel",
        apis: [
          "OpenAI API"
        ]
      },
      futureFeatures: [
        "Enhanced user profile management",
        "Advanced analytics and reporting"
      ]
    },
    {
      id: 9,
      title: "Kasalong",
      description: "The static website for premium Thai rice brand.",
      longDescription: "Kasalong is a web application that high-quality rice mill that exports premium Thai rice …and has become the owner of the “Kasalong Rice” brand today. ",
      status: "Complete",
      category: "Web",
      technologies: ["WordPress"],
      features: [
        "Premium rice brand",
        "User-friendly interface",
        "Responsive design"
      ],
      icon: "/icon/kasalong.png",
      background: "/background/rice.png",
      images: [
        "/projects/rice/rice-1.png",
        "/projects/rice/rice-2.png"
      ],
      githubUrl: "",
      demoUrl: "https://www.kasalongrice.com/en/home/",
      challenges: [
        "Ensuring scalable and efficient system architecture",
        "Ensuring responsiveness"
      ],
      learnings: [
        "WordPress customization",
        "Scalable system architecture"
      ],
      timeline: "July 2024",
      role: "Software Developer",
      metrics: {
        users: "100+",
        accuracy: "95%",
        satisfaction: "4.9/5"
      },
      techDetails: {
        architecture: "Monolithic",
        database: "",
        hosting: "WordPress",
        apis: [
        ]
      },
      futureFeatures: [
        "Enhanced user profile management",
        "Advanced analytics and reporting"
      ]
    },
    {
      id: 10,
      title: "Zongggd",
      description: "The e-commerce website for a sticker and print shop.",
      longDescription: "Songdee is a factory that accepts printing of stickers, postal envelopes, plastic envelopes, business cards, all kinds of cards. We have our own factory, no middlemen, low minimums, high quality work.",
      status: "Development",
      category: "Web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "AWS", "PostgreSQL"],
      features: [
        "Sticker and print shop",
        "User-friendly interface",
        "Responsive design",
        "Efficient product management"
      ],
      icon: "/icon/sticker.png",
      background: "/background/sticker.png",
      images: [
        "/projects/sticker/sticker-1.png",
        "/projects/sticker/sticker-2.png"
      ],
      githubUrl: "",
      demoUrl: "https://www.zongggd.com/th",
      challenges: [
        "Ensuring scalable and efficient system architecture",
        "Complex ecommerce system"
      ],
      learnings: [
        "Next.js and Tailwind CSS",
        "Nest.js and PostgreSQL",
        "AWS deployment"  
      ],
      timeline: "November 2024",
      role: "FullStack Developer",
      metrics: {
        users: "200+",
        accuracy: "95%",
        satisfaction: "4.9/5"
      },
      techDetails: {
        architecture: "Monolithic",
        database: "PostgreSQL",
        hosting: "DigitalOcean",
        apis: [
        ]
      },
      futureFeatures: [
        "Product recommendation",
      ]
    },
    {
      id: 11,
      title: "Shoppo",
      description: "Browser extension that aids purchasing decisions by recommending products and suggesting alternatives",
      longDescription: "Browser extension that aids purchasing decisions by recommending products and suggesting alternatives currently supports Shopee, with plans to expand to Amazon for enhanced shopping assistance",
      status: "Development",
      category: "Chrome Extension",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Selenium"],
      features: [
        "Recommendation and alternative suggestions",
        "Shopee and Amazon support",
        "User-friendly interface"
      ],
      icon: "/icon/shoppo.png",
      background: "/background/shoppo.png",
      images: [
        "/projects/shoppo/shoppo-1.png",
        "/projects/shoppo/shoppo-2.png"
      ],
      githubUrl: "https://github.com/flagrantii/ChatKan-MVP",
      demoUrl: "",
      challenges: [
        "Ensuring scalable and efficient system architecture"
      ],
      learnings: [
        "Next.js and Tailwind CSS",
        "Nest.js and PostgreSQL",
        "AWS deployment"  
      ],
      timeline: "November 2024",
      role: "FullStack Developer",
      techDetails: {
        architecture: "Monolithic",
        database: "PostgreSQL",
        hosting: "Chrome Extension",
        apis: [
        ]
      },
    },
    
  ];
  

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projects.find(project => project.id === parseInt(id));
};

export const getRelatedProjects = (id: string): ProjectDetail[] => {
  const currentProject = getProjectById(id);
  if (!currentProject) return [];
  
  return projects
    .filter(project => 
      project.id !== parseInt(id) && 
      project.technologies.some(tech => 
        currentProject.technologies.includes(tech)
      )
    )
    .slice(0, 3);
}; 