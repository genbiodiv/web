import React from 'react';
import { Microscope, Tent, Binary } from 'lucide-react';
import { useTranslation } from './TranslationContext';

const Capabilities: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="capacidades" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cap.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('cap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Field */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <Tent className="w-8 h-8 text-emerald-400" />
                    <h3 className="text-xl font-bold">{language === 'es' ? "Campo y Colecciones" : "Field and Collections"}</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Monitoreo de biodiversidad en gradientes ambientales." : "Biodiversity monitoring in environmental gradients."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Identificación taxonómica y morfológica de insectos." : "Taxonomic and morphological identification of insects."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Colección de tejidos y ADNs." : "Tissue and DNA collection."}</span>
                    </li>
                </ul>
            </div>

            {/* Lab */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <Microscope className="w-8 h-8 text-emerald-400" />
                    <h3 className="text-xl font-bold">{language === 'es' ? "Laboratorio (Genómica)" : "Laboratory (Genomics)"}</h3>
                </div>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Monitoreo molecular mediante ADN Ambiental (eDNA)." : "Molecular monitoring via Environmental DNA (eDNA)."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Extracción de ADN/ARN de alta complejidad." : "High-complexity DNA/RNA extraction."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Preparación de librerías para secuenciación (NGS)." : "Library preparation for sequencing (NGS)."}</span>
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
                        <span>{language === 'es' ? "Ensamblaje y anotación de genomas y transcriptomas." : "Assembly and annotation of genomes and transcriptomes."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Desarrollo de pipelines de análisis a medida." : "Development of custom analysis pipelines."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Datación molecular y filogenómica." : "Molecular dating and phylogenomics."}</span>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Capabilities;
