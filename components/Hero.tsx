import React from 'react';
import { ArrowRight, Dna, Leaf, MapPin } from 'lucide-react';
import { useTranslation } from './TranslationContext';

const Hero: React.FC = () => {
  const { t, language } = useTranslation();

  const goToResearch = () => {
    window.location.hash = '#investigacion';
  };

  return (
    <div id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F5]">
      {/* Sober Tropical Architectural Accents - Subtle leaf vein pattern background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#325039_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-tropico-200/40 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tierra-100/60 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Subtle Location Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tropico-100/80 border border-tropico-300/60 text-tropico-800 text-xs font-mono font-medium tracking-widest uppercase mb-8">
          <MapPin className="w-3.5 h-3.5 text-tropico-600" />
          Universidad del Norte &bull; Barranquilla, Colombia
        </div>

        {/* Sans-serif Sober Tropical Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold text-slate-900 mb-8 leading-[1.05] tracking-tight">
          {t('hero.title')}<br/>
          <span className="text-tropico-600 font-bold block mt-1">{t('hero.title.italic')}</span>
          <span className="text-slate-800 font-extrabold">{t('hero.title.suffix')}</span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button 
            onClick={goToResearch}
            className="inline-flex items-center gap-2.5 bg-tropico-800 text-white px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-md hover:bg-tropico-900 transition-all duration-200 group"
          >
            {t('hero.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => window.location.hash = '#identidad'}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl text-sm font-semibold hover:border-tropico-400 hover:text-tropico-800 transition-all duration-200"
          >
            {language === 'es' ? 'Conocer el Laboratorio' : 'About the Lab'}
          </button>
        </div>

        {/* Sober Tropical Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {/* Card 1: Caribbean Biodiversity */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Mangrove_roots.jpg" 
                alt={language === 'es' ? "Ecosistemas del Caribe" : "Caribbean ecosystems"}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-semibold text-tropico-900 border border-slate-200/60">
                <Dna className="w-3.5 h-3.5 inline-block mr-1.5 text-tropico-600" />
                {language === 'es' ? 'Genómica de Poblaciones' : 'Population Genomics'}
              </div>
            </div>
            <div className="p-6 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-tropico-700 text-xs font-mono font-semibold uppercase tracking-widest block mb-1">
                  {language === 'es' ? 'Biodiversidad del Caribe' : 'Caribbean Biodiversity'}
                </span>
                <h3 className="text-lg font-sans font-bold text-slate-900 mb-2">
                  {language === 'es' ? 'Evolución & Variación Genética' : 'Evolution & Genetic Variation'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {language === 'es' 
                    ? 'Estudio de la diversidad biológica y la estructura poblacional de especies representativas de la región Caribe.'
                    : 'Study of biological diversity and population structure of key species in the Caribbean region.'}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Dry Forest Ecosystems */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Bosque_seco_tropical.jpg" 
                alt={language === 'es' ? "Bosque seco tropical" : "Tropical dry forest"}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-semibold text-tierra-900 border border-slate-200/60">
                <Leaf className="w-3.5 h-3.5 inline-block mr-1.5 text-tierra-700" />
                {language === 'es' ? 'Metagenómica eDNA' : 'eDNA Metagenomics'}
              </div>
            </div>
            <div className="p-6 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-tierra-700 text-xs font-mono font-semibold uppercase tracking-widest block mb-1">
                  {language === 'es' ? 'Bosque Seco Tropical' : 'Tropical Dry Forest'}
                </span>
                <h3 className="text-lg font-sans font-bold text-slate-900 mb-2">
                  {language === 'es' ? 'Ecología & Genómica Ambiental' : 'Ecology & Environmental Genomics'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {language === 'es' 
                    ? 'Investigación ecológica y herramientas moleculares para el monitoreo y conservación del bosque seco neotropical.'
                    : 'Ecological research and molecular tools for biodiversity monitoring and conservation of neotropical dry forests.'}
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


