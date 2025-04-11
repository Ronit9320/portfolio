import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'C++', category: 'Languages' },
    { name: 'OpenGL', category: 'Graphics' },
    { name: 'Vulkan', category: 'Graphics' },
    { name: 'LOVE2D', category: 'Frameworks' },
    { name: 'Lua', category: 'Languages' },
    { name: 'Godot', category: 'Engines' },
    { name: 'Arch Linux', category: 'Environment' },
    { name: 'Neovim', category: 'Tools' }
  ];

  return (
    <section id="tech" className="py-16 md:py-24 bg-gradient-to-l from-forest-50 to-autumn-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-forest-800 inline-block relative">
          <span className="relative z-10">Technologies & Skills</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-autumn-200 opacity-50 -z-10 transform -rotate-1"></span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="p-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="text-autumn-600 text-sm mb-1">{tech.category}</div>
              <div className="text-forest-800 font-medium text-lg">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
