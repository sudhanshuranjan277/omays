import React from 'react';
import { ExternalLink, Play, ArrowRight } from 'lucide-react';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Solar Grid Optimizer",
      description: "AI-powered solar panel efficiency optimization system",
      image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["IoT", "Solar", "AI"],
      category: "Renewable Energy"
    },
    {
      id: 2,
      title: "Smart Sorting Robot",
      description: "Automated robotic system for intelligent material classification",
      image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Robotics", "AI", "Automation"],
      category: "Automation"
    },
    {
      id: 3,
      title: "Legacy PCB Analyzer",
      description: "Reverse engineering tool for vintage circuit boards",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["PCB", "Reverse Engineering", "CAD"],
      category: "Hardware"
    },
    {
      id: 4,
      title: "Smart Manufacturing Hub",
      description: "Connected manufacturing system for sustainable production",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["IoT", "Manufacturing", "Cloud"],
      category: "Industry 4.0"
    },
    {
      id: 5,
      title: "Advanced Material Processor",
      description: "Convert raw materials into high-quality manufacturing components",
      image: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["3D Printing", "Manufacturing", "Innovation"],
      category: "Advanced Manufacturing"
    },
    {
      id: 6,
      title: "Firmware Security Scanner",
      description: "Automated vulnerability detection in embedded systems",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Security", "Firmware", "Analysis"],
      category: "Cybersecurity"
    }
  ];

  const handleViewMore = (projectId: number) => {
    console.log(`View more for project ${projectId}`);
    // Add navigation to project details
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Project Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our innovative projects that are transforming industries 
            through sustainable technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-[0_4px_20px_rgba(124,104,238,0.3)] transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100 hover:border-violet-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white bg-opacity-90 text-sm font-medium text-gray-700 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleViewMore(project.id)}
                  className="group/btn flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-violet-700 transition-all duration-300"
                >
                  View More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-violet-700 transition-all duration-300">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;