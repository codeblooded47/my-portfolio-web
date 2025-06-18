import React from 'react';
import { Code2, Target, Users, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 framer-section-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Building the
              <span className="block framer-gradient-text">Future</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 framer-slide-left">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                  I am a passionate and creative full-stack software engineer based in India, 
                  dedicated to building products that make a real impact.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  I thrive on challenges that push me to learn new skills and improve existing ones. 
                  My approach combines technical excellence with extraordinary attention to detail, 
                  creating solutions that truly matter.
                </p>
              </div>
              
              <div className="flex items-center gap-3 text-blue-600 font-medium cursor-pointer hover:gap-4 transition-all duration-300">
                <span>Let's work together</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 framer-slide-right">
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 framer-card framer-stagger-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Full Stack</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">End-to-end solutions with cutting-edge technologies</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-3xl border border-red-200 framer-card framer-stagger-2">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Precision</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">Meticulous attention to every detail and interaction</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200 framer-card framer-stagger-3">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Leadership</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">Building inclusive teams and collaborative environments</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-3xl border border-orange-200 framer-card framer-stagger-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Innovation</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">Constantly evolving and embracing new challenges</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;