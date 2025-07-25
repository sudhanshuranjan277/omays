import React from 'react';
import { Target, Eye, Cog, Globe, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const mission = {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Our Mission",
    description: "To revolutionize technology through innovative reverse engineering, creating sustainable solutions that bridge the gap between legacy systems and cutting-edge innovation."
  };

  const vision = {
    icon: <Eye className="w-8 h-8 text-violet-600" />,
    title: "Our Vision",
    description: "To be the global leader in sustainable technology transformation, empowering businesses and individuals to rebuild the future through intelligent re-engineering."
  };

  const sectors = [
    {
      icon: <Cog className="w-6 h-6 text-orange-600" />,
      title: "Reverse Engineering",
      description: "Legacy system analysis and modernization"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Renewable Energy",
      description: "Solar and sustainable energy solutions"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "IoT & Embedded Systems",
      description: "Smart device development and integration"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and analytics"
    }
  ];

  const operationalModel = [
    {
      step: "01",
      title: "Research & Analysis",
      description: "Deep market research and technology assessment to identify opportunities for innovation and improvement."
    },
    {
      step: "02",
      title: "Reverse Engineering",
      description: "Systematic deconstruction and analysis of existing systems using advanced tools and methodologies."
    },
    {
      step: "03",
      title: "Innovation & Design",
      description: "Creative redesign and enhancement using modern technologies, AI, and sustainable practices."
    },
    {
      step: "04",
      title: "Development & Testing",
      description: "Rigorous development process with comprehensive testing to ensure quality and reliability."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing support and continuous improvement based on user feedback."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            About Omays
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of technology through innovative reverse engineering and sustainable solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full mr-4">
                {mission.icon}
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {mission.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {mission.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full mr-4">
                {vision.icon}
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {vision.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {vision.description}
            </p>
          </div>
        </div>

        {/* Working Sectors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-8 text-center">
            Working Sectors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-full shadow-md">
                    {sector.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {sector.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Model */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-8 text-center">
            Our Operational Model
          </h3>
          <div className="space-y-6">
            {operationalModel.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;