import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToResearch = () => {
    const element = document.querySelector('#investigacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h2 className="text-emerald-700 font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-6">
          Universidad del Norte &bull; Barranquilla
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-medium text-slate-900 mb-8 leading-[0.9]">
          Genómica y<br/>
          <span className="italic text-emerald-900">Biodiversidad</span><br/>
          del Caribe
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Desde la evolución de nuevos genes hasta la ecología de los bosques secos, buscamos respuestas integrales.
        </p>
        
        <button 
          onClick={scrollToResearch}
          className="group inline-flex items-center gap-3 text-slate-900 border-b border-slate-900 pb-1 text-sm font-medium transition-all hover:text-emerald-700 hover:border-emerald-700"
        >
          Explorar Líneas de Investigación
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;