import React from 'react';
import { Wrench, Sun, Scan, DraftingCompass as Drafting, Cpu, Code, Bot, Zap } from 'lucide-react';

const Sectors = () => {
  const sectors = [
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Reverse Engineering",
      description: "Deconstruct and analyze legacy systems"
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-600" />,
      title: "Renewable Energy (Solar)",
      description: "Sustainable energy solutions and optimization"
    },
    {
      icon: <Scan className="w-8 h-8 text-blue-600" />,
      title: "3D Scanning & Modeling",
      description: "Precise digital reconstruction and analysis"
    },
    {
      icon: <Drafting className="w-8 h-8 text-purple-600" />,
      title: "Computer-Aided Design (CAD)",
      description: "Advanced design and prototyping solutions"
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: "PCB Reverse Engineering",
      description: "Circuit board analysis and reconstruction"
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Firmware & Binary Analysis",
      description: "Deep code analysis and security auditing"
    },
    {
      icon: <Bot className="w-8 h-8 text-teal-600" />,
      title: "AI-Powered Disassembly Tools",
      description: "Intelligent automation for device breakdown"
    },
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Smart Grids",
      description: "Intelligent energy distribution systems"
    }
  ];

  return (
    <section id="services" className="py-12 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Sectors We Work In
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our expertise spans across multiple domains, delivering innovative solutions 
            that drive sustainable technology forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-400/50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full mb-4 group-hover:from-blue-200 group-hover:to-violet-200 transition-all duration-300">
                {sector.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {sector.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;