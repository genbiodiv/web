import React from 'react';
import { Microscope, Tent, Binary } from 'lucide-react';

const Capabilities: React.FC = () => {
  return (
    <section id="capacidades" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Capacidades Técnicas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Infraestructura y experiencia técnica desde la recolección de muestras hasta el análisis bioinformático avanzado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Field */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <Tent className="w-8 h-8 text-emerald-400" />
                    <h3 className="text-xl font-bold">Campo y Colecciones</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Monitoreo de biodiversidad en gradientes ambientales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Identificación taxonómica y morfológica de insectos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Colección de tejidos y ADNs.</span>
                    </li>
                </ul>
            </div>

            {/* Lab */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <Microscope className="w-8 h-8 text-emerald-400" />
                    <h3 className="text-xl font-bold">Laboratorio (Genómica)</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Monitoreo molecular mediante ADN Ambiental (eDNA).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Extracción de ADN/ARN de alta complejidad.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Preparación de librerías para secuenciación (NGS).</span>
                    </li>
                </ul>
            </div>

            {/* Bioinfo */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <Binary className="w-8 h-8 text-emerald-400" />
                    <h3 className="text-xl font-bold">Bioinformática</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Ensamblaje y anotación de genomas y transcriptomas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Desarrollo de pipelines de análisis a medida.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Datación molecular y filogenómica.</span>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Capabilities;