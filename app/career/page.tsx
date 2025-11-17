'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import { useLanguage } from '../../contexts/language-context';

export default function CareerPage() {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generar partículas suaves
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    // Asegurar que el fondo oscuro cubra toda la página
    document.body.style.backgroundColor = '#36454F';
    const mainElement = document.querySelector('main');
    if (mainElement) {
      (mainElement as HTMLElement).style.backgroundColor = '#36454F';
    }
    return () => {
      document.body.style.backgroundColor = 'transparent';
      if (mainElement) {
        (mainElement as HTMLElement).style.backgroundColor = '';
      }
    };
  }, []);

  return (
    <div className="text-white relative flex flex-col w-full" style={{ backgroundColor: '#36454F', marginTop: '-64px', paddingTop: '64px', minHeight: '100vh', width: '100%' }}>
      {/* Fondo animado sutil */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundColor: '#36454F' }}>
        {/* Partículas suaves flotantes */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-25 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Líneas de flujo sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-flow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Content Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white font-sans mx-auto">
              Careers
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-white font-sans text-base sm:text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
                Help build the world's first Integrity Economy.
              </h2>
              <p>
                Zentrais is a mission-driven company rebuilding how the internet works. We're forming a global team of high-ownership, high-accountability builders who want their work to matter. If you operate like a founder, think critically, and thrive without hand-holding, you'll fit here.
              </p>
            </div>

            {/* Why Zentrais Section */}
            <div className="mt-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
                Why Zentrais
              </h2>
              <p className="mb-4">
                Today's platforms profit from noise and manipulation. We're creating the opposite: a Human + AI ecosystem rooted in truth, trust, and transparency—powered by three engines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Perspective</strong> — Verified insights without distortion</li>
                <li><strong>Dialog</strong> — Accountable conversations supported by identity</li>
                <li><strong>Exchange</strong> — Real value earned through integrity, not attention</li>
              </ul>
              <p className="mt-4">
                Every role contributes to this architecture.
              </p>
            </div>

            {/* Who Thrives Here Section */}
            <div className="mt-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
                Who Thrives Here
              </h2>
              <p className="mb-4">People who:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Deliver outcomes, not activity</li>
                <li>Think clearly and challenge assumptions</li>
                <li>Move fast with respect and ownership</li>
                <li>Collaborate across disciplines</li>
                <li>Care about building systems that strengthen humanity</li>
              </ul>
              <p className="mt-4">
                If you need rigid processes or daily supervision, this won't be the right fit.
              </p>
            </div>

            {/* Roles We're Strengthening Section */}
            <div className="mt-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
                Roles We're Strengthening
              </h2>
              <p className="mb-4">
                We hire for ability and mindset, not titles. Priority areas include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI / Machine Learning</li>
                <li>Backend & Infrastructure</li>
                <li>Frontend / UI & UX</li>
                <li>Security, Identity, and Compliance</li>
                <li>Content, Narrative, and Communications</li>
                <li>Partnerships, Growth, and Operations</li>
              </ul>
              <p className="mt-4">
                If you know you can elevate the Integrity Economy, we want to hear from you.
              </p>
            </div>

            {/* How to Apply Section */}
            <div className="mt-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
                How to Apply
              </h2>
              <p className="mb-4">Send us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Your portfolio or relevant work</li>
                <li>One problem you solved that shows how you think</li>
                <li>What you want to build inside Zentrais</li>
              </ul>
              <p className="mb-2">
                <strong>Email:</strong> <a href="mailto:careers@zentrais.com" className="text-indigo-400 hover:text-indigo-300 underline">careers@zentrais.com</a>
              </p>
              <p className="mb-6">
                <strong>Subject:</strong> "Building With Integrity"
              </p>
              <p className="font-bold text-xl mt-8">
                Join the first 60 pioneers shaping a new standard for digital life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto w-full flex-shrink-0" style={{ backgroundColor: '#36454F' }}>
        <Footer />
      </div>
    </div>
  );
}

