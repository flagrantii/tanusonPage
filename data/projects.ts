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
        "HTML5", 
        "CSS3",
        "JavaScript"
      ],
      features: [
        { feature: "AI-powered personalized recommendations", description: "Utilizes AI to suggest customized itineraries based on user preferences.", status: "completed", category: "Core" },
        { feature: "Local insights and hidden gems", description: "Reveals less-known attractions for a unique travel experience.", status: "completed", category: "Discovery" },
        { feature: "Smart budget optimization", description: "Balances travel plans with user-defined budget constraints.", status: "completed", category: "Planning" }
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
        thirdParty: [
          "Google Maps API"
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
      technologies:  ["HTML5", "CSS3", "JavaScript"],
      features: [
        { feature: "Carbon credit tracking", description: "Tracks carbon credits earned through eco-friendly shopping.", status: "completed", category: "Core" },
        { feature: "Integrated marketplace", description: "Provides a platform for trading and redeeming carbon credits.", status: "completed", category: "Marketplace" },
        { feature: "User-friendly interface", description: "Ensures intuitive navigation for all users.", status: "completed", category: "User Experience" }
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
        thirdParty: []
      },
    },
    {
      id: 3,
      title: "CUNEXT Event",
      description: "Campus-wide event management app",
      longDescription: "Revolutionizing university event management, CUNEXT Event employs React Native and Expo to streamline event discovery, organization, and engagement for students and faculty. It integrates comprehensive features for seamless planning and participation, enhancing campus-wide event experiences.",
      status: "Completed",
      category: "Mobile",
      technologies: ["React Native", "Expo", "Firebase", "Golang", "Tailwind"],
      features: [
        { feature: "Event discovery", description: "Allows users to find events based on interests.", status: "completed", category: "Discovery" },
        { feature: "Streamlined organization", description: "Simplifies the process of organizing and managing events.", status: "completed", category: "Planning" },
        { feature: "Seamless participant engagement", description: "Facilitates communication between event organizers and attendees.", status: "completed", category: "Engagement" },
        { feature: "Real-time data syncing", description: "Ensures up-to-date information is always available.", status: "completed", category: "Performance" }
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
        thirdParty: []
      },
    },
    {
      id: 4,
      title: "Massage Reservation",
      description: "Effortless massage appointment management",
      longDescription: "Designed for ease and efficiency, Massage Reservation is a user-friendly web app for booking and managing massage appointments. It streamlines scheduling processes for clients and practitioners, ensuring seamless communication and enhancing overall service accessibility and satisfaction.",
      status: "Completed",
      category: "Web",
      technologies: ["Next.js", "Node.js", "Tailwind", "Express", "PostgreSQL"],
      features: [
        { feature: "Booking management", description: "Enables easy scheduling of massage appointments.", status: "completed", category: "Core" },
        { feature: "User-practitioner communication", description: "Provides direct communication between clients and practitioners.", status: "completed", category: "Engagement" },
        { feature: "Efficient scheduling system", description: "Optimizes appointment booking and rescheduling.", status: "completed", category: "Planning" }
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
        thirdParty: []
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
        { feature: "Classic Minesweeper gameplay", description: "Recreates the traditional Minesweeper experience.", status: "completed", category: "Core" },
        { feature: "Intuitive user interface", description: "Enhances gameplay with a clean, easy-to-navigate design.", status: "completed", category: "User Experience" },
        { feature: "Interactive grid navigation", description: "Allows players to navigate the grid seamlessly.", status: "completed", category: "Performance" }
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
        thirdParty: []
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
        { feature: "Concurrency management", description: "Optimizes API performance with advanced concurrency techniques.", status: "completed", category: "Core" },
        { feature: "Optimized resource utilization", description: "Ensures efficient use of server resources.", status: "completed", category: "Performance" },
        { feature: "Scalable system architecture", description: "Supports high-demand environments with ease.", status: "completed", category: "Scalability" }
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
        thirdParty: []
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
        { feature: "Student registration", description: "Handles the registration process for freshmen orientation events.", status: "completed", category: "Core" },
        { feature: "Event information management", description: "Provides essential details for all orientation activities.", status: "completed", category: "Discovery" },
        { feature: "User-friendly platform", description: "Ensures a seamless registration and onboarding experience.", status: "completed", category: "User Experience" }
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
        thirdParty: ["AWS S3"]
      },
    },
    {
      id: 8,
      title: "Nodi",
      description: "Discover and connect research papers through intelligent conversations",
      longDescription: "Nodi is a web application that allows users to discover and connect research papers through intelligent conversations. It uses advanced natural language processing techniques to understand the content of the papers and to generate intelligent conversations with the users.",
      status: "Completed",
      category: "Web",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Qdrant", "Python"],
      features: [
        { feature: "Intelligent conversation with research papers", description: "Engages users with AI-driven paper discussions.", status: "completed", category: "Core" },
        { feature: "Paper recommendation based on conversation history", description: "Suggests relevant papers tailored to user preferences.", status: "completed", category: "Discovery" },
        { feature: "User-friendly interface", description: "Simplifies research discovery and interaction.", status: "completed", category: "User Experience" }
      ],      
      icon: "/icon/nodi.png",
      background: "/background/nodi.png",
      images: [
        "/projects/nodi/nodi-1.png",
        "/projects/nodi/nodi-2.png",
        "/projects/nodi/nodi-3.png",
        "/projects/nodi/nodi-4.png"
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
        thirdParty: ["OpenAI API", "Scopus API", "Vertex AI"]
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
      status: "Completed",
      category: "Web",
      technologies: ["WordPress"],
      features: [
        { feature: "Showcase premium Thai rice", description: "Highlights the quality and story behind the Kasalong brand.", status: "completed", category: "Core" },
        { feature: "Interactive product catalog", description: "Offers an engaging display of products with detailed descriptions.", status: "completed", category: "Discovery" },
        { feature: "Responsive design", description: "Ensures a smooth user experience across devices.", status: "completed", category: "User Experience" }
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
        thirdParty: []
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
      technologies: ["Next.js", "TypeScript", "Tailwind", "Nest.js", "PostgreSQL"],
      features: [
        { feature: "Sticker and print shop", description: "Showcases products and services for printing.", status: "in-progress", category: "Core" },
        { feature: "User-friendly interface", description: "Simplifies navigation and product selection.", status: "in-progress", category: "User Experience" },
        { feature: "Responsive design", description: "Ensures functionality across devices.", status: "in-progress", category: "User Experience" },
        { feature: "Efficient product management", description: "Streamlines inventory and order processing.", status: "in-progress", category: "Planning" }
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
        thirdParty: ["AWS S3", "AWS Amplify"]
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
      technologies: ["Next.js", "TypeScript", "Tailwind", "Python", "Selenium"],
      features: [
        { feature: "Recommendation and alternative suggestions", description: "Suggests optimal products for user needs.", status: "in-progress", category: "Core" },
        { feature: "Shopee and Amazon support", description: "Integrates with leading e-commerce platforms.", status: "in-progress", category: "Integration" },
        { feature: "User-friendly interface", description: "Ensures a seamless browsing experience.", status: "in-progress", category: "User Experience" }
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
        thirdParty: ["OpenAI API"]
      },
    },
    {
      id: 12,
      title: "Smart Parking",
      description: "The Embedding-based Project for Smart Parking, developed the prototype for the project",
      longDescription: "The Embedding-based Project for Smart Parking, developed the prototype for the project, which is a system that have web-app for report the parking status and the parking slot, and see the real-time parking slot status and the parking slot",
      status: "Completed",
      category: "Hardware",
      technologies: ["Next.js", "TypeScript", "C++"],
      features: [
        { feature: "Web-app", description: "The web-app for report the parking status and the parking slot, and see the real-time parking slot status and the parking slot", status: "completed", category: "Core" },
        { feature: "Real-time data", description: "The real-time data for the parking slot status and the parking slot", status: "completed", category: "User Experience" },
        { feature: "Report Data", description: "The report data for the parking slot status and the parking slot", status: "completed", category: "User Experience" },
        { feature: "AI integration", description: "The AI integration webcam to detect the parking slot status", status: "completed", category: "Integration" }
      ],      
      icon: "/icon/parking.png",
      background: "/background/parking.png",
      images: [
        "/projects/parking/parking-1.png",
        "/projects/parking/parking-2.png",
        "/projects/parking/parking-3.png",
        "/projects/parking/parking-4.png"
      ],
      githubUrl: "https://github.com/flagrantii/embedded-ui",
      demoUrl: "https://embedded-ui-three.vercel.app/",
      challenges: [
        "Hardware implementation",
        "Webcam implementation and integration"
      ],
      learnings: [
        "Embedded system",
        "Webcam implementation and integration"
      ],
      timeline: "November 2024",
      role: "Software Engineer",
      techDetails: {
        architecture: "Monolithic",
        database: "Firebase",
        hosting: "Vercel",
        thirdParty: ["Firebase RTDB"]
      },
      futureFeatures: [
        "Integrate with AI",
      ]
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