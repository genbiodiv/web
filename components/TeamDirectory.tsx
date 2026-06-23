import React, { useState, useMemo } from 'react';
import { useTranslation } from './TranslationContext';
import { Search, ArrowLeft, Building2, BookOpen, GraduationCap, Sparkles, SlidersHorizontal } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  focusEs: string;
  focusEn: string;
  affiliationEs: string;
  affiliationEn: string;
  institutionEs: string;
  institutionEn: string;
  projectEs: string;
  projectEn: string;
}

const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 1,
    name: "Jorge Moreno",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Estudiante de Maestría en Ciencias Naturales / asistente de investigación",
    affiliationEn: "Master's Student in Natural Sciences / Research Assistant",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Ecología de comunidades del río Magdalena y del mar Caribe usando ADN ambiental. Proyecto WildinSync.",
    projectEn: "Community ecology of the Magdalena River and the Caribbean Sea using environmental DNA. WildinSync Project."
  },
  {
    id: 2,
    name: "Damaris Grandas",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Estudiante de Maestría en Ciencias Naturales / asistente de investigación",
    affiliationEn: "Master's Student in Natural Sciences / Research Assistant",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Asimetría fluctuante como indicador de estrés ecosistémico en comunidades de hormigas del bosque seco tropical. Impacto de la estratificación socioeconómica urbana en Barranquilla sobre comunidades de insectos y aves vía ADN ambiental. Proyecto WildinSync.",
    projectEn: "Fluctuating asymmetry as an indicator of ecosystem stress in ant communities of the tropical dry forest. Impact of urban socioeconomic stratification in Barranquilla on insect and bird communities via environmental DNA. WildinSync Project."
  },
  {
    id: 3,
    name: "Nicole Beleño",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Asistente de investigación graduada",
    affiliationEn: "Graduate Research Assistant",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Bioinformática de ADN ambiental en el bosque seco tropical.",
    projectEn: "Environmental DNA bioinformatics in the tropical dry forest."
  },
  {
    id: 4,
    name: "Keyner Moreno",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Asistente graduado",
    affiliationEn: "Graduate Assistant",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Análisis de comunidades entre temporadas seca y lluviosa en un bosque seco tropical usando metabarcoding.",
    projectEn: "Community analysis between dry and rainy seasons in a tropical dry forest using metabarcoding."
  },
  {
    id: 5,
    name: "Daniela Schultz",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Análisis bioinformático de metabarcoding de insectos en parques del barrio Abajo, Barranquilla.",
    projectEn: "Bioinformatic analysis of insect metabarcoding in parks of the Abajo neighborhood, Barranquilla."
  },
  {
    id: 6,
    name: "Robin Solano",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Análisis bioinformático de metabarcoding de insectos en parques del barrio Abajo, Barranquilla.",
    projectEn: "Bioinformatic analysis of insect metabarcoding in parks of the Abajo neighborhood, Barranquilla."
  },
  {
    id: 7,
    name: "Roberto Castro",
    focusEs: "ADN ambiental, metabarcoding y bioinformática",
    focusEn: "Environmental DNA, metabarcoding and bioinformatics",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Análisis microbiano por metabarcoding de suelos con distinto uso expuestos a escarabajos coprófagos.",
    projectEn: "Microbial analysis by metabarcoding of soils with different use exposed to dung beetles."
  },
  {
    id: 8,
    name: "Luis Felipe Bustamante",
    focusEs: "Biodiversidad urbana y gradientes socioambientales",
    focusEn: "Urban biodiversity and socio-environmental gradients",
    affiliationEs: "Asistente de investigación graduado",
    affiliationEn: "Graduate Research Assistant",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Distribución de la rana coquí en un gradiente socioeconómico en Barranquilla. Impacto de la estratificación socioeconómica urbana sobre comunidades de insectos y aves vía ADN ambiental.",
    projectEn: "Coqui frog distribution in a socioeconomic gradient in Barranquilla. Impact of urban socioeconomic stratification on insect and bird communities via environmental DNA."
  },
  {
    id: 9,
    name: "Juliana Chinchilla",
    focusEs: "Biodiversidad urbana y gradientes socioambientales",
    focusEn: "Urban biodiversity and socio-environmental gradients",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Ecología de abejas Melipona en el bosque urbano de la Universidad del Norte.",
    projectEn: "Ecology of Melipona bees in the urban forest of the Universidad del Norte."
  },
  {
    id: 10,
    name: "Valeria Machacón",
    focusEs: "Bosque seco tropical, insectos y colecciones biológicas",
    focusEn: "Tropical dry forest, insects and biological collections",
    affiliationEs: "Estudiante de Biología",
    affiliationEn: "Biology Student",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Comparación entre métodos morfológicos y moleculares para la identificación de familias de escarabajos en bosques secos tropicales.",
    projectEn: "Comparison between morphological and molecular methods for identifying beetle families in tropical dry forests."
  },
  {
    id: 11,
    name: "Andrea Cantillo",
    focusEs: "Bosque seco tropical, insectos y colecciones biológicas",
    focusEn: "Tropical dry forest, insects and biological collections",
    affiliationEs: "Estudiante de Biología / pasante",
    affiliationEn: "Biology Student / Intern",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Apoyo a la colección entomológica.",
    projectEn: "Support for the entomological collection."
  },
  {
    id: 12,
    name: "Cristina Bonnet",
    focusEs: "Bosque seco tropical, insectos y colecciones biológicas",
    focusEn: "Tropical dry forest, insects and biological collections",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Apoyo a muestreos del bosque seco tropical.",
    projectEn: "Support for tropical dry forest sampling."
  },
  {
    id: 13,
    name: "Deisy Santisteban",
    focusEs: "Bosque seco tropical, insectos y colecciones biológicas",
    focusEn: "Tropical dry forest, insects and biological collections",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Apoyo a colectas de nematodos y asistencia en el laboratorio de biología molecular.",
    projectEn: "Support for nematode harvesting and assistance in the molecular biology laboratory."
  },
  {
    id: 14,
    name: "Raquel Padilla",
    focusEs: "Bosque seco tropical, insectos y colecciones biológicas",
    focusEn: "Tropical dry forest, insects and biological collections",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Apoyo a la colección entomológica. Evaluación de las actitudes ecológicas de geólogos en formación y profesionales.",
    projectEn: "Support for the entomological collection. Evaluation of ecological attitudes of training and professional geologists."
  },
  {
    id: 15,
    name: "Ana Sofía Palacio",
    focusEs: "Biodiversidad marina, costera y del Caribe colombiano",
    focusEn: "Marine, coastal and Colombian Caribbean biodiversity",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Análisis de la dinámica climatológica y costera en Puerto Velero para entender las limitaciones de las comunidades coralinas del área.",
    projectEn: "Analysis of climatological and coastal dynamics in Puerto Velero to understand constraints on area coral communities."
  },
  {
    id: 16,
    name: "María José Rodríguez",
    focusEs: "Biodiversidad marina, costera y del Caribe colombiano",
    focusEn: "Marine, coastal and Colombian Caribbean biodiversity",
    affiliationEs: "Pasante de investigación / estudiante de Biología",
    affiliationEn: "Research Intern / Biology Student",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Guía ilustrada de hormigas del Caribe colombiano.",
    projectEn: "Illustrated guide to ants of the Colombian Caribbean."
  },
  {
    id: 17,
    name: "Santiago Díaz",
    focusEs: "Biodiversidad marina, costera y del Caribe colombiano",
    focusEn: "Marine, coastal and Colombian Caribbean biodiversity",
    affiliationEs: "Estudiante de Biología",
    affiliationEn: "Biology Student",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Apoyo a la guía ilustrada de hormigas del Caribe colombiano.",
    projectEn: "Support for the illustrated guide to ants of the Colombian Caribbean."
  },
  {
    id: 18,
    name: "Alejandro Díaz",
    focusEs: "Genómica evolutiva, ecología molecular y evolución",
    focusEn: "Evolutionary genomics, molecular ecology and evolution",
    affiliationEs: "Estudiante de Biología",
    affiliationEn: "Biology Student",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Estimación de la divergencia entre prociónidos y sus implicaciones biogeográficas en relación con el levantamiento del Istmo de Panamá.",
    projectEn: "Estimation of divergence among procyonids and its biogeographic implications in relation to the Isthmus of Panama uplift."
  },
  {
    id: 19,
    name: "Daniel Bolívar",
    focusEs: "Genómica evolutiva, ecología molecular y evolución",
    focusEn: "Evolutionary genomics, molecular ecology and evolution",
    affiliationEs: "Asistente de investigación",
    affiliationEn: "Research Assistant",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Ancestría genética en una población universitaria.",
    projectEn: "Genetic ancestry in a university population."
  },
  {
    id: 20,
    name: "Kelvin Llanos",
    focusEs: "Genómica evolutiva, ecología molecular y evolución",
    focusEn: "Evolutionary genomics, molecular ecology and evolution",
    affiliationEs: "Pasante doctoral",
    affiliationEn: "Doctoral Fellow",
    institutionEs: "UNTRM, Perú",
    institutionEn: "UNTRM, Peru",
    projectEs: "Análisis transcriptómico de levaduras asociadas a fenotipos resistentes contra la moniliasis del cacao.",
    projectEn: "Transcriptomic analysis of yeasts associated with resistant phenotypes against cocoa moniliasis."
  },
  {
    id: 21,
    name: "Ingrid Iliquín",
    focusEs: "Genómica evolutiva, ecología molecular y evolución",
    focusEn: "Evolutionary genomics, molecular ecology and evolution",
    affiliationEs: "Pasante doctoral",
    affiliationEn: "Doctoral Fellow",
    institutionEs: "UNTRM, Perú",
    institutionEn: "UNTRM, Peru",
    projectEs: "Genómica de líquenes en un bosque húmedo amazónico en Perú.",
    projectEn: "Genomics of lichens in an Amazonian wet forest in Peru."
  },
  {
    id: 22,
    name: "Sharyk Carrillo",
    focusEs: "Genómica evolutiva, ecología molecular y evolución",
    focusEn: "Evolutionary genomics, molecular ecology and evolution",
    affiliationEs: "Estudiante de Biología",
    affiliationEn: "Biology Student",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Ecología molecular de abejas polinizadoras de orquídeas en la Sierra Nevada de Santa Marta.",
    projectEn: "Molecular ecology of orchid pollinating bees in the Sierra Nevada de Santa Marta."
  },
  {
    id: 23,
    name: "Olga Buelvas",
    focusEs: "Genómica evolutiva, ecología molecular y evolución",
    focusEn: "Evolutionary genomics, molecular ecology and evolution",
    affiliationEs: "Pasante de investigación / estudiante de Biología",
    affiliationEn: "Research Intern / Biology Student",
    institutionEs: "Universidad del Atlántico",
    institutionEn: "Universidad del Atlántico",
    projectEs: "Metagenómica del contenido estomacal de un oso hormiguero, Tamandua mexicana, para inferir su dieta.",
    projectEn: "Metagenomics of stomach contents of an anteater, Tamandua mexicana, to infer its diet."
  },
  {
    id: 24,
    name: "Dana Martínez",
    focusEs: "Paleontología, geología histórica y evolución de faunas",
    focusEn: "Paleontology, historical geology and evolution of faunas",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Estado de la investigación paleontológica en el Caribe colombiano.",
    projectEn: "State of paleontological research in the Colombian Caribbean."
  },
  {
    id: 25,
    name: "Hanna Fuentes",
    focusEs: "Paleontología, geología histórica y evolución de faunas",
    focusEn: "Paleontology, historical geology and evolution of faunas",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Estado de la investigación paleontológica en el Caribe colombiano.",
    projectEn: "State of paleontological research in the Colombian Caribbean."
  },
  {
    id: 26,
    name: "Sergio Santander",
    focusEs: "Paleontología, geología histórica y evolución de faunas",
    focusEn: "Paleontology, historical geology and evolution of faunas",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Estudio de la diversidad de crocodilianos vía genómica y morfometría geométrica en el contexto de la formación Pebas.",
    projectEn: "Study of crocodilian diversity via genomics and geometric morphometrics in the context of the Pebas formation."
  },
  {
    id: 27,
    name: "Mauren Lavalle",
    focusEs: "Educación científica, divulgación y herramientas pedagógicas",
    focusEn: "Science education, scientific communication and pedagogical tools",
    affiliationEs: "Estudiante de Geología",
    affiliationEn: "Geology Student",
    institutionEs: "Universidad del Norte",
    institutionEn: "Universidad del Norte",
    projectEs: "Camino Evolutivo: herramienta interactiva para el aprendizaje de la evolución.",
    projectEn: "Evolutive Path: interactive tool for learning evolution."
  }
];

