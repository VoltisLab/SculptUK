import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                        <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
                            Privacy Policy
                        </h1>
                        <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed fade-in">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                    </div>
                </section>

                {/* Privacy Content */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 lg:px-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Information We Collect</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We collect information you provide directly to us, such as when you create an account, make an appointment,
                                    or contact us for support.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">How We Use Your Information</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We use the information we collect to provide, maintain, and improve our services, process appointments,
                                    and communicate with you.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Information Sharing</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                                    except as described in this policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Data Security</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We implement appropriate security measures to protect your personal information against unauthorized access,
                                    alteration, disclosure, or destruction.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Contact Us</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at privacy@sculptbyuk.com.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;