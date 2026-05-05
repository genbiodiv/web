import React from 'react';
import { Dna, Bug, Leaf, Users } from 'lucide-react';
import { useTranslation } from './TranslationContext';

const ResearchLines: React.FC = () => {
  const { t, language } = useTranslation();

  const pillars = [
    {
      title: language === 'es' ? "Evolución Molecular y Genómica" : "Molecular Evolution and Genomics",
      icon: <Dna className="w-6 h-6" />,
      description: language === 'es' ? "Investigamos las bases genómicas de la adaptación y el origen de la novedad biológica." : "We investigate the genomic basis of adaptation and the origin of biological novelty.",
      projects: [
        { 
          title: language === 'es' ? "Cómo Surgen Nuevos Genes" : "How New Genes Arise", 
          desc: language === 'es' ? "Investigación teórica sobre cómo funciones secundarias de genes preexistentes pueden evolucionar hacia nuevos genes funcionales." : "Theoretical research on how secondary functions of pre-existing genes can evolve into new functional genes." 
        },
        { 
          title: language === 'es' ? "Divergencia entre Mapaches y Kinkajús" : "Divergence between Raccoons and Kinkajous", 
          desc: language === 'es' ? "Estimación molecular de tiempos de separación evolutiva para entender la formación del Istmo de Panamá." : "Molecular estimation of evolutionary separation times to understand the formation of the Isthmus of Panama." 
        },
        { 
          title: language === 'es' ? "Ancestría Genética de Barranquilleros" : "Genetic Ancestry of Barranquilleros", 
          desc: language === 'es' ? "Análisis de mezcla genética (africana, europea, indígena) en 200 personas usando estrategias de pooling." : "Genetic mixture analysis (African, European, Indigenous) in 200 people using pooling strategies." 
        },
        { 
          title: language === 'es' ? "Elasticidad Genómica" : "Genomic Elasticity", 
          desc: language === 'es' ? "Concepto teórico y simulación sobre la capacidad de los genomas para absorber y recuperarse de perturbaciones ambientales." : "Theoretical concept and simulation on the capacity of genomes to absorb and recover from environmental disturbances." 
        },
      ]
    },
    {
      title: language === 'es' ? "Diversidad de Insectos" : "Insect Diversity",
      icon: <Bug className="w-6 h-6" />,
      description: language === 'es' ? "Documentación y análisis de la entomofauna del Caribe para conservación y sostenibilidad." : "Documentation and analysis of Caribbean entomofauna for conservation and sustainability.",
      projects: [
        { 
          title: language === 'es' ? "Hormigas del Bosque Seco" : "Dry Forest Ants", 
          desc: language === 'es' ? "Catálogo de diversidad taxonómica en el Atlántico, incluyendo 19 nuevos registros." : "Catalogue of taxonomic diversity in Atlántico, including 19 new records." 
        },
        { 
          title: language === 'es' ? "Escarabajos Coprófagos" : "Dung Beetles", 
          desc: language === 'es' ? "Investigación sobre la distribución y función de reciclaje de nutrientes en bosques secos." : "Research on the distribution and nutrient recycling function in dry forests." 
        },
        { 
          title: language === 'es' ? "Ecología de Dípteros" : "Diptera Ecology", 
          desc: language === 'es' ? "Genómica de poblaciones de moscas con potencial alimentario y protocolos de cría." : "Population genomics of flies with food potential and breeding protocols." 
        },
        { 
          title: language === 'es' ? "Morfometría Geométrica" : "Geometric Morphometrics", 
          desc: language === 'es' ? "Uso de hormigas como sensor de estrés ambiental mediante análisis de forma." : "Usage of ants as environmental stress sensors through shape analysis." 
        },
        { 
          title: language === 'es' ? "ADN vs Morfología" : "DNA vs Morphology", 
          desc: language === 'es' ? "Validación de metabarcoding frente a identificación morfológica tradicional." : "Validation of metabarcoding against traditional morphological identification." 
        },
      ]
    },
    {
      title: language === 'es' ? "Ecosistemas del Caribe" : "Caribbean Ecosystems",
      icon: <Leaf className="w-6 h-6" />,
      description: language === 'es' ? "Uso de ADN ambiental (eDNA) y otras herramientas para monitorear la salud de nuestros ecosistemas." : "Use of environmental DNA (eDNA) and other tools to monitor the health of our ecosystems.",
      projects: [
        { 
          title: language === 'es' ? "eDNA en Bosques Secos" : "eDNA in Dry Forests", 
          desc: language === 'es' ? "Metodología para monitorear biodiversidad de plantas, hongos e insectos en remanentes de bosque." : "Methodology to monitor biodiversity of plants, fungi, and insects in forest remnants." 
        },
        { 
          title: language === 'es' ? "Genética Oculta del Bosque" : "Hidden Forest Genetics", 
          desc: language === 'es' ? "Secuenciación de ADN de hojas para revelar diversidad microbiana simbiótica." : "DNA sequencing from leaves to reveal symbiotic microbial diversity." 
        },
        { 
          title: language === 'es' ? "Biodiversidad del Río Magdalena" : "Magdalena River Biodiversity", 
          desc: language === 'es' ? "Caracterización de peces y vertebrados a lo largo del gradiente fluvial mediante metabarcoding." : "Characterization of fish and vertebrates along the fluvial gradient through metabarcoding." 
        },
        { 
          title: language === 'es' ? "Biodiversidad Urbana" : "Urban Biodiversity", 
          desc: language === 'es' ? "Mapeo de biodiversidad en entornos de ciudad vía ADN ambiental." : "Biodiversity mapping in city environments via environmental DNA." 
        },
        { 
          title: language === 'es' ? "Corales Resilientes" : "Resilient Corals", 
          desc: language === 'es' ? "Estudio de comunidades coralinas en zonas de alta sedimentación." : "Study of coral communities in high-sedimentation areas." 
        },
      ]
    },
    {
      title: language === 'es' ? "Divulgación y Ciencia Participativa" : "Outreach and Citizen Science",
      icon: <Users className="w-6 h-6" />,
      description: language === 'es' ? "Apropiación social del conocimiento para conectar la ciencia con la comunidad." : "Social appropriation of knowledge to connect science with the community.",
      projects: [
        { 
          title: language === 'es' ? "Guías Ilustradas" : "Illustrated Guides", 
          desc: language === 'es' ? "Libros sobre escarabajos y hormigas del Caribe para investigadores y público general." : "Books on Caribbean beetles and ants for researchers and the general public." 
        },
        { 
          title: language === 'es' ? "La Rana Coquí en Barranquilla" : "The Coqui Frog in Barranquilla", 
          desc: language === 'es' ? "Ciencia ciudadana para rastrear la rana invasora Eleutherodactylus johnstonei mediante audio." : "Citizen science to track the invasive frog Eleutherodactylus johnstonei through audio." 
        },
        { 
          title: language === 'es' ? "Caminos Evolutivos" : "Evolutionary Paths", 
          desc: language === 'es' ? "Instalación interactiva en Uninorte explorando principios de evolución biológica." : "Interactive installation at Uninorte exploring principles of biological evolution." 
        },
      ]
    }
  ];

  return (
    <section id="investigacion" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">{t('research.title')}</h2>
          <p className="text-slate-600 max-w-2xl text-lg font-light">
            {t('research.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-emerald-700 bg-emerald-50 p-3 rounded-full">
                    {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif text-slate-900">{pillar.title}</h3>
              </div>
              
              <p className="text-slate-500 mb-8 italic border-l-2 border-emerald-100 pl-4">
                {pillar.description}
              </p>

              <div className="space-y-6">
                {pillar.projects.map((project, pIdx) => (
                  <div key={pIdx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">{project.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchLines;
