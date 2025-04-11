import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'last-crusade',
      title: "The Last Crusade",
      description: "A reimagined version of Space Invaders with modern gameplay mechanics and visual effects. Built from scratch using C++ and OpenGL.",
      longDescription: "The Last Crusade is a modern take on the classic Space Invaders game, featuring enhanced graphics, dynamic enemy behavior, and a compelling narrative. The game was built from the ground up using C++ and OpenGL, with a focus on performance optimization and smooth gameplay.",
      technologies: ["C++", "OpenGL", "GLSL", "SDL2", "Custom Physics Engine"],
      features: [
        "Custom rendering pipeline with modern shader effects",
        "Dynamic enemy AI with varied attack patterns",
        "Procedurally generated levels for endless gameplay",
        "Performance-optimized collision detection system",
        "Immersive sound design with spatial audio"
      ],
      imageUrl: "/path/to/last-crusade.jpg",
      githubUrl: "https://github.com/username/last-crusade"
    },
    {
      id: 'boss-rush',
      title: "Boss Rush Game",
      description: "An untitled boss rush game featuring challenging encounters and precise combat mechanics. Developed with Godot Engine.",
      longDescription: "This untitled boss rush game focuses on delivering intense, challenging boss encounters that test players' skills and reflexes. Each boss features unique mechanics and attack patterns, requiring players to learn and adapt their strategies. The game was developed using Godot Engine, with custom shaders and a focus on responsive controls.",
      technologies: ["Godot Engine", "GDScript", "Custom Shaders", "Pixel Art"],
      features: [
        "Multiple unique boss encounters with distinct mechanics",
        "Tight, responsive controls for precise movement",
        "Progression system with unlockable abilities",
        "Hand-crafted pixel art and animations",
        "Dynamic difficulty scaling based on player performance"
      ],
      imageUrl: "/path/to/boss-rush.jpg",
      githubUrl: "https://github.com/username/boss-rush"
    },
    {
      id: 'vulkan-renderer',
      title: "Vulkan Renderer",
      description: "A custom rendering engine built with Vulkan API, focusing on modern graphics techniques and performance.",
      longDescription: "This Vulkan-based rendering engine was developed to explore modern graphics programming techniques while maintaining high performance. The project implements various rendering features like physically-based rendering, dynamic lighting, and post-processing effects, all optimized for modern GPU architectures.",
      technologies: ["C++", "Vulkan", "GLSL", "CMake", "ImGui"],
      features: [
        "Physically-based rendering pipeline",
        "Deferred shading with multiple light types",
        "Screen-space ambient occlusion and reflections",
        "Efficient GPU memory management",
        "Real-time shader hot-reloading for rapid development"
      ],
      imageUrl: "/path/to/vulkan-renderer.jpg",
      githubUrl: "https://github.com/username/vulkan-renderer"
    },
    {
      id: 'love2d-game',
      title: "LÖVE2D Platformer",
      description: "A lightweight 2D platformer game created with LÖVE2D framework and Lua scripting.",
      longDescription: "This platformer game showcases the capabilities of the LÖVE2D framework combined with efficient Lua scripting. The game features smooth physics, responsive controls, and a charming art style, all while maintaining excellent performance on various platforms.",
      technologies: ["Lua", "LÖVE2D", "Box2D Physics", "Tiled Map Editor"],
      features: [
        "Fluid character movement and platforming mechanics",
        "Level editor integration with Tiled",
        "Particle systems for visual effects",
        "Cross-platform compatibility",
        "Optimized collision detection and resolution"
      ],
      imageUrl: "/path/to/love2d-game.jpg",
      githubUrl: "https://github.com/username/love2d-platformer"
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
                <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-autumn-100 to-forest-50' : 'from-forest-50 to-autumn-100'} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forest-800">{project.title}</h2>
                  <p className="text-forest-700 mb-6">{project.longDescription}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-autumn-700 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-white bg-opacity-50 rounded-full text-sm text-forest-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-autumn-700 mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-autumn-600 mr-2">•</span>
                          <span className="text-forest-700">{feature}</span>
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
