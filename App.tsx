import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Identity from './components/Identity';
import ResearchLines from './components/ResearchLines';
import Capabilities from './components/Capabilities';
import PrincipalInvestigator from './components/PrincipalInvestigator';
import Team from './components/Team';
import Publications from './components/Publications';
import Footer from './components/Footer';
import { TranslationProvider } from './components/TranslationContext';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <Identity />
          <ResearchLines />
          <Capabilities />
          <PrincipalInvestigator />
          <Team />
          <Publications />
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default App;