const THEMATIC_AREAS = [
  { es: "Todos", en: "All" },
  { es: "ADN ambiental, metabarcoding y bioinformática", en: "Environmental DNA, metabarcoding and bioinformatics", color: "from-emerald-500/10 to-teal-500/10 text-emerald-800 border-emerald-200" },
  { es: "Biodiversidad urbana y gradientes socioambientales", en: "Urban biodiversity and socio-environmental gradients", color: "from-blue-500/10 to-indigo-500/10 text-blue-800 border-blue-200" },
  { es: "Bosque seco tropical, insectos y colecciones biológicas", en: "Tropical dry forest, insects and biological collections", color: "from-amber-500/10 to-orange-500/10 text-amber-800 border-amber-200" },
  { es: "Biodiversidad marina, costera y del Caribe colombiano", en: "Marine, coastal and Colombian Caribbean biodiversity", color: "from-cyan-500/10 to-sky-500/10 text-cyan-800 border-cyan-200" },
  { es: "Genómica evolutiva, ecología molecular y evolución", en: "Evolutionary genomics, molecular ecology and evolution", color: "from-purple-500/10 to-pink-500/10 text-purple-800 border-purple-200" },
  { es: "Paleontología, geología histórica y evolución de faunas", en: "Paleontology, historical geology and evolution of faunas", color: "from-stone-500/10 to-slate-500/10 text-stone-800 border-stone-200" },
  { es: "Educación científica, divulgación y herramientas pedagógicas", en: "Science education, scientific communication and pedagogical tools", color: "from-lime-500/10 to-emerald-500/10 text-emerald-800 border-lime-200" },
];

