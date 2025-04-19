import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Neovim Config",
      description: "Custom Neovim configuration with focus on creating a productive development environment. Features include custom keybindings, plugins, and optimized workflows.",
      technologies: ["Lua", "Neovim", "API Integration"],
      symbol: "⚜"
    },
    {
      title: "The Last Crusade",
      description: "A game featuring immersive gameplay and modern graphics. Built with a custom rendering pipeline and physics system.",
      technologies: ["C++", "OpenGL", "SDL3"],
      symbol: "⚜"
    },
    {
      title: "Unnamed Game",
      description: "Work-in-progress game using the same technology stack as The Last Crusade. Features advanced rendering techniques and gameplay mechanics.",
      technologies: ["C++", "OpenGL", "SDL3"],
      symbol: "⚜"
    },
    {
      title: "CMake Generator CLI",
      description: "Command-line tool for automatically generating CMake project structures. Streamlines project setup and build configuration management.",
      technologies: ["C++", "CMake", "CLI Development"],
      symbol: "⚜"
    },
    {
      title: "Game Engine",
      description: "Custom game engine with focus on low-level optimization and memory management. Designed for maximum performance with minimal resource usage.",
      technologies: ["C++", "OpenGL", "Custom Memory Allocator"],
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