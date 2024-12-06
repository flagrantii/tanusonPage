import { ProjectDetail } from './interface';

export const projects: ProjectDetail[] = [
    {
      id: 1,
      title: "Trip Recommendation",
      description: "AI-powered travel itinerary planner",
      longDescription: `An innovative travel companion app that leverages AI to create personalized travel experiences in Bangkok. 
      The app analyzes user preferences, travel history, and real-time data to suggest optimal itineraries, hidden gems, and local experiences.
      Features smart scheduling, budget optimization, and real-time updates for weather and crowd levels.`,
      technologies: [
        "Next.js", 
        "TypeScript",
        "TensorFlow.js",
        "Python",
        "OpenAI API",
        "MongoDB",
        "Google Maps API"
      ],
      features: [
        "AI-powered personalized recommendations",
        "Interactive 3D map visualization",
        "Real-time crowd prediction",
        "Local insights and hidden gems",
        "Smart budget optimization",
        "Weather-aware scheduling"
      ],
      images: [
        "/icon/triplogo.jpg",
        "/projects/trip/map.png",
        "/projects/trip/recommendations.png"
      ],
      githubUrl: "https://github.com/flagrantii/TripRecommend",
      demoUrl: "https://triprecommend.vercel.app",
      challenges: [
        "Implementing complex AI algorithms for personalized recommendations",
        "Optimizing real-time data processing for large-scale user base",
        "Creating an intuitive UX for complex travel planning",
        "Balancing accuracy and performance in prediction models"
      ],
      learnings: [
        "Advanced AI integration in web applications",
        "Large-scale data processing and optimization",
        "UX design for complex user journeys",
        "Real-time system architecture"
      ],
      timeline: "April 2023",
      role: "Frontend Developer",
      team: [
        "Lead Developer",
        "AI Engineer",
        "UX Designer"
      ],
      metrics: {
        users: "1000+",
        accuracy: "92%",
        satisfaction: "4.8/5"
      },
      techDetails: {
        architecture: "Microservices",
        database: "MongoDB",
        hosting: "Vercel",
        apis: [
          "OpenAI GPT-4",
          "Google Maps",
          "Weather API"
        ]
      },
      futureFeatures: [
        "AR navigation",
        "Social planning",
        "Offline mode"
      ]
    },
    {
      id: 2,
      title: "Carbon Credits Marketplace",
      description: "Eco-friendly shopping via carbon credit trading",
      longDescription: "Bridging sustainability and consumerism, Carbon Credit Marketplace enables the trading of carbon credits through clothing purchases. This innovative web app promotes eco-friendly shopping habits while empowering users to contribute positively to environmental conservation efforts through their everyday choices.",
      technologies: ["React", "Node.js", "MongoDB"],
      features: [
        "Carbon credit tracking",
        "Integrated marketplace",
        "User-friendly interface"
      ],
      images: [
        "/icon/carbonlogo.jpg"
      ],
      githubUrl: "https://github.com/flagrantii/CaronCredit-main",
      challenges: [
        "Building a marketplace ecosystem",
        "Ensuring eco-sustainability integration"
      ],
      learnings: [
        "Sustainable web app design",
        "Marketplace implementation strategies"
      ],
      timeline: "May 2023",
      role: "FullStack Developer / UXUI Designer"
    },
    {
      id: 3,
      title: "Ranfoom",
      description: "Fun food suggestion app",
      longDescription: "An innovative Flutter application, Ranfoom simplifies meal decision-making by randomly suggesting food options. Users enjoy a playful and spontaneous approach to choosing meals, making dining decisions fun and effortless with intuitive mobile interface features.",
      technologies: ["Flutter", "Dart"],
      features: [
        "Random food suggestions",
        "Intuitive mobile interface",
        "Playful and interactive design"
      ],
      images: [
        "/icon/foodlogo.jpg"
      ],
      githubUrl: "",
      challenges: [
        "Creating engaging UI components",
        "Ensuring consistent performance on mobile devices"
      ],
      learnings: [
        "Mobile app design patterns",
        "Flutter optimization techniques"
      ],
      timeline: "June 2021",
      role: "Frontend Developer / UXUI Designer"
    },
    {
      id: 4,
      title: "CUNEXT Event",
      description: "Campus-wide event management app",
      longDescription: "Revolutionizing university event management, CUNEXT Event employs React Native and Expo to streamline event discovery, organization, and engagement for students and faculty. It integrates comprehensive features for seamless planning and participation, enhancing campus-wide event experiences.",
      technologies: ["React Native", "Expo", "Firebase"],
      features: [
        "Event discovery",
        "Streamlined organization",
        "Seamless participant engagement"
      ],
      images: [
        "/icon/CUNEXT.png"
      ],
      githubUrl: "https://github.com/flagrantii/cunext-event",
      challenges: [
        "Ensuring real-time data syncing",
        "Enhancing user engagement features"
      ],
      learnings: [
        "Mobile-first design",
        "Real-time application workflows"
      ],
      timeline: "March 2024",
      role: "Frontend Developer / Mobile Developer"
    },
    {
      id: 5,
      title: "Massage Reservation",
      description: "Effortless massage appointment management",
      longDescription: "Designed for ease and efficiency, Massage Reservation is a user-friendly web app for booking and managing massage appointments. It streamlines scheduling processes for clients and practitioners, ensuring seamless communication and enhancing overall service accessibility and satisfaction.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      features: [
        "Booking management",
        "User-practitioner communication",
        "Efficient scheduling system"
      ],
      images: [
        "/icon/logo1.png"
      ],
      githubUrl: "https://github.com/flagrantii/Massage-Reservation-2",
      challenges: [
        "Optimizing appointment scheduling",
        "Improving communication channels"
      ],
      learnings: [
        "Service-based application architecture",
        "User-focused design enhancements"
      ],
      timeline: "April 2024",
      role: "FullStack Developer / DevOps Engineer"
    },
    {
      id: 6,
      title: "Minesweeper with JavaFX",
      description: "Classic gaming with JavaFX",
      longDescription: "Developed using JavaFX, Mine Sweeper offers a classic gaming experience with an intuitive user interface. Players navigate through a grid to uncover mines while strategically flagging potential dangers, combining logic and concentration in an engaging, interactive gameplay format.",
      technologies: ["Java", "JavaFX"],
      features: [
        "Classic Minesweeper gameplay",
        "Intuitive user interface",
        "Interactive grid navigation"
      ],
      images: [
        "/icon/bomb.png"
      ],
      githubUrl: "https://github.com/flagrantii/Minesweeper-java",
      challenges: [
        "Designing intuitive gameplay mechanics",
        "Optimizing UI for responsiveness"
      ],
      learnings: [
        "JavaFX application development",
        "Enhancing gameplay interaction"
      ],
      timeline: "May 2024",
      role: "Developer / Designer"
    },
    {
      id: 7,
      title: "Golang Concurrency API",
      description: "High-performance API with Golang",
      longDescription: "Developed as part of an internship, the Golang Concurrency API enhances application performance with robust concurrency management. This project showcases advanced Golang programming skills, optimizing resource utilization and scalability in distributed systems and high-demand environments.",
      technologies: ["Golang", "Docker", "Redis"],
      features: [
        "Concurrency management",
        "Optimized resource utilization",
        "Scalable system architecture"
      ],
      images: [
        "/icon/golang.jpg"
      ],
      githubUrl: "#",
      challenges: [
        "Concurrency optimization",
        "Scalable architecture design"
      ],
      learnings: [
        "Concurrency patterns in Golang",
        "Distributed system principles"
      ],
      timeline: "June 2024",
      role: "Software Developer Internship"
    },
    {
      id: 8,
      title: "Rub Puen Kao Mai 2024",
      description: "Freshmen orientation registration platform",
      longDescription: "Freshmen orientation registration website for the Student Government of Chulalongkorn University.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "Student registration",
        "Event information management",
        "User-friendly platform"
      ],
      images: [
        "/icon/sgcu_logo.jpg"
      ],
      githubUrl: "https://github.com/isd-sgcu/rpkm67-backend",
      challenges: [
        "Ensuring smooth registration workflows",
        "Balancing scalability and user experience"
      ],
      learnings: [
        "Backend integration techniques",
        "High-traffic web app performance"
      ],
      timeline: "July 2024",
      role: "Software Developer"
    }
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