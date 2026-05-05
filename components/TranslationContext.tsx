import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.identity': 'Nuestro Grupo',
    'nav.research': 'Investigación',
    'nav.capabilities': 'Capacidades',
    'nav.publications': 'Publicaciones',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'hero.title': 'Genómica y',
    'hero.title.italic': 'Biodiversidad',
    'hero.title.suffix': 'del Caribe',
    'hero.subtitle': 'Desde la evolución de nuevos genes hasta la ecología de los bosques secos, buscamos respuestas integrales.',
    'hero.cta': 'Explorar Líneas de Investigación',
    'identity.title': 'Identidad',
    'identity.main': 'Investigando la diversidad biológica del Caribe Colombiano a través de un enfoque interdisciplinario que combina',
    'identity.emphasis': 'genómica, ecología y evolución',
    'identity.p1': 'Nuestro laboratorio integra la biología molecular y la entomología con el análisis de datos para entender la historia y el futuro de nuestros ecosistemas.',
    'identity.p2': 'Buscamos dar soluciones a problemas concretos desde abordajes académicos investigativos, teniendo en cuenta el bienestar social y económico de la región.',
    'research.title': 'Líneas de Investigación',
    'research.subtitle': 'Nuestros proyectos actuales abarcan desde la teoría evolutiva pura hasta la aplicación directa en conservación local.',
    'cap.title': 'Capacidades Técnicas',
    'cap.subtitle': 'Infraestructura y herramientas para la investigación de alto nivel.',
    'team.subtitle': 'Investigadores y estudiantes apasionados por la ciencia.',
    'pi.role': 'Investigador Principal',
    'pi.bio': 'Biólogo y experto en genómica evolutiva. Su investigación busca desentrañar los mecanismos que generan la diversidad biológica.',
    'nav.group': 'Nuestro Grupo',
    'pi.title': 'Investigador Principal',
    'team.title': 'Nuestro Equipo',
    'pubs.title': 'Publicaciones Recientes',
    'pubs.scholar': 'Ver perfil en Google Scholar',
    'pubs.cited': 'Citado por',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.contact': 'Contacto',
    'footer.location': 'Km 5 Vía Puerto Colombia, Barranquilla - Colombia'
  },
  en: {
    'nav.identity': 'Our Group',
    'nav.research': 'Research',
    'nav.capabilities': 'Capabilities',
    'nav.publications': 'Publications',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'hero.title': 'Genomics and',
    'hero.title.italic': 'Biodiversity',
    'hero.title.suffix': 'of the Caribbean',
    'hero.subtitle': 'From the evolution of new genes to the ecology of dry forests, we seek comprehensive answers.',
    'hero.cta': 'Explore Research Lines',
    'identity.title': 'Identity',
    'identity.main': 'Investigating the biological diversity of the Colombian Caribbean through an interdisciplinary approach that combines',
    'identity.emphasis': 'genomics, ecology, and evolution',
    'identity.p1': 'Our laboratory integrates molecular biology and entomology with data analysis to understand the history and future of our ecosystems.',
    'identity.p2': 'We seek to provide solutions to concrete problems through investigative academic approaches, considering the social and economic well-being of the region.',
    'research.title': 'Research Lines',
    'research.subtitle': 'Our current projects range from pure evolutionary theory to direct application in local conservation.',
    'cap.title': 'Technical Capabilities',
    'cap.subtitle': 'High-level research infrastructure and tools.',
    'team.subtitle': 'Researchers and students passionate about science.',
    'pi.role': 'Principal Investigator',
    'pi.bio': 'Biologist and expert in evolutionary genomics. His research seeks to unravel the mechanisms that generate biological diversity.',
    'pi.title': 'Principal Investigator',
    'team.title': 'Our Team',
    'pubs.title': 'Recent Publications',
    'pubs.scholar': 'View profile on Google Scholar',
    'pubs.cited': 'Cited by',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact',
    'footer.location': 'Km 5 Vía Puerto Colombia, Barranquilla - Colombia'
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within TranslationProvider');
  return context;
};
