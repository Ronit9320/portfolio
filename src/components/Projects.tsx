import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Neovim Config",
      description: "Custom Neovim configuration with focus on creating a productive development environment. Features include custom keybindings, plugins, and optimized workflows.",
      technologies: ["Lua", "Neovim", "API Integration"],
      symbol: "⚜",
      githubUrl: "https://github.com/Ronit9320/NeoVim-Config"
    },
    {
      title: "The Last Crusade",
      description: "A game featuring immersive gameplay and modern graphics. Built with a custom rendering pipeline and physics system.",
      technologies: ["C++", "OpenGL", "SDL3"],
      symbol: "⚜",
      githubUrl: "https://github.com/Ronit9320/the-last-crusade"
    },
    {
      title: "CMake Generator CLI",
      description: "Command-line tool for automatically generating CMake project structures. Streamlines project setup and build configuration management.",
      technologies: ["C++", "CMake", "CLI Development"],
      symbol: "⚜",
      githubUrl: "https://github.com/Ronit9320/CMake-gen-CLI"
    },
    {
      title: "Game Engine",
      description: "Custom game engine with focus on low-level optimization and memory management. Designed for maximum performance with minimal resource usage.",
      technologies: ["C++", "OpenGL", "Custom Memory Allocator"],
      symbol: "⚜",
      githubUrl: "https://github.com/Ronit9320/game-engine"
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
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-trojan">{project.title}</h3>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
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
      </div>
    </section>
  );
};

export default Projects; 