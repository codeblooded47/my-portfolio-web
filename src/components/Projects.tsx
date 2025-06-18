import React from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Server,
  Database,
  ArrowUpRight,
  Star,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CraneSeeker Marketplace",
      description:
        "Full-scale equipment booking platform connecting clients with vendors. Built with microservices architecture serving 10,000+ active users across multiple regions.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Stripe"],
      category: "Web App",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      title: "Student Housing Platform",
      description:
        "Comprehensive residence booking ecosystem with mobile app, admin panel, and payment integration. Led technical architecture as CTO of startup.",
      technologies: ["React Native", "GraphQL", "MySQL", "Azure", "Stripe"],
      category: "Full Stack",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },

    {
      title: "Diem CRM System",
      description:
        "Enterprise-grade CRM portal managing sales, payouts, and appointments. Streamlined business operations for 500+ sales representatives with real-time analytics.",
      technologies: ["Next.js", "MongoDB", "TypeScript", "Chart.js"],
      category: "CRM",
      icon: <Globe className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl framer-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl framer-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 framer-section-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Featured Work
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Selected
              <span className="block framer-gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              A showcase of impactful solutions built with cutting-edge
              technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group framer-scale-in framer-stagger-${index + 1} ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${project.bgColor} rounded-3xl border border-gray-200 p-8 framer-card relative overflow-hidden h-full`}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>
                    <span className="bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-white/70 text-gray-600 px-3 py-1 rounded-full text-xs font-medium border border-white/50">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium">
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-6 h-6 text-gray-400" />
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

export default Projects;
