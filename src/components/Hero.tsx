import { FileDown, ArrowDown } from 'lucide-react';
import { PERSONAL } from '../data/portfolio-data';
import { RevealOnScroll } from './RevealOnScroll';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-3xl relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/20">
            🟢 Open for Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
            Building digital products with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              purpose and precision.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Full-Stack Developer who builds production-ready web apps with React,
            Django, and Node.js. Passionate about clean architecture, intuitive
            interfaces, and delivering real impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition inline-flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition inline-flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
