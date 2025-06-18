import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Computer Science & Engineering",
      institution: "G L Bajaj Group of Institutions",
      location: "Greater Noida, India",
      period: "Mar 2021 - Present",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      description: "Focused on software engineering, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "Intermediate",
      field: "Science & Mathematics",
      institution: "Jamia Millia Islamia",
      location: "New Delhi, India",
      period: "Mar 2019 - Mar 2021",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      description: "Strong foundation in mathematics, physics, and computer science fundamentals."
    },
    {
      degree: "Matriculation",
      field: "Science",
      institution: "Jamia Millia Islamia",
      location: "New Delhi, India",
      period: "Mar 2018 - Mar 2019",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      description: "Comprehensive secondary education with focus on science and technology."
    }
  ];

  return (
    <section id="education" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-20 framer-section-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Award className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Academic Background</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Educational
              <span className="block framer-gradient-text">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Building expertise through continuous learning and academic excellence
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`group framer-reveal framer-stagger-${index + 1}`}>
                <div className={`bg-gradient-to-br ${edu.bgColor} rounded-3xl border border-gray-200 p-8 md:p-12 framer-card relative overflow-hidden`}>

                  {/* Current Badge */}
                  {edu.current && (
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Current</span>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                    {/* Icon & Main Info */}
                    <div className="flex items-start gap-6 flex-1">
                      <div className={`w-20 h-20 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <GraduationCap className="w-10 h-10" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-xl text-gray-700 font-semibold mb-3">{edu.field}</p>
                        <p className="text-lg text-gray-600 font-medium mb-4">{edu.institution}</p>
                        <p className="text-gray-600 leading-relaxed font-light">{edu.description}</p>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="lg:text-right space-y-4 lg:min-w-[200px]">
                      <div className="flex items-center gap-2 text-gray-500 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Certifications */}
          <div className="mt-20 text-center framer-reveal">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Continuous Learning</h3>
            <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              Beyond formal education, I continuously expand my knowledge through online courses,
              workshops, and hands-on projects to stay current with emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AWS Certified", "React Expert", "Node.js Specialist", "MongoDB Professional", "TypeScript Advanced"].map((cert, index) => (
                <span
                  key={index}
                  className={`bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300 framer-magnetic border border-gray-300 framer-stagger-${index + 1}`}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
