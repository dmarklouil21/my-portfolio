import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, FileDown } from 'lucide-react';
import { PERSONAL } from '../data/portfolio-data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Work' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-slate-950/80 border-b border-slate-800 shadow-lg shadow-slate-950/50'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter">
          Mark<span className="text-indigo-500">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-5 bg-slate-800" />
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-white transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-lg transition"
          >
            <FileDown className="w-3.5 h-3.5" /> Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-slate-950/98 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-semibold text-slate-300 hover:text-indigo-400 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            <FileDown className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
