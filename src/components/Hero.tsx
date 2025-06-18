import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl framer-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl framer-float-delayed"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="min-h-screen flex flex-col justify-center space-y-12">
            
            {/* Status Badge */}
            <div className="framer-hero-badge">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Available for work</span>
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
            
            {/* Main Title */}
            <div className="framer-hero-title">
              <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
                <div className="framer-text-reveal">
                  <span className="block framer-gradient-text">Mohammad</span>
                </div>
                <div className="framer-text-reveal">
                  <span className="block text-white/80 framer-stagger-2">Hassan</span>
                </div>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="framer-hero-subtitle">
              <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-4xl leading-relaxed">
                Full Stack Engineer crafting
                <span className="text-white font-medium"> exceptional digital experiences </span>
                with precision and creativity.
              </p>
            </div>
            
            {/* Location */}
            <div className="framer-hero-subtitle framer-stagger-2">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center framer-glow">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg font-light">Based in New Delhi, India</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="framer-hero-cta">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 framer-button framer-magnetic shadow-2xl">
                  <Download className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Download Resume
                </button>
                
                <div className="flex gap-4">
                  <button className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 transition-all duration-300 hover:scale-110 framer-magnetic">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl transition-all duration-300 hover:scale-110 framer-magnetic shadow-lg">
                    <Linkedin className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Links */}
            <div className="framer-hero-contact">
              <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
                <a href="mailto:mohd.hassan.dbg@gmail.com" className="hover:text-white transition-colors duration-300 font-light">
                  mohd.hassan.dbg@gmail.com
                </a>
                <a href="tel:+918709759624" className="hover:text-white transition-colors duration-300 font-light">
                  +91 8709759624
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 framer-hero-contact">
        <div className="flex flex-col items-center gap-3 text-gray-500">
          <span className="text-xs font-light uppercase tracking-wider">Scroll to explore</span>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center framer-magnetic">
            <ArrowDown className="w-4 h-4 text-white animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;