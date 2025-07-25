import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Wrench, 
  Puzzle, 
  Recycle, 
  Package, 
  BarChart3,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

const USPCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const usps = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Multi-language Support",
      description: "Accessible experience across global languages"
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Reverse Engineering",
      description: "Transform legacy devices into modern solutions"
    },
    {
      icon: <Puzzle className="w-8 h-8 text-purple-600" />,
      title: "Product Engineering",
      description: "Build smarter, modular, scalable products"
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-600" />,
      title: "Sustainable Innovation",
      description: "Creating eco-friendly technology solutions"
    },
    {
      icon: <Package className="w-8 h-8 text-teal-600" />,
      title: "Modular Product Design",
      description: "Flexible design for reuse and upgrades"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: "All in One Management",
      description: "Comprehensive solution for all your tech needs"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 3) % usps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, usps.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % usps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + usps.length) % usps.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * 3);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Things at a Glance
          </h2>
          <p className="text-lg text-gray-600">
            Discover what makes Omays the leader in sustainable technology
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {usps.map((usp, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-white rounded-full shadow-md">
                        {usp.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {usp.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {usp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(usps.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === Math.floor(currentIndex / 3) ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default USPCarousel;