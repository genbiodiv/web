import React from 'react';
import { Microscope, Tent, Binary } from 'lucide-react';
import { useTranslation } from './TranslationContext';

const Capabilities: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="capacidades" className="py-20 bg-tropico-950 text-white relative overflow-hidden">
      {/* Sober Tropical Architectural Accents */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#9cbba2_1px,transparent_1px)] [background-size:28px_28px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-tropico-300 bg-tropico-900 px-3.5 py-1.5 rounded-full border border-tropico-700/60">
            {language === 'es' ? 'Infraestructura & Técnicas' : 'Infrastructure & Methods'}
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-white mt-4 mb-4 tracking-tight">
            {t('cap.title')}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-sans">
            {t('cap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Field */}
            <div className="bg-tropico-900/60 p-8 rounded-2xl border border-tropico-800/80 backdrop-blur-md hover:border-tropico-600 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-tropico-800/80 rounded-xl text-tropico-300 border border-tropico-700/50">
                      <Tent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-white">{language === 'es' ? "Campo y Colecciones" : "Field and Collections"}</h3>
                </div>
                <ul className="space-y-4 text-slate-300 text-sm font-sans">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Monitoreo de biodiversidad en gradientes ambientales." : "Biodiversity monitoring in environmental gradients."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Identificación taxonómica y morfológica de insectos." : "Taxonomic and morphological identification of insects."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Colección de tejidos y ADNs." : "Tissue and DNA collection."}</span>
                    </li>
                </ul>
            </div>

            {/* Lab */}
            <div className="bg-tropico-900/60 p-8 rounded-2xl border border-tropico-800/80 backdrop-blur-md hover:border-tropico-600 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-tropico-800/80 rounded-xl text-tropico-300 border border-tropico-700/50">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-white">{language === 'es' ? "Laboratorio (Genómica)" : "Laboratory (Genomics)"}</h3>
                </div>
                <ul className="space-y-4 text-slate-300 text-sm font-sans">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Monitoreo molecular mediante ADN Ambiental (eDNA)." : "Molecular monitoring via Environmental DNA (eDNA)."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Extracción de ADN/ARN de alta complejidad." : "High-complexity DNA/RNA extraction."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Preparación de librerías para secuenciación (NGS)." : "Library preparation for sequencing (NGS)."}</span>
                    </li>
                </ul>
            </div>

            {/* Bioinfo */}
            <div className="bg-tropico-900/60 p-8 rounded-2xl border border-tropico-800/80 backdrop-blur-md hover:border-tropico-600 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-tropico-800/80 rounded-xl text-tropico-300 border border-tropico-700/50">
                      <Binary className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-white">Bioinformática</h3>
                </div>
                <ul className="space-y-4 text-slate-300 text-sm font-sans">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Ensamblaje y anotación de genomas y transcriptomas." : "Assembly and annotation of genomes and transcriptomes."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{language === 'es' ? "Desarrollo de pipelines de análisis a medida." : "Development of custom analysis pipelines."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-tropico-400 rounded-full mt-2 flex-shrink-0"></span>
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
