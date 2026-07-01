import { ExternalLink, Github, ZoomIn } from 'lucide-react';
import type { Project } from '../data/portfolio-data';

interface Props {
  project: Project;
  onImageClick: (image: string) => void;
}

export function ProjectCard({ project, onImageClick }: Props) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
      {/* Image Section */}
      <div
        className="h-64 overflow-hidden relative cursor-zoom-in"
        onClick={() => onImageClick(project.image)}
        role="button"
        tabIndex={0}
        aria-label={`View full preview of ${project.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onImageClick(project.image);
          }
        }}
      >
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-full text-white shadow-lg">
            <ZoomIn className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800"
              style={{ color: project.accentColor }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: project.accentColor }}
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </a>
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 font-medium hover:text-white transition"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
