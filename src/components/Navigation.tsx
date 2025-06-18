import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Code, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '#about', label: 'About', icon: <User className="w-4 h-4" /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { href: '#skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { href: '#projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { href: '#education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 framer-nav ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center framer-slide-left">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg framer-magnetic">
              MH
            </div>
            <div className="ml-4">
              <span className={`font-bold text-lg transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Mohammad Hassan
              </span>
              <div className={`text-xs font-light transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-gray-400'
              }`}>
                Full Stack Engineer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 framer-slide-right">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium framer-nav-item framer-magnetic ${
                  scrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 framer-magnetic ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border border-gray-200/50 rounded-3xl mt-4 p-6 shadow-2xl framer-scale-in">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-all duration-300 font-medium framer-magnetic"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;