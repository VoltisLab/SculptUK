import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TreatmentsSection from '../components/TreatmentsSection';
import AcademySection from '../components/AcademySection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ServicesSection />
      <TreatmentsSection />
      <AcademySection />
      <Footer />
    </div>
  );
};

export default Home;