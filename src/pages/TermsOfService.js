import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              
              <div className="space-y-8 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2025</p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using Sculpt by U.K's services, website, or booking appointments, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">2. Services Provided</h2>
                  <p className="leading-relaxed mb-4">
                    Sculpt by U.K provides aesthetic treatments and training services including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Facial balancing and contouring treatments</li>
                    <li>Dermal filler procedures</li>
                    <li>Anti-wrinkle injections (Botox)</li>
                    <li>Thread lift procedures</li>
                    <li>Skin booster treatments</li>
                    <li>Professional training programs and masterclasses</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">3. Appointment Booking and Cancellations</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-black mb-2">Booking Policy:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>A consultation may be required before certain treatments</li>
                        <li>A deposit may be required to secure your appointment</li>
                        <li>You must provide accurate medical history and current medications</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-2">Cancellation Policy:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>48 hours notice required for appointment changes or cancellations</li>
                        <li>Less than 24 hours notice may result in forfeiture of deposit</li>
                        <li>No-shows will result in full treatment charge</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">4. Medical Considerations</h2>
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      By booking our services, you acknowledge that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You have disclosed all relevant medical history and current medications</li>
                      <li>You understand the risks and benefits of the proposed treatments</li>
                      <li>You consent to the treatment after receiving appropriate information</li>
                      <li>Results may vary and cannot be guaranteed</li>
                      <li>Some treatments may require multiple sessions</li>
                      <li>You will follow all aftercare instructions provided</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">5. Payment Terms</h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payment is due at the time of service unless other arrangements are made</li>
                    <li>We accept various payment methods as displayed at our clinic</li>
                    <li>Prices are subject to change with reasonable notice</li>
                    <li>Refunds are considered on a case-by-case basis</li>
                    <li>Training course fees are non-refundable once started</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">6. Liability and Insurance</h2>
                  <p className="leading-relaxed mb-4">
                    Sculpt by U.K maintains appropriate professional indemnity insurance. However:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We are not liable for complications arising from non-disclosure of medical conditions</li>
                    <li>We are not responsible for results if aftercare instructions are not followed</li>
                    <li>Our liability is limited to the cost of the treatment received</li>
                    <li>You acknowledge the inherent risks associated with aesthetic treatments</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">7. Intellectual Property</h2>
                  <p className="leading-relaxed">
                    All content on our website, including text, graphics, logos, and treatment techniques, is the property of Sculpt by U.K and protected by intellectual property laws. Training participants agree not to reproduce or share proprietary techniques without permission.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">8. Photography and Marketing</h2>
                  <p className="leading-relaxed mb-4">
                    With your consent, we may:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Take before and after photographs for medical records</li>
                    <li>Use anonymized images for marketing purposes</li>
                    <li>You may withdraw consent for marketing use at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">9. Training Programs</h2>
                  <p className="leading-relaxed mb-4">
                    For our training and educational services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Participants must hold appropriate professional qualifications</li>
                    <li>All techniques taught are for professional use only</li>
                    <li>Certificates are issued upon successful completion</li>
                    <li>Ongoing professional development may be required</li>
                    <li>We are not responsible for participants' subsequent practice</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">10. Website Use</h2>
                  <p className="leading-relaxed mb-4">
                    When using our website, you agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the site for any unlawful purposes</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with other users' use of the site</li>
                    <li>Upload harmful or malicious content</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">11. Governing Law</h2>
                  <p className="leading-relaxed">
                    These terms are governed by the laws of England and Wales. Any disputes will be subject to the jurisdiction of the English courts.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">12. Changes to Terms</h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">13. Contact Information</h2>
                  <p className="leading-relaxed mb-4">
                    For questions about these terms or our services, contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="mb-2"><strong>Sculpt by U.K</strong></p>
                    <p className="mb-2">Email: info@sculptbyuk.com</p>
                    <p className="mb-2">Phone: +44 20 1234 5678</p>
                    <p>Address: 123 Aesthetic Lane, Beauty District, London, UK</p>
                  </div>
                </div>
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