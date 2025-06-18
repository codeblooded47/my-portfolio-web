import React from "react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Server,
  Globe,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-7 h-7" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-7 h-7" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      skills: [
        "Node.js",
        "NestJS",
        "MolecularJS",
        "Go-lang",
        "Python",
        "Express.js",
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-7 h-7" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      skills: ["React Native", "Expo", "Flutter", "Dart", "Android Studio"],
    },
    {
      title: "Database",
      icon: <Database className="w-7 h-7" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "GraphQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-7 h-7" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      title: "Programming",
      icon: <Code className="w-7 h-7" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C++"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 framer-section-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Skills & Technologies
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Technical
              <span className="block framer-gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group framer-scale-in framer-stagger-${index + 1}`}
              >
                <div
                  className={`bg-gradient-to-br ${category.bgColor} rounded-3xl border ${category.borderColor} p-8 framer-card relative overflow-hidden`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-white/70 hover:bg-white px-4 py-3 rounded-2xl text-gray-800 font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-default border border-white/50"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                    {category.skills.length}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-20 text-center framer-reveal">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "VIM",
                "Git",
                "REST APIs",
                "GraphQL",
                "Microservices",
                "PDF Generation",
                "WhatsApp API",
                "USSD",
                "Strapi",
              ].map((tool, index) => (
                <span
                  key={index}
                  className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-all duration-300 framer-magnetic shadow-lg framer-stagger-${
                    index + 1
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
