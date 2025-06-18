import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold">
                MH
              </div>
              <div>
                <p className="font-semibold">Mohammad Hassan</p>
                <p className="text-gray-400 text-sm">Full Stack Engineer</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 font-light">
                © 2025 Mohammad Hassan. Crafted with precision and passion.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;