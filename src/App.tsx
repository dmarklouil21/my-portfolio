import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Lightbox } from './components/Lightbox';
import { Footer } from './components/Footer';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects onImageClick={setSelectedImage} />
      <Footer />
    </div>
  );
};

export default Portfolio;