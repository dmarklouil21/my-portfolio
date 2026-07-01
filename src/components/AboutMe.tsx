import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Avatar / Initials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-indigo-500/20">
              MD
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Philippines
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> BSIT Graduate
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm Mark Louil Diacamos, a Full-Stack Developer with a strong
                foundation in both frontend and backend technologies. I
                specialize in building end-to-end web applications using{' '}
                <span className="text-indigo-400">React</span>,{' '}
                <span className="text-cyan-400">Django</span>, and{' '}
                <span className="text-emerald-400">Node.js</span>.
              </p>
              <p>
                I thrive on solving complex problems and turning ideas into
                polished, production-ready products. My approach combines clean
                code, thoughtful architecture, and a keen eye for user
                experience.
              </p>
              <p>
                Currently, I'm seeking full-stack developer roles where I can
                contribute to meaningful projects and grow alongside a talented
                team.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
