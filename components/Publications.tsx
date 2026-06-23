import React from 'react';
import { ExternalLink, FileText, Quote } from 'lucide-react';
import { useTranslation } from './TranslationContext';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  citedBy?: string;
}

const publications: Publication[] = [
  {
    title: "Morphological, Molecular, and Isotopic Approaches to Termite Ecology: A Mangrove Case Study",
    authors: "R Casalla, R Neme, J Korb",
    journal: "Biotropica 58 (3), e70199",
    year: "2026",
    link: "#"
  },
  {
    title: "Socioeconomic Barriers Shape the Urban Distribution of an Invasive Frog: A Case Study from Barranquilla, Colombia",
    authors: "LF Bustamante-Narváez, D Grandas-Gaona, VM Gonzalez, ...",
    journal: "Research Initiative",
    year: "2026",
    link: "#"
  },
  {
    title: "Taxonomic Diversity of Ants (Formicidae) in Forest Fragments of Tropical Dry Forest in Atlántico, Colombia",
    authors: "D Grandas-Gaona, D Posada-Echeverría, V Machacón, R Sarmiento, ...",
    journal: "bioRxiv, 2025.08. 13.670019",
    year: "2025",
    link: "https://doi.org/10.1101/2025.08.13.670019"
  },
  {
    title: "Combining environmental DNA and remote sensing variables to model fish biodiversity in tropical river ecosystems",
    authors: "R Bauknecht, L Pellissier, S Brosse, V Prié, M Lopes-Lima, P Beja, ...",
    journal: "Ecological Informatics, 103251",
    year: "2025",
    link: "#",
    citedBy: "4"
  },
  {
    title: "Diversity and efficacy of insect sampling methods in an urban tropical dry forest of the Colombian Caribbean",
    authors: "R Sarmiento-Garcés, D Posada-Echeverría, R Neme",
    journal: "PeerJ 13, e18262",
    year: "2025",
    link: "https://doi.org/10.7717/peerj.18262",
    citedBy: "2"
  },
  {
    title: "Decoding biodiversity patterns and community structure of the lower Magdalena River (Colombia) using environmental DNA",
    authors: "J Moreno-Tilano, S Zong, M Goralczyk, V Marques, MA Gonzalez, ...",
    journal: "Authorea",
    year: "2025",
    link: "#"
  },
  {
    title: "Coleópteros: guía ilustrada de familias y subfamilias de escarabajos en el Caribe colombiano",
    authors: "R Neme, R Sarmiento, V Machacón, D Grandas, D Posada",
    journal: "Universidad del Norte",
    year: "2024",
    link: "#"
  },
  {
    title: "Unprecedented sighting of coral populations and associated fauna in the High Sedimentation Waters of Puerto Velero, Atlantico, Colombia",
    authors: "JA Moreno Tilano, IL Sanabria Ramirez, R Neme",
    journal: "bioRxiv, 2024.10. 09.617471",
    year: "2024",
    link: "https://doi.org/10.1101/2024.10.09.617471"
  },
  {
    title: "SDRAP for annotating scrambled or rearranged genomes",
    authors: "J Braun, R Neme, Y Feng, LF Landweber, N Jonoska",
    journal: "NAR Genomics and Bioinformatics 5 (4), lqad096",
    year: "2023",
    link: "https://doi.org/10.1093/nargab/lqad096",
    citedBy: "3"
  },
  {
    title: "Comparative genomics reveals insight into the evolutionary origin of massively scrambled genomes",
    authors: "Y Feng, R Neme, LY Beh, X Chen, J Braun, MW Lu, LF Landweber",
    journal: "Elife 11, e82979",
    year: "2022",
    link: "https://doi.org/10.7554/eLife.82979",
    citedBy: "15"
  },
  {
    title: "Transcribed germline-limited coding sequences in Oxytricha trifallax",
    authors: "RV Miller, R Neme, DM Clay, JS Pathmanathan, MW Lu, VT Yerlici, ...",
    journal: "G3 11 (6), jkab092",
    year: "2021",
    link: "https://doi.org/10.1093/g3journal/jkab092",
    citedBy: "8"
  },
  {
    title: "Boundary maintenance in the ancestral metazoan Hydra depends on histone acetylation",
    authors: "JA López-Quintero, GG Torres, R Neme, TCG Bosch",
    journal: "Developmental Biology 458 (2), 200-214",
    year: "2020",
    link: "https://doi.org/10.1016/j.ydbio.2019.10.031",
    citedBy: "7"
  }
];

const Publications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="publicaciones" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('pubs.title')}</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="group p-6 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {pub.year}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 italic">
                      {pub.journal}
                    </span>
                    {pub.citedBy && (
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Quote className="w-3 h-3 rotate-180" />
                        <span>{t('pubs.cited')}: {pub.citedBy}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {pub.authors}
                  </p>
                </div>
                {pub.link !== "#" && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all flex-shrink-0"
                    aria-label="View publication"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://scholar.google.com/citations?user=X7W0MwQAAAAJ&hl=es" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-emerald-800 transition-colors shadow-sm"
          >
            {t('pubs.scholar')}
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
