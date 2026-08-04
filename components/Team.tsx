import React from 'react';
import { useTranslation } from './TranslationContext';
import { Dna, Mountain, Cpu, ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="equipo" className="py-20 bg-[#FAF9F5] border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-tropico-700 bg-tropico-100 px-3 py-1 rounded-full border border-tropico-200">
          {language === 'es' ? 'Equipo Interdisciplinario' : 'Interdisciplinary Team'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
          {t('team.title')}
        </h2>
        
        <p className="text-base text-slate-600 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('team.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center group hover:border-tropico-400 transition-colors">
                <div className="w-14 h-14 bg-tropico-100 text-tropico-800 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Dna className="w-7 h-7" />
                </div>
                <h3 className="font-sans font-bold text-slate-900 mb-2">{language === 'es' ? "Biología & Entomología" : "Biology & Entomology"}</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">{language === 'es' ? "Biólogos y taxónomos enfocados en la diversidad taxonómica y monitoreo ecológico." : "Biologists and taxonomists focused on taxonomic diversity and ecological monitoring."}</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center group hover:border-tropico-400 transition-colors">
                <div className="w-14 h-14 bg-tierra-100 text-tierra-800 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Mountain className="w-7 h-7" />
                </div>
                <h3 className="font-sans font-bold text-slate-900 mb-2">{language === 'es' ? "Geología & Paleontología" : "Geology & Paleontology"}</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">{language === 'es' ? "Investigadores analizando herramientas moleculares dentro de un contexto histórico del Istmo." : "Researchers applying molecular tools within an Isthmian historical context."}</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center group hover:border-tropico-400 transition-colors">
                <div className="w-14 h-14 bg-tropico-100 text-tropico-800 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="font-sans font-bold text-slate-900 mb-2">{language === 'es' ? "Ciencia de Datos" : "Data Science & Bioinfo"}</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">{language === 'es' ? "Analistas de datos y bioinformáticos desarrollando pipelines genómicos y filogenómicos escalables." : "Data analysts and bioinformaticians building scalable genomic and phylogenomic pipelines."}</p>
            </div>
        </div>

        {/* View full team section indicator & link */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 mb-6 font-sans leading-relaxed">
            {language === 'es' 
              ? "Nuestro equipo se compone de más de 25 investigadores de pregrado, maestría y doctorado especializados en genómica evolutiva, paleontología, biodiversidad costera y educación científica."
              : "Our research group consists of over 25 undergraduate, master's, and doctoral researchers specializing in evolutionary genomics, paleontology, coastal biodiversity, and science education."}
          </p>
          <button
            onClick={() => {
              window.location.hash = '#equipo-completo';
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-tropico-900 hover:bg-tropico-950 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            id="view-full-team-btn"
          >
            <span>{t('team.btn')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
