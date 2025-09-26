import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                        <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
                            About Sculpt by U.K
                        </h1>
                        <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed fade-in">
                            Where artistry meets science in the pursuit of aesthetic excellence.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="slide-in-left">
                                <h2 className="serif-font text-4xl font-light mb-6 text-black">Our Story</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Founded with a vision to revolutionize aesthetic enhancement, Sculpt by U.K represents the pinnacle of non-surgical beauty treatments. Our journey began with a simple belief: that everyone deserves to feel confident and beautiful in their own skin.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We combine cutting-edge technology with artistic expertise to deliver results that enhance your natural beauty while maintaining the highest standards of safety and professionalism.
                                </p>
                            </div>
                            <div className="slide-in-right">
                                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}