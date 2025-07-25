import React from 'react';
import { ArrowRight, Play, Zap, Recycle, BrainCircuit as Circuit } from 'lucide-react';

const Hero = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // Add navigation to signup/onboarding
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
    // Add navigation to about section
  };

  return (
    <section id="home" className="relative bg-white py-16 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full opacity-10 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-15 animate-pulse delay-1000 blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full opacity-8 animate-pulse delay-2000 blur-2xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-violet-500 rotate-45 opacity-20 animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-500 rotate-12 opacity-15 animate-float delay-1000"></div>
        
        {/* Animated Icons */}
        <div className="absolute top-32 right-1/4 animate-float">
          <Circuit className="w-8 h-8 text-blue-400 opacity-20" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float delay-1000">
          <Zap className="w-10 h-10 text-violet-400 opacity-15" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Rebuilding the Future.</span>
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Re-engineering.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Omays, as a product-based company, is here to serve the world with cutting-edge technologies—reverse engineering its way into product innovation and renewable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={handleLearnMore}
              className="group px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">50K+</div>
              <div className="text-gray-600">Devices Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">1M+</div>
              <div className="text-gray-600">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;