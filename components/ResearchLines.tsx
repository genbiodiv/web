import React from 'react';
import { Dna, Bug, Leaf, Users } from 'lucide-react';

const ResearchLines: React.FC = () => {
  const pillars = [
    {
      title: "Evolución Molecular y Genómica",
      icon: <Dna className="w-6 h-6" />,
      description: "Investigamos las bases genómicas de la adaptación y el origen de la novedad biológica.",
      projects: [
        { title: "Cómo Surgen Nuevos Genes", desc: "Investigación teórica sobre cómo funciones secundarias de genes preexistentes pueden evolucionar hacia nuevos genes funcionales." },
        { title: "Divergencia entre Mapaches y Kinkajús", desc: "Estimación molecular de tiempos de separación evolutiva para entender la formación del Istmo de Panamá." },
        { title: "Ancestría Genética de Barranquilleros", desc: "Análisis de mezcla genética (africana, europea, indígena) en 200 personas usando estrategias de pooling." },
        { title: "Elasticidad Genómica", desc: "Concepto teórico y simulación sobre la capacidad de los genomas para absorber y recuperarse de perturbaciones ambientales." },
      ]
    },
    {
      title: "Diversidad de Insectos",
      icon: <Bug className="w-6 h-6" />,
      description: "Documentación y análisis de la entomofauna del Caribe para conservación y sostenibilidad.",
      projects: [
        { title: "Hormigas del Bosque Seco", desc: "Catálogo de diversidad taxonómica en el Atlántico, incluyendo 19 nuevos registros." },
        { title: "Escarabajos Coprófagos", desc: "Investigación sobre la distribución y función de reciclaje de nutrientes en bosques secos." },
        { title: "Ecología de Dípteros", desc: "Genómica de poblaciones de moscas con potencial alimentario y protocolos de cría." },
        { title: "Morfometría Geométrica", desc: "Uso de hormigas como sensor de estrés ambiental mediante análisis de forma." },
        { title: "ADN vs Morfología", desc: "Validación de metabarcoding frente a identificación morfológica tradicional." },
      ]
    },
    {
      title: "Ecosistemas del Caribe",
      icon: <Leaf className="w-6 h-6" />,
      description: "Uso de ADN ambiental (eDNA) y otras herramientas para monitorear la salud de nuestros ecosistemas.",
      projects: [
        { title: "eDNA en Bosques Secos", desc: "Metodología para monitorear biodiversidad de plantas, hongos e insectos en remanentes de bosque." },
        { title: "Genética Oculta del Bosque", desc: "Secuenciación de ADN de hojas para revelar diversidad microbiana simbiótica." },
        { title: "Biodiversidad del Río Magdalena", desc: "Caracterización de peces y vertebrados a lo largo del gradiente fluvial mediante metabarcoding." },
        { title: "Biodiversidad Urbana", desc: "Mapeo de biodiversidad en entornos de ciudad vía ADN ambiental." },
        { title: "Corales Resilientes", desc: "Estudio de comunidades coralinas en zonas de alta sedimentación." },
      ]
    },
    {
      title: "Divulgación y Ciencia Participativa",
      icon: <Users className="w-6 h-6" />,
      description: "Apropiación social del conocimiento para conectar la ciencia con la comunidad.",
      projects: [
        { title: "Guías Ilustradas", desc: "Libros sobre escarabajos y hormigas del Caribe para investigadores y público general." },
        { title: "La Rana Coquí en Barranquilla", desc: "Ciencia ciudadana para rastrear la rana invasora Eleutherodactylus johnstonei mediante audio." },
        { title: "Caminos Evolutivos", desc: "Instalación interactiva en Uninorte explorando principios de evolución biológica." },
      ]
    }
  ];

  return (
    <section id="investigacion" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">Líneas de Investigación</h2>
          <p className="text-slate-600 max-w-2xl text-lg font-light">
            Nuestros proyectos actuales abarcan desde la teoría evolutiva pura hasta la aplicación directa en conservación local.
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