import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              
              <div className="space-y-8 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2025</p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">1. Information We Collect</h2>
                  <p className="leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Book an appointment through our website</li>
                    <li>Contact us via phone, email, or contact forms</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Participate in our training programs</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    This may include your name, email address, phone number, appointment preferences, medical history relevant to treatments, and payment information.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">2. How We Use Your Information</h2>
                  <p className="leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Schedule and manage your appointments</li>
                    <li>Provide you with our aesthetic treatment services</li>
                    <li>Communicate with you about your treatments and appointments</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our services and website functionality</li>
                    <li>Comply with legal obligations and maintain medical records</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">3. Information Sharing</h2>
                  <p className="leading-relaxed mb-4">
                    We do not sell, rent, or share your personal information with third parties except:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When required by law or legal process</li>
                    <li>With healthcare professionals involved in your treatment (with consent)</li>
                    <li>With service providers who assist our business operations (under strict confidentiality)</li>
                    <li>In case of a business transfer or acquisition</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">4. Data Security</h2>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">5. Data Retention</h2>
                  <p className="leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Medical records are retained according to UK healthcare regulations and professional guidelines.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">6. Your Rights</h2>
                  <p className="leading-relaxed mb-4">
                    Under UK GDPR, you have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate personal data</li>
                    <li>Erase your personal data (in certain circumstances)</li>
                    <li>Restrict processing of your personal data</li>
                    <li>Data portability</li>
                    <li>Object to processing (in certain circumstances)</li>
                    <li>Withdraw consent at any time (where processing is based on consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">7. Cookies</h2>
                  <p className="leading-relaxed">
                    Our website uses cookies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">8. Changes to This Policy</h2>
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="serif-font text-2xl font-medium mb-4 text-black">9. Contact Us</h2>
                  <p className="leading-relaxed mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
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

export default PrivacyPolicy;