const TeamDirectory: React.FC = () => {
  const { language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Todos');

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS_DATA.filter((member) => {
      const topicMatch = selectedTopic === 'Todos' || member.focusEs === selectedTopic || member.focusEn === selectedTopic;
      
      if (!topicMatch) return false;

      if (!searchTerm) return true;

      const normSearch = searchTerm.toLowerCase();
      const nameMatch = member.name.toLowerCase().includes(normSearch);
      const focusMatch = (language === 'es' ? member.focusEs : member.focusEn).toLowerCase().includes(normSearch);
      const affMatch = (language === 'es' ? member.affiliationEs : member.affiliationEn).toLowerCase().includes(normSearch);
      const instMatch = (language === 'es' ? member.institutionEs : member.institutionEn).toLowerCase().includes(normSearch);
      const projMatch = (language === 'es' ? member.projectEs : member.projectEn).toLowerCase().includes(normSearch);

      return nameMatch || focusMatch || affMatch || instMatch || projMatch;
    });
  }, [searchTerm, selectedTopic, language]);

  const handleBack = () => {
    window.location.hash = '';
  };

  // Helper theme finder
  const getTopicStyle = (topicEs: string) => {
    const found = THEMATIC_AREAS.find(area => area.es === topicEs);
    return found?.color || "from-slate-500/10 to-zinc-500/10 text-slate-800 border-slate-200";
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-950 transition-colors mb-6 group"
            id="back-to-home-btn"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-emerald-800 uppercase block mb-2 font-mono">
                {language === 'es' ? 'Directorio de Investigadores' : 'Researchers Directory'}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">
                {language === 'es' ? 'Investigadores y Colaboradores' : 'Researchers & Contributors'}
              </h1>
            </div>
            <div className="text-slate-500 text-sm font-medium font-mono bg-white border border-slate-100 rounded-full py-1.5 px-4 shadow-sm inline-block self-start">
              {filteredMembers.length} {language === 'es' ? 'Integrantes Encontrados' : 'Members Found'}
            </div>
          </div>
        </div>

        {/* Principal Investigator (Dr. Rafik Neme) Profile Section */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full filter blur-3xl opacity-60"></div>
          
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-1 font-mono">
              {language === 'es' ? 'Director de Grupo / Investigador Principal' : 'Group Director / Principal Investigator'}
            </span>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
                Dr. Rafik Neme
              </h2>
              <span className="text-sm text-slate-500 font-sans font-light">
                {language === 'es' ? 'Universidad del Norte' : 'Universidad del Norte'}
              </span>
            </div>
            
            <p className="text-slate-600 font-serif leading-relaxed italic text-base md:text-lg mb-8 border-l-2 border-emerald-500 pl-4 max-w-3xl">
              {language === 'es' 
                ? '"El genoma es un archivo histórico. Mi trabajo conecta la teoría evolutiva molecular con la conservación práctica del Caribe."'
                : '"The genome is a historical archive. My work connects molecular evolutionary theory with practical conservation in the Caribbean."'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              <div>
                <h3 className="font-serif text-base text-slate-900 font-semibold mb-3">
                  {language === 'es' ? "Áreas de Énfasis" : "Key Focal Areas"}
                </h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="font-sans font-semibold text-xs text-slate-800">{language === 'es' ? "Origen de Novedad Biológica" : "Origin of Biological Novelty"}</span>
                    <span className="text-xs text-slate-500 font-light">{language === 'es' ? "Evolución de novo y materia oscura genómica." : "De novo evolution and genomic dark matter."}</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-sans font-semibold text-xs text-slate-800">{language === 'es' ? "Genómica Computacional" : "Computational Genomics"}</span>
                    <span className="text-xs text-slate-500 font-light">{language === 'es' ? "Algoritmos para datos masivos y complejos." : "Algorithms for massive and complex data."}</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-sans font-semibold text-xs text-slate-800">{language === 'es' ? "Conservación Molecular" : "Molecular Conservation"}</span>
                    <span className="text-xs text-slate-500 font-light">{language === 'es' ? "eDNA aplicado a ecosistemas neotropicales." : "eDNA applied to neotropical ecosystems."}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-base text-slate-900 font-semibold mb-3">
                  {language === 'es' ? "Redes y Asociaciones" : "Networks and Associations"}
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2 text-xs text-slate-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>Max Planck Institute for Evolutionary Biology</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>Pew Charitable Trusts</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>Universidad del Norte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-10 space-y-6">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <input 
              type="text"
              placeholder={language === 'es' ? 'Buscar por nombre, institución, proyecto...' : 'Search by name, institution, project...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50/70 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all text-slate-800 outline-none placeholder:text-slate-400 text-base"
              id="team-search-input"
            />
          </div>

          {/* Topic Tabs */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
              <SlidersHorizontal className="w-4 h-4" />
              <span>{language === 'es' ? 'Filtrar por Línea Filial' : 'Filter by Research Line'}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {THEMATIC_AREAS.map((area) => {
                const isSelected = selectedTopic === area.es || (selectedTopic === 'Todos' && area.es === 'Todos');
                const label = language === 'es' ? area.es : area.en;
                
                return (
                  <button
                    key={area.es}
                    onClick={() => setSelectedTopic(area.es)}
                    className={`text-xs px-4 py-2 rounded-lg transition-all border outline-none font-medium ${
                      isSelected 
                        ? 'bg-emerald-900 border-emerald-950 text-white shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMembers.map((member) => {
              const focusName = language === 'es' ? member.focusEs : member.focusEn;
              const affName = language === 'es' ? member.affiliationEs : member.affiliationEn;
              const instName = language === 'es' ? member.institutionEs : member.institutionEn;
              const projName = language === 'es' ? member.projectEs : member.projectEn;
              const topicColor = getTopicStyle(member.focusEs);

              return (
                <div 
                  key={member.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Name and Label/Topic */}
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-slate-900 tracking-tight font-sans">
                        {member.name}
                      </h3>
                    </div>

                    {/* Topic Badge */}
                    <div className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-gradient-to-r inline-block mb-4 max-w-full truncate ${topicColor}`}>
                      {focusName}
                    </div>

                    {/* Member Details */}
                    <div className="space-y-3.5 mb-6">
                      {/* Affliation */}
                      <div className="flex gap-2.5">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-relaxed font-light">
                          {affName}
                        </span>
                      </div>

                      {/* Institution */}
                      <div className="flex gap-2.5">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium">
                          {instName}
                        </span>
                      </div>

                      {/* Project / Activity */}
                      {projName && projName !== '—' && (
                        <div className="pt-2 border-t border-slate-50">
                          <div className="flex gap-2.5">
                            <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                            <div className="text-sm text-slate-600 font-light leading-relaxed">
                              <span className="font-semibold text-slate-800 text-xs block mb-1 uppercase tracking-wider font-mono">
                                {language === 'es' ? 'Proyecto / Actividad' : 'Project / Activity'}
                              </span>
                              {projName}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>


                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl py-16 px-6 border border-slate-100 text-center max-w-xl mx-auto shadow-sm">
            <span className="text-4xl block mb-4">🔍</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {language === 'es' ? 'No se encontraron resultados' : 'No results found'}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              {language === 'es' 
                ? 'Intenta cambiar los términos de búsqueda o seleccionar otra línea de investigación.' 
                : 'Try changing the search terms or selecting another research line.'}
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedTopic('Todos'); }}
              className="text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-5 rounded-lg transition-all"
            >
              {language === 'es' ? 'Restablecer Filtros' : 'Reset Filters'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TeamDirectory;
