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
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Automatically scroll to the top when navigating between pages
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isDetailedTeam = currentHash === '#equipo-completo';

  return (
    <TranslationProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {isDetailedTeam ? (
            <TeamDirectory />
          ) : (
            <>
              <Hero />
              <Identity />
              <ResearchLines />
              <Capabilities />
              <Team />
              <Publications />
            </>
          )}
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default App;