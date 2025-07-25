import React from 'react';
import { GraduationCap, Users, BookOpen, Trophy, Star, Clock } from 'lucide-react';

const Masterclasses = () => {
  const programs = [
    {
      title: "IoT & Embedded Systems",
      description: "Hands-on training with real hardware projects",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 1200,
      features: ["Hardware Kits Included", "Industry Mentors", "Real Projects"]
    },
    {
      title: "AI in Sustainability",
      description: "Apply machine learning to environmental challenges",
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 800,
      features: ["Live Coding Sessions", "Case Studies", "Career Support"]
    },
    {
      title: "Reverse Engineering Fundamentals",
      description: "Learn to analyze and reconstruct legacy systems",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 950,
      features: ["Tool Access", "Project Portfolio", "Industry Exposure"]
    }
  ];

  const handleEnroll = (program: string) => {
    console.log(`Enrolling in ${program}`);
    // Add enrollment functionality
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-violet-400/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Train with the Engineers of the Future
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Product-based technical sessions designed for the next generation of engineers. 
            Learn through real projects and gain hands-on experience with cutting-edge technology.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-400/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-violet-100 text-blue-600 text-sm font-medium rounded-full border border-blue-200">
                  {program.level}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-500">{program.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {program.description}
              </p>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {program.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {program.students.toLocaleString()} students
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => handleEnroll(program.title)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-8 text-center">
            Why Choose Our Training Programs?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real Projects</h4>
              <p className="text-sm text-gray-600">Work on actual industry projects with real-world impact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Mentors</h4>
              <p className="text-sm text-gray-600">Learn from industry professionals and experienced engineers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certification</h4>
              <p className="text-sm text-gray-600">Get industry-recognized certificates upon completion</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-violet-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Career Support</h4>
              <p className="text-sm text-gray-600">Job placement assistance and career guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterclasses;