import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Identity from './components/Identity';
import ResearchLines from './components/ResearchLines';
import Capabilities from './components/Capabilities';
import Team from './components/Team';
import Publications from './components/Publications';
import TeamDirectory from './components/TeamDirectory';
import Footer from './components/Footer';
import { TranslationProvider } from './components/TranslationContext';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#inicio');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#inicio';
      setCurrentHash(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    switch (currentHash) {
      case '#identidad':
        return (
          <div className="pt-24 min-h-[70vh]">
            <Identity />
          </div>
        );
      case '#investigacion':
        return (
          <div className="pt-24 min-h-[70vh]">
            <ResearchLines />
          </div>
        );
      case '#capacidades':
        return (
          <div className="pt-24 min-h-[70vh]">
            <Capabilities />
          </div>
        );
      case '#publicaciones':
        return (
          <div className="pt-24 min-h-[70vh]">
            <Publications />
          </div>
        );
      case '#equipo':
        return (
          <div className="pt-24 min-h-[70vh]">
            <Team />
          </div>
        );
      case '#equipo-completo':
        return (
          <div className="pt-20 min-h-[70vh]">
            <TeamDirectory />
          </div>
        );
      case '#inicio':
      default:
        return <Hero />;
    }
  };

  return (
    <TranslationProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navigation activeHash={currentHash} />
        <main className="flex-grow">
          {renderCurrentPage()}
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default App;