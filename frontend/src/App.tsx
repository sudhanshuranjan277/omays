import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import USPCarousel from './components/USPCarousel';
import Sectors from './components/Sectors';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import TechStack from './components/TechStack';
import ProjectShowcase from './components/ProjectShowcase';
import Masterclasses from './components/Masterclasses';
import FutureTech from './components/FutureTech';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'services':
        return <Sectors />;
      case 'trainings':
        return <Masterclasses />;
      case 'contact':
        return <ContactCard />;
      default:
        return (
          <>
            <Hero />
            <USPCarousel />
            <Sectors />
            <HowItWorks />
            <TechStack />
            <ProjectShowcase />
            <Masterclasses />
            <FutureTech />
            <ContactCard />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;