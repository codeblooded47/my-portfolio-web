import React from "react";
import { Calendar, MapPin, Briefcase, ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Dreamprovider Pvt. Ltd.",
      location: "Remote",
      period: "July 2022 - Sept 2023",
      description:
        "Built and led the entire technology team from ground up. Defined technical vision and strategy. Established development processes and drove innovation across all product lines.",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Technical Assistant",
      company: "Cramer Müller & Partner",
      location: "Remote",
      period: "Nov 2021 - May 2022",
      description:
        "Led a cross-functional team of 3 engineers. Made critical architectural decisions and drove feature development for enterprise platform solutions.",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Freelance Developer",
      company: "Truelancer",
      location: "Remote",
      period: "Nov 2020 - Nov 2021",
      description:
        "Delivered complex full-stack projects from conception to deployment. Collaborated with international teams and managed multiple client relationships simultaneously.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl framer-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl framer-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 framer-section-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <Briefcase className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Experience
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Professional
              <span className="block framer-gradient-text">Journey</span>
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group framer-reveal framer-stagger-${index + 1}`}
              >
                <div className="bg-white rounded-3xl border border-gray-200 hover:border-gray-300 p-8 md:p-12 framer-card relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-5 rounded-full blur-2xl`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          {exp.current && (
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                                Current
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-gray-700 font-medium mb-4">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                          {exp.description}
                        </p>
                      </div>

                      <div className="lg:text-right space-y-3">
                        <div className="flex items-center gap-2 text-gray-500 lg:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 lg:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer hover:gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <span className="text-sm">View details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
