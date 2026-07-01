import { projects } from '../data/portfolio-data';
import { ProjectCard } from './ProjectCard';
import { RevealOnScroll } from './RevealOnScroll';

interface Props {
  onImageClick: (image: string) => void;
}

export function Projects({ onImageClick }: Props) {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <RevealOnScroll key={index} delay={index * 150}>
            <ProjectCard project={project} onImageClick={onImageClick} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
