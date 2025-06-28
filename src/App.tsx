import Header from './components/Header';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import THCCalculator from './components/THCCalculator';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import TrippyBackground from './components/TrippyBackground';
import { recipes } from './data/recipes';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
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