import { Layout, Code, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// --- Types ---

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  repoLink?: string;
  image: string;
  accentColor: string;
}

export interface TechCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  accentColor: string;
}

// --- Personal Info ---

export const PERSONAL = {
  name: 'Mark Louil Diacamos',
  title: 'Full-Stack Developer',
  email: 'dmarklouil@gmail.com', 
  github: 'https://github.com/dmarklouil21',
  linkedin: 'https://linkedin.com/in/mark-louil-diacamos-497b383a4',
  resumeUrl: '/resume.pdf',                // <-- ADD your resume.pdf to the public/ folder
};

// --- Tech Stack ---

export const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    description: 'Crafting responsive and interactive interfaces.',
    skills: ['React.js', 'React Native', 'Tailwind CSS', 'TypeScript'],
    accentColor: '#818cf8', // indigo-400
  },
  {
    title: 'Backend',
    icon: Code,
    description: 'Building robust APIs and server-side logic.',
    skills: ['Django', 'DRF', 'Node.js (Express)', 'Python'],
    accentColor: '#22d3ee', // cyan-400
  },
  {
    title: 'Data & Cloud',
    icon: Database,
    description: 'Managing data integrity and deployment.',
    skills: ['PostgreSQL', 'MongoDB Atlas', 'Firebase', 'Vercel'],
    accentColor: '#34d399', // emerald-400
  },
];

// --- Projects ---

export const projects: Project[] = [
  {
    title: 'Cares Platform',
    description:
      'Developed a comprehensive social-services platform with real-time data handling, role-based access control, and complex multi-step user flows. Built with a Django REST backend and a dynamic React frontend.',
    tags: ['React', 'Django', 'PostgreSQL'],
    liveLink: 'https://cares-platform.vercel.app/',
    repoLink: 'https://github.com/dmarklouil21/cares_platform.git',
    image: '/cares-platform.png',
    accentColor: '#818cf8',
  },
  {
    title: 'Sign Fast',
    description:
      'Engineered a full-stack e-signing platform featuring drag-and-drop signature placement, secure document storage, and PDF generation.',
    tags: ['React', 'Firebase'],
    liveLink: 'https://sign-fast.vercel.app/',
    repoLink: 'https://github.com/dmarklouil21/ESigning-Platform.git',
    image: '/sign-fast.png',
    accentColor: '#a78bfa',
  },
  {
    title: 'Agri Connect',
    description:
      'Built an agricultural marketplace connecting local farmers directly with consumers, featuring real-time inventory management, role-based dashboards, and a responsive mobile-first UI.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://agri-connect-ui.vercel.app/',
    repoLink: 'https://github.com/dmarklouil21/AgriConnect.git',
    image: '/agri-connect.png',
    accentColor: '#34d399',
  },
];
