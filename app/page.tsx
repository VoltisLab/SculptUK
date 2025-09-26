import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import ServicesSection from '../src/components/ServicesSection';
import GallerySection from '../src/components/GallerySection';
import AcademySection from '../src/components/AcademySection';
import TransformationSection from '../src/components/TransformationSection';
import TestimonialsSection from '../src/components/TestimonialsSection';
import FAQSection from '../src/components/FAQSection';
import Footer from '../src/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <ServicesSection />
            <GallerySection />
            <AcademySection />
            <TransformationSection />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </div>
    );
}