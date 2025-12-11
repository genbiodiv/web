import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Identity from './components/Identity';
import ResearchLines from './components/ResearchLines';
import Capabilities from './components/Capabilities';
import PrincipalInvestigator from './components/PrincipalInvestigator';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Identity />
        <ResearchLines />
        <Capabilities />
        <PrincipalInvestigator />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;