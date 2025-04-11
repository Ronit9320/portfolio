import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Game Engine Architecture",
      description: "Custom game engine with focus on low-level optimization and memory management",
      technologies: ["C++", "OpenGL", "Custom Memory Allocator"],
      symbol: "⚔"
    },
    {
      title: "Physics Simulation",
      description: "Real-time physics engine with collision detection and response",
      technologies: ["C++", "SIMD", "Multithreading"],
      symbol: "🛡"
    },
    {
      title: "Graphics Pipeline",
      description: "Modern graphics pipeline implementation with PBR rendering",
      technologies: ["Vulkan", "GLSL", "Compute Shaders"],
      symbol: "✨"
    },
  ];

  return (
    <section className="section bg-[#FFFACD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-['Trojan_Pro'] text-[#2F4F4F] text-center mb-12 mythical-border">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card p-6"
            >
              <div className="text-4xl mb-4 text-[#556B2F]">
                {project.symbol}
              </div>
              <h3 className="text-2xl font-['Trojan_Pro'] text-[#556B2F] mb-4">
                {project.title}
              </h3>
              <p className="text-[#696969] font-['Open_Sans'] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-[#ADD8E6] text-[#2F4F4F] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 