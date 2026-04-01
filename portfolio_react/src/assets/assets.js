import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaBrain } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import profileImg1 from '../assets/profile1.jpg';

import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
  profileImg,
  profileImg1,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React     ', 'Tailwind CSS    ', 'CSS3                     ', 'HTML5']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['js ', 'Spring Boot', 'RESTful APIs', 'Hibernate', 'ORMs']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['PostgreSQL', 'MySQL',]
  },
  {
    title: 'Prompt Engineering',
    icon: FaBrain,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud ',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS code', 'Intellij ']
  }
];



export const projects = [
  {
    title: "Mantra - Mental Health Support",
    description: "A full-featured online support platform for mental health with AI integration.",
    image: projectImg1,
    tech: ["React", "SpringBoot", "MySQL", "Gemini API", "Prompt Engineering"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "https://github.com/SanketLohar/MantraCare",
  },
  {
    title: "BillMeX",
    description: "Modern Merchant Infrastructure for India's Digital Economy, featuring bank-grade invoicing and biometric checkout.",
    image: projectImg5,
    tech: ["React", "SpringBoot", "MySQL", "Razorpay", "Tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://billmex-1.onrender.com/index.html",
    code: "https://github.com/SanketLohar/BillMeX",
  },
  {
    title: "MovieDB",
    description: "A movie database application built during internship using nullclass-imdb-internship.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "TMDB API", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/SanketLohar/nullclass-imdb-internship",
  },
  {
    title: "AI Meeting Insights Generator",
    description: "Generate meeting insights powered by Gemini API and Prompt Engineering.",
    image: projectImg6,
    tech: ["React", "Gemini API", "SpringBoot", "Tailwind CSS", "Prompt Engineering"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/SanketLohar/ai-meeting-insights-generator",
  },
  {
    title: "ReTone - Email Tone Rewriter",
    description: "A web platform where users can rewrite emails with different tones using AI.",
    image: projectImg3,
    tech: ["React", "SpringBoot", "Gemini API", "MySQL", "Prompt Engineering"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "https://github.com/SanketLohar/tonechanger",
  },
  {
    title: "NLP Query Engine",
    description: "A productivity application with natural language processing for querying data.",
    image: projectImg2,
    tech: ["React", "MySQL", "Tailwind CSS", "Flask", "NLP"],
    icons: [FaReact, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "https://github.com/SanketLohar/nlp-query-engine",
  }
];


export const workData = [
  {
    role: "Trainee Web Developer",
    company: "TecSpeak IT Solutions",
    duration: "2024",
    description:
      "Worked as a Trainee Web Developer used technologies like HTML,CSS,Js.",
    color: "purple"
  },
  {
    role: "SQL Intern",
    company: "TecSpeak IT Solutions",
    duration: "2025",
    description:
      "Completed SQL internship, gaining hands on experience in database management and query optimization.",
    color: "pink"
  },
  {
    role: "Junior Software Developer Trainee",
    company: "SPCl Infotech Pvt Ltd",
    duration: "2026",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
