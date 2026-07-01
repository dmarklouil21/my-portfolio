import { techStack } from '../data/portfolio-data';
import { RevealOnScroll } from './RevealOnScroll';

export function TechStack() {
  return (
    <section id="stack" className="py-20 px-6 max-w-6xl mx-auto">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-12 text-white">Technical Arsenal</h2>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <RevealOnScroll key={index} delay={index * 100}>
            <div className="h-full p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition duration-300 group">
              <tech.icon
                className="w-10 h-10 mb-4 transition-colors duration-300"
                style={{ color: tech.accentColor }}
              />
              <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
              <p className="text-slate-400 mb-4">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 rounded-md text-xs text-indigo-300/80 group-hover:bg-slate-800/80 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
