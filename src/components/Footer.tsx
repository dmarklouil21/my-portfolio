import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import { PERSONAL } from '../data/portfolio-data';
import { RevealOnScroll } from './RevealOnScroll';

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-900">
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's build something great together.
          </h2>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            I'm actively seeking full-stack developer roles where I can deliver
            impact from day one. Let's connect and explore how I can contribute
            to your team.
          </p>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              aria-label="Email"
              className="text-slate-500 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-slate-900 text-center text-sm text-slate-600">
        <p className="inline-flex items-center gap-1">
          © {new Date().getFullYear()} {PERSONAL.name}. Built with
          <Heart className="w-3 h-3 text-red-500" /> and React.
        </p>
      </div>
    </footer>
  );
}
