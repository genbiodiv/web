import React from 'react';
import { useTranslation } from './TranslationContext';

const Team: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="equipo" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">{t('team.title')}</h2>
        
        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            {t('team.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">🧬</div>
                <h3 className="font-bold text-slate-900 mb-2">{language === 'es' ? "Biología" : "Biology"}</h3>
                <p className="text-sm text-slate-500">{language === 'es' ? "Biólogos y Entomólogos enfocados en la diversidad taxonómica." : "Biologists and Entomologists focused on taxonomic diversity."}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">🗿</div>
                <h3 className="font-bold text-slate-900 mb-2">{language === 'es' ? "Geología" : "Geology"}</h3>
                <p className="text-sm text-slate-500">{language === 'es' ? "Estudiantes con formación en herramientas moleculares y contexto histórico." : "Students with training in molecular tools and historical context."}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">💻</div>
                <h3 className="font-bold text-slate-900 mb-2">{language === 'es' ? "Data Science" : "Data Science"}</h3>
                <p className="text-sm text-slate-500">{language === 'es' ? "Analistas de Datos y Bioinformáticos desarrollando pipelines escalables." : "Data Analysts and Bioinformaticians developing scalable pipelines."}</p>
            </div>
        </div>

        {/* View full team section indicator & link */}
        <div className="mt-16 pt-10 border-t border-slate-200 max-w-2xl mx-auto">
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            {language === 'es' 
              ? "Nuestro equipo de investigación se compone de más de 25 investigadores de pregrado, maestría y doctorado especializados en genómica evolutiva, paleontología, biodiversidad costera y educación científica."
              : "Our research group consists of over 25 undergraduate, master's, and doctoral researchers specializing in evolutionary genomics, paleontology, coastal biodiversity, and science education."}
          </p>
          <button
            onClick={() => {
              window.location.hash = '#equipo-completo';
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white font-sans text-sm font-medium rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            id="view-full-team-btn"
          >
            <span>{t('team.btn')}</span>
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
