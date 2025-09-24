import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AcademySection from './components/AcademySection';
import TransformationSection from './components/TransformationSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AcademySection />
      <TransformationSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;