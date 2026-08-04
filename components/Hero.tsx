import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from './TranslationContext';

const Hero: React.FC = () => {
  const { t, language } = useTranslation();

  const goToResearch = () => {
    window.location.hash = '#investigacion';
  };

  return (
    <div id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-slate-50">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-emerald-700 font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-6">
          Universidad del Norte &bull; Barranquilla
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-medium text-slate-900 mb-8 leading-[0.95]">
          {t('hero.title')}<br/>
          <span className="text-emerald-600 italic font-serif">{t('hero.title.italic')}</span><br/>
          {t('hero.title.suffix')}
        </h1>
        <p className="font-serif text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <button 
          onClick={goToResearch}
          className="inline-flex items-center gap-3 text-slate-900 border-b border-slate-900 pb-1 text-sm font-medium transition-colors hover:text-emerald-700 hover:border-emerald-700 mb-12"
        >
          {t('hero.cta')}
          <ArrowDown className="w-4 h-4 text-emerald-600" />
        </button>

        {/* Integrated Ecosystem Showcase - Crisp, Bright & Fully Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {/* Card 1: Caribbean Biodiversity */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Mangrove_roots.jpg" 
                alt={language === 'es' ? "Ecosistemas del Caribe" : "Caribbean ecosystems"}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-emerald-700 text-xs font-mono font-medium uppercase tracking-widest block mb-1">
                  {language === 'es' ? 'Biodiversidad del Caribe' : 'Caribbean Biodiversity'}
                </span>
                <h3 className="text-base font-serif font-medium text-slate-900 mb-1">
                  {language === 'es' ? 'Evolución & Genómica de Poblaciones' : 'Evolution & Population Genomics'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'es' 
                    ? 'Estudio de la diversidad biológica y la historia evolutiva de las especies nativas de la región.'
                    : 'Study of biological diversity and evolutionary history of native regional species.'}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Dry Forest Ecosystems */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Bosque_seco_tropical.jpg" 
                alt={language === 'es' ? "Bosque seco tropical" : "Tropical dry forest"}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-emerald-700 text-xs font-mono font-medium uppercase tracking-widest block mb-1">
                  {language === 'es' ? 'Bosque Seco Tropical' : 'Tropical Dry Forest'}
                </span>
                <h3 className="text-base font-serif font-medium text-slate-900 mb-1">
                  {language === 'es' ? 'Ecología & Genómica Ambiental (eDNA)' : 'Ecology & Environmental Genomics (eDNA)'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'es' 
                    ? 'Investigación ecológica y análisis genómicos aplicados a la conservación del bosque seco.'
                    : 'Ecological research and genomic analysis applied to dry forest conservation.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


