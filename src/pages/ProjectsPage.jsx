import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'neovim-config',
      title: "Neovim Config",
      description: "Custom Neovim configuration with focus on creating a productive development environment.",
      longDescription: "A highly customized Neovim configuration built with Lua, designed to create a productive and efficient development environment. Features include custom keybindings, plugins integration, and optimized workflows to enhance coding efficiency.",
      technologies: ["Lua", "Neovim", "API Integration", "Vim Script"],
      features: [
        "Custom keybinding system for enhanced productivity",
        "Integrated development tools and linters",
        "Personalized themes and UI enhancements",
        "Plugin management and configuration",
        "Tailored for multiple programming languages"
      ],
      imageUrl: "/path/to/neovim-config.jpg",
      githubUrl: "https://github.com/username/neovim-config"
    },
    {
      id: 'last-crusade',
      title: "The Last Crusade",
      description: "A game featuring immersive gameplay and modern graphics. Built with a custom rendering pipeline and physics system.",
      longDescription: "The Last Crusade is a game developed from scratch using C++, OpenGL, and SDL3. It features a custom rendering pipeline, physics system, and immersive gameplay mechanics.",
      technologies: ["C++", "OpenGL", "GLSL", "SDL3", "Custom Physics Engine"],
      features: [
        "Custom rendering pipeline with modern shader effects",
        "Advanced physics simulation for realistic interactions",
        "Immersive gameplay mechanics and design",
        "Optimized performance for smooth gameplay experience",
        "Modern graphics techniques and visual effects"
      ],
      imageUrl: "/path/to/last-crusade.jpg",
      githubUrl: "https://github.com/username/last-crusade"
    },
    {
      id: 'unnamed-game',
      title: "Unnamed Game",
      description: "Work-in-progress game using the same technology stack as The Last Crusade. Features advanced rendering techniques and gameplay mechanics.",
      longDescription: "This unnamed game project uses the same technology stack as The Last Crusade (C++, OpenGL, SDL3) but explores different gameplay mechanics and advanced rendering techniques. It's currently in development with regular updates and feature additions.",
      technologies: ["C++", "OpenGL", "GLSL", "SDL3", "Entity Component System"],
      features: [
        "Advanced rendering techniques and visual effects",
        "Unique gameplay mechanics and systems",
        "Efficient entity component system architecture",
        "Performance-optimized graphics pipeline",
        "Immersive game world and interactions"
      ],
      imageUrl: "/path/to/unnamed-game.jpg",
      githubUrl: "https://github.com/username/unnamed-game"
    },
    {
      id: 'cmake-gen',
      title: "CMake Generator CLI",
      description: "Command-line tool for automatically generating CMake project structures. Streamlines project setup and build configuration management.",
      longDescription: "The CMake Generator CLI is a powerful tool developed in C++ that automates the creation and management of CMake project structures. It simplifies the process of setting up build configurations for C++ projects, saving development time and reducing configuration errors.",
      technologies: ["C++", "CMake", "CLI Development", "Project Management"],
      features: [
        "Automated CMake project structure generation",
        "Template-based project creation",
        "Dependency management integration",
        "Cross-platform build configuration",
        "Custom build options and flags management"
      ],
      imageUrl: "/path/to/cmake-gen.jpg",
      githubUrl: "https://github.com/username/cmake-generator"
    },
    {
      id: 'game-engine',
      title: "Game Engine",
      description: "Custom game engine with focus on low-level optimization and memory management. Designed for maximum performance with minimal resource usage.",
      longDescription: "A custom-built game engine developed in C++ with a focus on low-level optimization and efficient memory management. The engine is designed to provide maximum performance with minimal resource usage, making it ideal for resource-intensive games and applications.",
      technologies: ["C++", "OpenGL", "Custom Memory Allocator", "Entity Component System"],
      features: [
        "Optimized memory management system",
        "Efficient rendering pipeline",
        "Custom physics simulation",
        "Data-oriented design approach",
        "Component-based architecture for flexibility"
      ],
      imageUrl: "/path/to/game-engine.jpg",
      githubUrl: "https://github.com/username/game-engine"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-autumn-50 via-white to-forest-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-forest-800 inline-block relative">
          <span className="relative z-10">Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-autumn-200 opacity-50 -z-10 transform -rotate-1"></span>
        </h1>
        
        <p className="text-lg text-forest-700 mb-12 max-w-3xl">
          A collection of my game development and low-level programming projects. 
          Each project represents a different challenge and learning experience in my journey.
        </p>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} id={project.id} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-autumn-100 to-forest-50' : 'from-forest-50 to-autumn-100'} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full overflow-hidden`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forest-800 overflow-hidden text-ellipsis">{project.title}</h2>
                  <p className="text-forest-700 mb-6 overflow-hidden">{project.longDescription}</p>
                  
                  <div className="mb-6 overflow-hidden">
                    <h3 className="text-lg font-medium text-autumn-700 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-white bg-opacity-50 rounded-full text-sm text-forest-700 overflow-hidden text-ellipsis"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6 overflow-hidden">
                    <h3 className="text-lg font-medium text-autumn-700 mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-autumn-600 mr-2 flex-shrink-0">•</span>
                          <span className="text-forest-700 overflow-hidden">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-forest-600 text-white rounded-md hover:bg-forest-700 transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
                
                <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-6 shadow-md h-64 flex items-center justify-center">
                  <div className="text-center text-forest-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Project Screenshot</p>
                    <p className="text-sm text-forest-500">(Placeholder)</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
