import React from 'react';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Crown } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-stone-900 to-amber-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                <Crown className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-light">The Forme Clinique</span>
                <div className="text-amber-400 text-sm font-medium">Sculpt by U.K</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-light">
              Where sophistication meets artistry. We curate bespoke aesthetic journeys for the discerning client who values excellence, discretion, and transformative results.
            </p>
            <Button 
              className="bg-amber-600 text-white hover:bg-amber-700 rounded-full px-6 py-3 font-medium transition-all duration-300"
            >
              Begin Your Journey
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light mb-6 text-amber-400">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 font-light">
                  Mayfair Chambers<br />
                  London W1K 2AB<br />
                  United Kingdom
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300 font-light">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300 font-light">concierge@sculptbyuk.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light mb-6 text-amber-400">Navigate</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors font-light">Treatments</a></li>
              <li><a href="#training" className="text-gray-300 hover:text-amber-400 transition-colors font-light">Elite Training</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors font-light">Our Story</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors font-light">Concierge</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors font-light">Privacy Charter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors font-light">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-amber-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm font-light">
                © {currentYear} The Forme Clinique. Sculpt by U.K. All rights reserved.
              </p>
              <p className="text-amber-400 text-xs font-light mt-1">
                Elevating beauty through artistry
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;