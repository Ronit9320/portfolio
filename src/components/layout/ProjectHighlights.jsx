import React from 'react';

const ProjectHighlights = () => {
  const projects = [
    {
      title: "The Last Crusade",
      description: "A reimagined version of Space Invaders with modern gameplay mechanics and visual effects.",
      tags: ["C++", "OpenGL", "Game Design"]
    },
    {
      title: "Boss Rush Game",
      description: "An untitled boss rush game featuring challenging encounters and precise combat mechanics.",
      tags: ["Godot", "Game Design", "Pixel Art"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-forest-800 inline-block relative">
          <span className="relative z-10">Featured Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-autumn-200 opacity-50 -z-10 transform -rotate-1"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Project background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-100 to-autumn-100 opacity-70"></div>
              
              <div className="relative p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-forest-800 mb-3">{project.title}</h3>
                <p className="text-forest-700 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-white bg-opacity-50 rounded-full text-sm text-forest-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`#project-${index}`} 
                  className="inline-block px-4 py-2 bg-autumn-600 text-white rounded-md hover:bg-autumn-700 transition-colors shadow-sm self-start"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#all-projects" 
            className="inline-block px-6 py-3 border-2 border-forest-600 text-forest-700 rounded-md hover:bg-forest-50 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
