import React from 'react';

const TeachingSection = () => {
  const tutorials = [
    {
      title: "Getting Started with OpenGL",
      description: "A beginner-friendly guide to setting up and understanding the OpenGL graphics pipeline.",
      difficulty: "Beginner"
    },
    {
      title: "Low-Level Game Architecture",
      description: "Exploring efficient architecture patterns for performance-critical game systems.",
      difficulty: "Intermediate"
    },
    {
      title: "Vulkan Rendering Techniques",
      description: "Advanced rendering techniques and optimizations using the Vulkan API.",
      difficulty: "Advanced"
    }
  ];

  return (
    <section id="tutorials" className="py-16 md:py-24 bg-gradient-to-r from-sky-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest-800 inline-block relative">
          <span className="relative z-10">Learning Resources</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-autumn-200 opacity-50 -z-10 transform -rotate-1"></span>
        </h2>
        
        <p className="text-lg text-forest-700 mb-12 max-w-3xl">
          Documenting my journey in low-level game development through text-based tutorials and guides.
          Learn how to build games from the ground up with a focus on performance and understanding core principles.
        </p>
        
        <div className="space-y-6">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index} 
              className="p-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-forest-800 mb-2">{tutorial.title}</h3>
                  <p className="text-forest-600">{tutorial.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    tutorial.difficulty === 'Beginner' ? 'bg-forest-100 text-forest-700' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-autumn-100 text-autumn-700' :
                    'bg-sky-100 text-sky-700'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  <a 
                    href={`#tutorial-${index}`} 
                    className="px-4 py-2 bg-forest-600 text-white rounded-md hover:bg-forest-700 transition-colors shadow-sm whitespace-nowrap"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#all-tutorials" 
            className="inline-block px-6 py-3 border-2 border-forest-600 text-forest-700 rounded-md hover:bg-forest-50 transition-colors"
          >
            View All Tutorials
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
