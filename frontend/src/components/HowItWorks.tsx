import React from 'react';
import { Search, ScanLine, Wrench, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-orange-600" />,
      title: "Research",
      subtitle: "Market Analysis",
      description: "We analyze market needs and identify opportunities for innovative solutions"
    },
    {
      icon: <ScanLine className="w-8 h-8 text-blue-600" />,
      title: "Analyze",
      subtitle: "3D Scan, Firmware, CAD",
      description: "Advanced analysis using 3D scanning, firmware extraction, and CAD modeling"
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      title: "Rebuild",
      subtitle: "Embedded + AI",
      description: "Reconstruct with modern embedded systems and AI-powered enhancements"
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-600" />,
      title: "Deploy",
      subtitle: "New Product",
      description: "Launch cutting-edge products with advanced functionality and renewable technology"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven four-step process delivers innovative, 
            cutting-edge technology solutions through reverse engineering.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden md:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-white rounded-full shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm max-w-48">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center mx-8">
                    <ArrowRight className="w-6 h-6 text-gray-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-full shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 ml-8">
                    <div className="w-px h-16 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Innovate with Omays?
            </h3>
            <p className="text-white/90 mb-6">
              Join the sustainable technology revolution and bring your innovative ideas to life.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;