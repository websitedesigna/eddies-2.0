import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import THCCalculator from './components/THCCalculator';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import TrippyBackground from './components/TrippyBackground';
import LoadingAnimation from './components/LoadingAnimation';
import { recipes } from './data/recipes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-white relative transition-opacity duration-500 ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`}>
      <TrippyBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <RecipeGrid recipes={recipes} />
        <THCCalculator />
        <EducationSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;