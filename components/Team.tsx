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
      </div>
    </section>
  );
};

export default Team;
