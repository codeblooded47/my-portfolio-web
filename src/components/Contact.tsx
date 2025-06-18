import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl framer-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl framer-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 framer-section-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <MessageSquare className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Let's Create
              <span className="block framer-gradient-text">Something Amazing</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and build something extraordinary together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Contact Information */}
            <div className="space-y-12 framer-slide-left">
              
              {/* Intro */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Ready to collaborate?</h3>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  I'm always excited to work on innovative projects and help bring creative visions to reality. 
                  Whether you need a full-stack solution or technical consultation, let's connect.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-8">
                <a href="mailto:mohd.hassan.dbg@gmail.com" className="group flex items-center gap-6 text-gray-300 hover:text-white transition-all duration-300 framer-magnetic">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Email</p>
                    <p className="text-gray-400 font-light">mohd.hassan.dbg@gmail.com</p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Send a message</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
                
                <a href="tel:+918709759624" className="group flex items-center gap-6 text-gray-300 hover:text-white transition-all duration-300 framer-magnetic">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Phone</p>
                    <p className="text-gray-400 font-light">+91 8709759624</p>
                    <div className="flex items-center gap-2 text-green-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Call directly</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
                
                <div className="group flex items-center gap-6 text-gray-300 framer-magnetic">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Location</p>
                    <p className="text-gray-400 font-light">New Delhi, India</p>
                    <p className="text-gray-500 text-sm mt-1">Available for remote work</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-6 text-gray-300 framer-magnetic">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Availability</p>
                    <p className="text-gray-400 font-light">Open for new projects</p>
                    <p className="text-green-400 text-sm mt-1">Typically responds within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="framer-slide-right">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 framer-card">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Start a Conversation
                </h3>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-md font-light"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-md font-light"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Project Type</label>
                    <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-md font-light">
                      <option value="" className="bg-gray-900">Select project type</option>
                      <option value="web" className="bg-gray-900">Web Application</option>
                      <option value="mobile" className="bg-gray-900">Mobile App</option>
                      <option value="backend" className="bg-gray-900">Backend Development</option>
                      <option value="consultation" className="bg-gray-900">Technical Consultation</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none transition-all duration-300 backdrop-blur-md font-light"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 framer-button framer-magnetic shadow-2xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm font-light text-center">
                    I'll get back to you within 24 hours. Looking forward to hearing about your project!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;