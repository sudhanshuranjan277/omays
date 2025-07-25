import React, { useState } from 'react';
import { 
  Mail, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Leaf, 
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const links = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'Whitepapers', href: '#papers' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-600 via-violet-700 to-purple-800 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-circuit-pattern"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Omays</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Re-engineering innovation through cutting-edge reverse engineering 
              and cutting-edge technology solutions. Join us in creating a smarter, 
              more innovative world.
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white/20 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/20"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-lg hover:from-blue-600 hover:to-violet-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-blue-500/25"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-white/80 text-sm">
              © 2025 Omays Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;