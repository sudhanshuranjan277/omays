import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  QrCode, 
  Download, 
  Smartphone,
  Laptop,
  Cpu,
  Sun,
  Bot,
  RotateCcw
} from 'lucide-react';

const ContactCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Omays Technologies
ORG:Omays
URL:https://omays.tech
EMAIL:contact@omays.tech
TEL:+1-555-OMAYS-01
ADR:;;123 Innovation Drive;Tech City;TC;12345;USA
NOTE:Rebuilding the Future. Sustainably.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'omays-contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const tags = [
    { name: "CAD", icon: <Laptop className="w-4 h-4" />, color: "bg-blue-100 text-blue-600" },
    { name: "AI", icon: <Cpu className="w-4 h-4" />, color: "bg-purple-100 text-purple-600" },
    { name: "PCB", icon: <Smartphone className="w-4 h-4" />, color: "bg-green-100 text-green-600" },
    { name: "Solar", icon: <Sun className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-600" },
    { name: "Robotics", icon: <Bot className="w-4 h-4" />, color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <section id="contact" className="py-12 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-violet-400/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your ideas into sustainable technology solutions? 
            Let's connect and build the future together.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-80 h-96 perspective-1000">
            <div 
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={handleFlip}
            >
              {/* Front of Card */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl backface-hidden p-8 flex flex-col justify-center border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">O</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Omays</h3>
                  <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-medium">Re-engineering Innovation</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">123 Innovation Drive, Tech City</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">contact@omays.tech</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">+1-555-OMAYS-01</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-xs">Click to flip</span>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl shadow-xl backface-hidden rotate-y-180 p-8 flex flex-col justify-center text-white">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-sm text-white/80">Scan to visit omays.tech</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {tags.map((tag, index) => (
                    <div 
                      key={index}
                      className="bg-white/20 px-3 py-1 rounded-full flex items-center space-x-1"
                    >
                      {tag.icon}
                      <span className="text-xs font-medium">{tag.name}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownloadVCard();
                  }}
                  className="w-full px-4 py-3 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download vCard
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6 text-center">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;