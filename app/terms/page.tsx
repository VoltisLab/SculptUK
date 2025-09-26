import React from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                        <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
                            Terms of Service
                        </h1>
                        <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed fade-in">
                            Please read these terms carefully before using our services.
                        </p>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 lg:px-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Acceptance of Terms</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Use of Services</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    You may use our services for lawful purposes only. You agree not to use the service in any way that
                                    could damage, disable, overburden, or impair the service.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Appointments and Cancellations</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Appointments must be cancelled at least 24 hours in advance. Late cancellations may result in a
                                    cancellation fee.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Limitation of Liability</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                                    resulting from your use of our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Changes to Terms</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                                    posting on our website.
                                </p>
                            </div>

                            <div>
                                <h2 className="serif-font text-2xl font-medium mb-4 text-black">Contact Information</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    For questions about these Terms of Service, please contact us at legal@sculptbyuk.com.
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

export default TermsOfService;