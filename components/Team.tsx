import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">El Equipo</h2>
        
        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            Somos un grupo colaborativo que trasciende las barreras departamentales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl">🧬</div>
                <h3 className="font-bold text-slate-900 mb-2">Biología</h3>
                <p className="text-sm text-slate-500">Biólogos y Entomólogos enfocados en la diversidad taxonómica.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl">🗿</div>
                <h3 className="font-bold text-slate-900 mb-2">Geología</h3>
                <p className="text-sm text-slate-500">Estudiantes con formación en herramientas moleculares y contexto histórico.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl">💻</div>
                <h3 className="font-bold text-slate-900 mb-2">Data Science</h3>
                <p className="text-sm text-slate-500">Analistas de Datos y Bioinformáticos desarrollando pipelines escalables.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;