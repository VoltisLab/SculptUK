import React, { useState } from 'react';
import { Button } from './ui/button';
import { Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-rose-50 flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="block font-thin">Sculpted</span>
              <span className="block font-semibold">Perfection.</span>
              <span className="block font-thin italic text-4xl lg:text-5xl text-amber-700">Redefined.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed font-light">
              Where artistry meets science. We curate bespoke aesthetic journeys, 
              crafting subtle enhancements that celebrate your natural elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-amber-800 text-white hover:bg-amber-900 px-8 py-4 text-base rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 font-medium"
              >
                Begin Your Transformation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-base rounded-full transition-all duration-300 font-medium"
              >
                Explore Treatments
              </Button>
            </div>
          </div>

          {/* Right Video Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Preview Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmVhdXR5fGVufDB8fHx8MTc1ODcwNTYyN3ww&ixlib=rb-4.1.0&q=85&w=800"
                alt="Luxury aesthetic treatment preview"
                className="w-full h-96 object-cover"
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handleVideoToggle}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  {isVideoPlaying ? (
                    <Pause className="w-8 h-8 text-gray-900 ml-0" />
                  ) : (
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  )}
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-xs font-medium text-gray-900">Live Preview</span>
              </div>
            </div>

            {/* Video Details */}
            {isVideoPlaying && (
              <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Experience Our Artistry</h3>
                <p className="text-gray-600 text-sm">Watch our signature techniques in action</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;