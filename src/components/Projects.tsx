import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Game Engine Architecture",
      description: "Custom game engine with focus on low-level optimization and memory management. Designed for maximum performance with minimal resource usage.",
      technologies: ["C++", "OpenGL", "Custom Memory Allocator"],
      symbol: "⚜"
    },
    {
      title: "Physics Simulation",
      description: "Real-time physics engine with collision detection and response. Optimized for large-scale simulations with thousands of interacting objects.",
      technologies: ["C++", "SIMD", "Multithreading"],
      symbol: "⚜"
    },
    {
      title: "Graphics Pipeline",
      description: "Modern graphics pipeline implementation with PBR rendering. Features include dynamic lighting, shadow mapping, and post-processing effects.",
      technologies: ["Vulkan", "GLSL", "Compute Shaders"],
      symbol: "⚜"
    },
    {
      title: "Audio Engine",
      description: "Custom audio system with 3D spatial sound and dynamic mixing. Designed for low-latency playback with minimal CPU overhead.",
      technologies: ["C++", "OpenAL", "DSP"],
      symbol: "⚜"
    },
    {
      title: "Entity Component System",
      description: "High-performance ECS architecture for game object management. Optimized for cache coherency and parallel processing.",
      technologies: ["C++", "Data-Oriented Design", "Memory Pools"],
      symbol: "⚜"
    },
    {
      title: "Networking Framework",
      description: "Low-latency networking solution for real-time multiplayer games. Includes state synchronization and prediction algorithms.",
      technologies: ["C++", "UDP", "Serialization"],
      symbol: "⚜"
    },
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-glow">My Projects</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          A collection of my technical work in game development, focusing on low-level systems and performance optimization.
        </p>
        
        <div className="mythical-divider mx-auto w-3/4 mb-12"></div>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
            >
              <div className="project-content">
                <h3 className="text-xl font-trojan mb-3">{project.title}</h3>
                <p className="mb-4 text-gray-700">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="project-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mythical-divider mx-auto w-3/4 mt-12"></div>
        
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto mythical-border p-6">
            <h3 className="text-xl font-trojan mb-4">Looking for custom development?</h3>
            <p className="mb-6">
              I'm available for consulting on game engine architecture, performance optimization, 
              and graphics programming.
            </p>
            <a href="/contact" className="submit-button">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 