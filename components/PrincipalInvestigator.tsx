import React from 'react';

const PrincipalInvestigator: React.FC = () => {
  return (
    <section className="py-32 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-xs font-bold text-emerald-700 uppercase tracking-[0.3em] mb-6">Investigador Principal</h2>
        
        <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">
          Dr. rer. Nat. Rafik Neme
        </h3>
        
        <p className="text-xl md:text-2xl text-slate-600 font-light italic mb-12 leading-relaxed">
          "El genoma es un archivo histórico. Mi trabajo conecta la teoría evolutiva molecular con la conservación práctica del Caribe."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-slate-50 p-8 md:p-12 rounded-2xl">
            <div>
                <h4 className="font-serif text-xl text-slate-900 mb-4 border-b border-emerald-200 pb-2 inline-block">Áreas de Énfasis</h4>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex flex-col">
                        <span className="font-bold text-slate-900">Origen de Novedad Biológica</span>
                        <span className="text-sm text-slate-500">Evolución de novo y genomic dark matter.</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold text-slate-900">Genómica Computacional</span>
                        <span className="text-sm text-slate-500">Algoritmos para datos masivos y complejos.</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold text-slate-900">Conservación Molecular</span>
                        <span className="text-sm text-slate-500">eDNA aplicado a ecosistemas neotropicales.</span>
                    </li>
                </ul>
            </div>
            
            <div className="flex flex-col justify-between">
                <div>
                    <h4 className="font-serif text-xl text-slate-900 mb-4 border-b border-emerald-200 pb-2 inline-block">Redes y Asociaciones</h4>
                     <ul className="space-y-3 text-slate-700">
                        <li>Max Planck Institute for Evolutionary Biology</li>
                        <li>Pew Charitable Trusts</li>
                        <li>Universidad del Norte</li>
                    </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Contacto Directo</p>
                    <a href="mailto:rneme@uninorte.edu.co" className="text-emerald-700 hover:text-emerald-900 text-lg font-medium transition-colors">
                        rneme@uninorte.edu.co
                    </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PrincipalInvestigator;