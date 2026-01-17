export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}
export interface Achievement {
  title: string;
  position: string;
  description: string;
  thumbnail: string;
  awardedBy: string;
  date: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    language: Skill[];
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    cloud: Skill[];
    tools: Skill[];
  };
  experience: Experience[];
  education: Experience[];
  projects: Project[];
  achivements: Achievement[];
  courses: Achievement[];
}

export const portfolioData: PortfolioData = {
  name: "Zaid Khan",
  role: "Backend Developer",
  about:
    "Passionate Software Developer with a passion for crafting elegant, scalable solutions. I thrive on turning complex problems into clean, efficient code. Constantly exploring new technologies, building projects, and learning the latest in software development.",
  profileImage: "/images/profile.webp",
  blogUrl: "https://medium.com/@lordarcadius",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/Zaid1681",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/zaid-khan-797252231/",
      icon: "Linkedin",
    },
 
    {
      platform: "Instagram",
      url: "https://www.instagram.com/zaidkhan1681/",
      icon: "Instagram",
    },
  
    {
      platform: "Leetcode",
      url: "https://leetcode.com/u/Zaid888/",
      icon: "Leetcode", // Using BookText as a generic icon for Medium if branded one is missing
    },
    {
      platform: "Email",
      url: "mailto:zaidkhan.dev3@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
  language: [
    { name: "Java", proficiency: "Intermediate" },
    { name: "C++", proficiency: "Intermediate" },
    { name: "Javascript", proficiency: "Advanced" },
    { name: "Python", proficiency: "Beginner" },
  ],
  frontend: [
    { name: "React.js", proficiency: "Intermediate" },
    { name: "Tailwind CSS", proficiency: "Intermediate" },
    { name: "Next.js", proficiency: "Beginner" },
    { name: "Ant Design", proficiency: "Intermediate" },
  ],
   backend: [
    { name: "Spring Boot", proficiency: "Advanced" },
    { name: "Node.js", proficiency: "Intermediate" },
    { name: "Express.js", proficiency: "Intermediate" },
    { name: "Sequelize", proficiency: "Intermediate" },
     { name: "REST APIs", proficiency: "Advanced" },
    { name: "Hibernate", proficiency: "Intermediate" },
    // { name: "JWT", proficiency: "Intermediate" },
    // { name: "RBAC", proficiency: "Intermediate" },
    { name: "Mockito", proficiency: "Intermediate" },
  ],
  database: [
    { name: "MongoDB", proficiency: "Advanced" },
    { name: "Firebase", proficiency: "Intermediate" },
    { name: "MySQL", proficiency: "Advanced" },
    { name: "PostgreSql", proficiency: "Intermediate" },
  ],
  cloud: [
    { name: "Microsoft Azure", proficiency: "Intermediate" },
    { name: "AWS (S3 & EC2)", proficiency: "Intermediate" },
  ],
  tools: [
    { name: "Git & Github", proficiency: "Advanced" },
    { name: "Postman", proficiency: "Intermediate" },
    { name: "Docker", proficiency: "Beginner" },
    // { name: "VS Code", proficiency: "Advanced" },
    // { name: "IntelliJ IDEA", proficiency: "Advanced" },
  ],
  
},

  experience: [
    {
  company: "Tata Consultancy Services",
  role: "Software Engineer",
  period: "Nov, 2024 - Present",
  description: [
    "Developing and maintaining backend services for enterprise-scale banking platforms using Java and Spring Boot.",
    "Building secure, scalable REST APIs supporting core banking workflows and customer-facing applications.",
    "Working on microservice-based architectures with a focus on performance, reliability, and security.",
    "Integrating third-party services and internal systems to support financial transactions and platform operations.",
    "Collaborating with cross-functional teams to deliver high-quality solutions in a regulated BFSI environment."
  ],
},
{
  company: "Vervali System",
  role: "Associate Software Engineer",
  period: "June, 2024 - Sept, 2024",
  description: [
    "Contributed to backend and full-stack development for client applications across multiple projects.",
    "Designed and maintained RESTful APIs to support web and mobile platforms.",
    "Improved application performance through debugging, optimization, and code refactoring.",
    "Worked closely with senior engineers to understand system design and software architecture.",
    "Participated in agile development processes including sprint planning and code reviews."
  ],
},
{
  company: "Goloka IT (Startup)",
  role: "Full Stack Developer Intern",
  period: "Nov, 2023 - Mar, 2024",
  description: [
    "Developed full-stack features using modern frontend and backend technologies.",
    "Built and integrated REST APIs with frontend components for seamless data flow.",
    "Worked on database design, queries, and backend business logic.",
    "Collaborated in a fast-paced startup environment, contributing across the entire product lifecycle.",
    "Gained hands-on experience with end-to-end application development and deployment."
  ],
},

  ],

  education: [
  {
    role: "Vidyavardhini's College Of Engineering & Technology, Mumbai",
    company: "B.E Information Technology",
    period: "2020 - 2024",
    description: [
      "Pursued a Bachelor’s degree in Information Technology with a strong foundation in core computer science subjects such as Database Management Systems (DBMS), Operating Systems (OS), and Computer Networks (CN).",
      "Applied theoretical concepts to real-world problems through academic projects, demonstrating a balance of system design, problem-solving, and hands-on implementation.",
      "Winner of Smart India Hackathon (SIH) 2023 at the national level, building innovative and scalable technology-driven solutions under competitive constraints.",
      "Led the Corporate Relations team of the Entrepreneurship Cell (E-Cell) and actively contributed to organizing Vidyavardhini’s flagship event, VVSF.",
      "Actively participated in multiple inter-college and national-level hackathons, gaining experience in rapid prototyping, teamwork, and solution-oriented development."
    ],
  },
],

  projects: [
    {
  title: "Project Hub",
  description:
    "A collaborative project management platform for students and faculties to store, explore, and collaborate on academic projects with community-driven learning.",
  techStack: [
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Firebase",
    "MongoDB",
    "RBAC"
  ],
  link: "https://vcet-projecthub.netlify.app/homepage",
  github: "https://github.com/Zaid1681/Project_Hub",
  thumbnail: "/images/projects/PH.png",
},
  //  {
  // title: "PG Dissertation Management Portal",
  //   description:
  //     "A centralized web platform for managing postgraduate dissertations across universities, enabling secure storage, research collaboration, advanced search, and academic insights.",
  //   techStack: [
  //     "React",
  //     "Tailwind CSS",
  //     "Ant Design",
  //     "Bootstrap",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Firebase"
  //   ],
  //   link: "",
  //   github: "https://github.com/Zaid1681/PG-Dissertation-Management",
  //   thumbnail: "/images/projects/pgDissertation.png",
  // },

    {
      title: "Yoga Pose Detection & Correction System",
      description:
        "An AI-powered real-time yoga posture detection system using computer vision to analyze body alignment, joint angles, and provide instant posture correction feedback.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Python",
        "MediaPipe",
        "OpenCV"
      ],
      link: "https://www.linkedin.com/posts/zaid-khan-797252231_team-machinelearning-kaggle-activity-7067861572848693248-0nhy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnhDuMB5GlbUh2hKVlLvAbbosA-DpbSNCY",
      github: "https://github.com/Zaid1681/Yoga-Posture-Detection-WebApp",
      thumbnail: "/images/projects/yoga.png",
    },
    {
      title: "Employee & Task Management Portal",
      description:
        "A multi-portal platform with Admin and Employee dashboards to manage employees, assign tasks, track progress, communicate, and plan work efficiently.",
      techStack: [
        "React",
        "Redux",
        "Firebase",
        "Tailwind CSS"
      ],
      link: "https://empzmanage.netlify.app/",
      github: "https://github.com/Zaid1681/Employee-Management-System",
      thumbnail: "/images/projects/empManage.png",
    },
    {
      title: "Vasai–Virar Start-Up Fest Website",
      description:
        "Official event website built for E-Cell VCET to celebrate the Golden Jubilee and host the Vasai–Virar Start-Up Fest with event timelines, sponsors, and registrations.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js"
      ],
      link: "https://ecellvvsf.netlify.app/#",
      github: "https://github.com/Zaid1681/Ecell-VVSF-NextJs",
      thumbnail: "/images/projects/vvsf.png",
    },
    {
      title: "ML-Based Sign Recognition System",
      description:
        "A machine learning–based system that recognizes sign language gestures used by deaf and mute individuals and converts them into understandable characters, enabling better human–computer and human–human communication.",
      techStack: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "NumPy"
      ],
      link: "",
      github: "https://github.com/Zaid1681/Sign-Language-Recognition-System",
      thumbnail: "/images/projects/signLanguage.png",
    },
    {
      title: "House Rent Prediction System",
      description:
        "A data science and machine learning project that predicts house rent prices across major Indian cities using regression, classification, clustering, and data visualization techniques.",
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn"
      ],
      link: "https://www.linkedin.com/posts/zaid-khan-797252231_datascience-team-data-activity-7067410347049066496-TKw8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnhDuMB5GlbUh2hKVlLvAbbosA-DpbSNCY",
      github: "https://github.com/Zaid1681/House-Rent-Prediction-System?tab=readme-ov-file",
      thumbnail: "/images/projects/houseRent.png",
    }
  ],
   achivements: [
  {
    title: "Smart India Hackathon Winner",
    position: "1",
    description:
      "Secured 1st place at Smart India Hackathon 2023 by developing a PG Dissertation Management System under a problem statement from the Ministry of Ayush. The solution was built and delivered within a 36-hour national-level hackathon, showcasing strong problem-solving, leadership, and the ability to build scalable, user-centric academic systems under pressure.",
    thumbnail: "/images/projects/SIH23.jpeg",
    awardedBy: "Ministry Of Ayush, Nagpur",
    date: "December 2023",
  },
  {
    title: "VNPS Project Presentation",
    position: "1",
    description:
      "Won 1st position at VCET’s National Level Project Showcase (VNPS) 2024 by presenting an innovative academic project management platform. The project was recognized for its practical approach, technical depth, and impact on improving collaboration and project tracking within educational institutions.",
    thumbnail: "/images/projects/vnps24.jpg",
    awardedBy: "Vidyvardhini's College Of Engineering & Technology",
    date: "April 2024",
  },
  {
    title: "Oscillation Technical Paper Presentation",
    position: "1",
    description:
      "Achieved 1st place at Oscillations 2024 Technical Paper Presentation by presenting a research-focused solution addressing challenges in academic project management. The work highlighted analytical thinking, clear problem articulation, and effective communication of complex technical concepts.",
    thumbnail: "/images/projects/osci24.jpg",
    awardedBy: "Vidyvardhini's College Of Engineering & Technology",
    date: "April 2024",
  },
  {
    title: "Oscillation Technical Paper Presentation",
    position: "1",
    description:
      "Secured 1st position at Oscillations 2023 Technical Paper Presentation with a research paper in the AI/ML domain on a Sign Language Recognition System. The system demonstrated real-time hand posture detection, emphasizing accessibility, innovation, and the practical application of machine learning.",
    thumbnail: "/images/projects/oscil23.png",
    awardedBy: "Vidyvardhini's College Of Engineering & Technology",
    date: "April 2023",
  },
  {
    title: "VNPS Project Presentation",
    position: "2",
      description : "Presented a second-year engineering mini project at VCET’s National Level Project Showcase (VNPS) 2022. The project demonstrated foundational engineering concepts, practical problem-solving skills, and early exposure to project presentation and technical communication at an academic forum.",
    thumbnail: "/images/projects/vnps22.png",
    awardedBy: "Vidyvardhini's College Of Engineering & Technology",
    date: "April 2022",
  },
],
courses: [
  {
    title: "Smart India Hackathon Winner",
    position: "1",
    description:
      "Secured 1st place at Smart India Hackathon 2023 by developing a PG Dissertation Management System under a problem statement from the Ministry of Ayush. The solution was built and delivered within a 36-hour national-level hackathon, showcasing strong problem-solving, leadership, and the ability to build scalable, user-centric academic systems under pressure.",
    thumbnail: "/images/projects/SIH23.jpeg",
    awardedBy: "Ministry Of Ayush, Nagpur",
    date: "December 2023",
  },
 
]

};
