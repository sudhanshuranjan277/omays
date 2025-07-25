import React from 'react';
import { Brain, Eye, Cpu, DraftingCompass as Drafting, Smartphone, Bot, Shield, Cloud, Globe, Leaf } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: "AI", icon: <Brain className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
    { name: "Computer Vision", icon: <Eye className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { name: "Embedded Systems", icon: <Cpu className="w-6 h-6" />, color: "bg-green-100 text-green-600" },
    { name: "CAD", icon: <Drafting className="w-6 h-6" />, color: "bg-orange-100 text-orange-600" },
    { name: "Smart Manufacturing", icon: <Bot className="w-6 h-6" />, color: "bg-indigo-100 text-indigo-600" },
    { name: "Robotics & Automation", icon: <Bot className="w-6 h-6" />, color: "bg-teal-100 text-teal-600" },
    { name: "Cybersecurity", icon: <Shield className="w-6 h-6" />, color: "bg-red-100 text-red-600" },
    { name: "Cloud & DevOps", icon: <Cloud className="w-6 h-6" />, color: "bg-sky-100 text-sky-600" },
    { name: "Web + App Dev", icon: <Globe className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { name: "Sustainability", icon: <Leaf className="w-6 h-6" />, color: "bg-lime-100 text-lime-600" }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-violet-400/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Tech Stack & Innovation Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive technology stack enables us to deliver cutting-edge solutions 
            across multiple domains of sustainable technology.
          </p>
        </div>

        {/* Tag Cloud Layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 cursor-pointer hover:from-blue-700 hover:to-violet-700"
            >
              {tech.icon}
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Featured Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border border-gray-100 hover:border-blue-400/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">AI & Machine Learning</h3>
            </div>
            <p className="text-gray-600">
              Advanced AI algorithms for pattern recognition, predictive maintenance, 
              and automated decision-making in recycling processes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 border border-gray-100 hover:border-violet-400/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full">
                <Cpu className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Embedded Systems</h3>
            </div>
            <p className="text-gray-600">
              Custom embedded solutions for IoT devices, sensor networks, 
              and real-time monitoring systems in sustainable technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border border-gray-100 hover:border-blue-400/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Computer Vision</h3>
            </div>
            <p className="text-gray-600">
              Image processing and analysis for quality control, defect detection, 
              and automated sorting in manufacturing workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;