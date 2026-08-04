import React from 'react';
import { useTranslation } from './TranslationContext';
import { Compass, Dna, Trees } from 'lucide-react';

const Identity: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="identidad" className="py-20 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-tropico-700 bg-tropico-100 px-3 py-1 rounded-full border border-tropico-200">
            {language === 'es' ? 'Identidad & Propósito' : 'Identity & Mission'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
            {t('nav.brand')}
          </h2>
          <div className="w-16 h-1 bg-tropico-600 mx-auto rounded-full" />
        </div>

        {/* Feature Grid with Sober Tropical Accent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-tropico-100 text-tropico-800 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-3">
              {language === 'es' ? 'Ubicación Estratégica' : 'Strategic Location'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'Ubicados en Barranquilla, puerta de entrada al Caribe colombiano y hub de biodiversidad tropical.'
                : 'Located in Barranquilla, gateway to the Colombian Caribbean and tropical biodiversity hub.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-tropico-100 text-tropico-800 flex items-center justify-center mb-6">
              <Dna className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-3">
              {language === 'es' ? 'Genómica de Vanguardia' : 'Cutting-edge Genomics'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'Aplicamos secueciación masiva y ecología molecular para descifrar la historia de las especies nativas.'
                : 'Applying next-generation sequencing and molecular ecology to decipher native species history.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-tierra-100 text-tierra-800 flex items-center justify-center mb-6">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-3">
              {language === 'es' ? 'Bosque Seco & Caribe' : 'Dry Forest & Caribbean'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'Investigación focalizada en ecosistemas neotropicales clave para la conservación y sostenibilidad.'
                : 'Focused research on key neotropical ecosystems for conservation and sustainability.'}
            </p>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="bg-gradient-to-br from-tropico-900 to-tropico-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-tropico-800/50">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed">
              {t('identity.p1')}
            </p>
            <p className="text-base sm:text-lg text-emerald-300 font-sans font-semibold leading-relaxed">
              {t('identity.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
