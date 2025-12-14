import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Code, Database, Layout, X, ZoomIn } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// --- Types & Interfaces ---

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  repoLink?: string;
  image: string;
  color: string;
}

interface TechCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  colorClass: string;
}

const Portfolio: React.FC = () => {
  
  // --- State for Lightbox ---
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // --- Data Objects ---
  
  const techStack: TechCategory[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Crafting responsive and interactive interfaces.",
      skills: ["React.js", "React Native", "Tailwind CSS", "TypeScript"],
      colorClass: "text-indigo-400"
    },
    {
      title: "Backend",
      icon: Code,
      description: "Building robust APIs and server-side logic.",
      skills: ["Django", "DRF", "Node.js (Express)", "Python"],
      colorClass: "text-cyan-400"
    },
    {
      title: "Data & Cloud",
      icon: Database,
      description: "Managing data integrity and deployment.",
      skills: ["PostgreSQL", "MongoDB Atlas", "Firebase", "Vercel"],
      colorClass: "text-emerald-400"
    }
  ];

  const projects: Project[] = [
    {
      title: "Cares Platform",
      description: "A comprehensive web platform for social services featuring real-time data handling and complex user flows.",
      tags: ["React", "Django", "PostgreSQL"],
      liveLink: "https://cares-platform.vercel.app/",
      repoLink: "https://github.com/dmarklouil21/cares_platform.git",
      color: "text-indigo-400",
      image: "/cares-platform.png"
    },
    {
      title: "Agri Connect",
      description: "An agricultural marketplace connecting local farmers directly to consumers. Features real-time inventory and accessible UI.",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "https://agri-connect-ui.vercel.app/",
      repoLink: "https://github.com/dmarklouil21/AgriConnect.git",
      color: "text-emerald-400",
      image: "/agri-connect.png"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full Preview" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">Dev<span className="text-indigo-500">.Portfolio</span></span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-indigo-400 transition">Work</a>
            <a href="#stack" className="hover:text-indigo-400 transition">Stack</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6 border border-indigo-500/20">
            🟢 Open for OJT Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building digital products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">purpose and precision.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl">
            I'm a BSIT student specializing in Full-Stack Development. I bridge the gap between complex backends (Django/Node) and interactive frontends (React).
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
              View My Work
            </a>
            <a href="#contact" className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg font-medium transition">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid Tech Stack */}
      <section id="stack" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition duration-300">
              <tech.icon className={`w-10 h-10 mb-4 ${tech.colorClass}`} />
              <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
              <p className="text-slate-400 mb-4">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-md text-xs text-indigo-300/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
              
              {/* --- IMAGE SECTION (Clickable) --- */}
              <div 
                className="h-64 overflow-hidden relative cursor-zoom-in"
                onClick={() => setSelectedImage(project.image)}
              >
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                 />
                 
                 {/* Overlay + Zoom Icon on Hover */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-full text-white shadow-lg">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                 </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs font-mono ${project.color}`}>#{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 text-white font-medium hover:${project.color} transition`}>
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 font-medium hover:text-white transition">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Ready to make an impact.</h2>
        <p className="text-slate-400 mb-8">Currently looking for OJT opportunities to apply my skills in a real-world setting.</p>
        <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition">
          <Mail className="w-4 h-4" /> Send me an email
        </a>
      </footer>

    </div>
  );
};

export default Portfolio;