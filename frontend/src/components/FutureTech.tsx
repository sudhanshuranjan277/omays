import React from 'react';
import { Rocket, Zap, Brain, Globe2, TrendingUp, Users } from 'lucide-react';

const FutureTech = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Learning",
      description: "Adaptive learning paths based on emerging technology trends"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Real-Time Updates",
      description: "Stay current with the latest tech stacks and industry developments"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      title: "Global Network",
      description: "Connect with tech professionals and innovators worldwide"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Career Acceleration",
      description: "Fast-track your career with cutting-edge skills and knowledge"
    }
  ];

  const handleJoinProgram = () => {
    console.log('Join Future Tech Program clicked');
    // Add join functionality
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Be Future-Ready with Omays
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our Future Tech Awareness program. 
            We help students and teams stay updated on emerging tech stacks through 
            real projects and interactive workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Why Future Tech Awareness Matters
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-violet-100 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Join the Future Tech Community
            </h3>
            <p className="text-white/90 mb-6">
              Get exclusive access to emerging technology insights, hands-on workshops, 
              and networking opportunities with industry leaders.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-white/80 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm">Tech Workshops</div>
              </div>
            </div>
            
            <button 
              onClick={handleJoinProgram}
              className="w-full px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Join Future Tech Program
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">Sarah Chen</h4>
              <p className="text-blue-600 text-sm mb-2">ML Engineer at Google</p>
              <p className="text-gray-600 text-sm">
                "Omays helped me transition from web development to AI in just 6 months!"
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">Marcus Rodriguez</h4>
              <p className="text-violet-600 text-sm mb-2">IoT Lead at Tesla</p>
              <p className="text-gray-600 text-sm">
                "The hands-on projects gave me the edge I needed for my dream job."
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">Priya Patel</h4>
              <p className="text-blue-600 text-sm mb-2">Startup Founder</p>
              <p className="text-gray-600 text-sm">
                "Built my sustainable tech startup using skills learned at Omays."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTech;