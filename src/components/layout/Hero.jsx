import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-autumn-50 via-forest-50 to-sky-50 opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-autumn-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-1/3 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-forest-800">
            <span className="text-autumn-700">Game Developer</span> with a passion for low-level programming
          </h1>
          <p className="text-lg md:text-xl text-forest-700 mb-8">
            Crafting immersive gaming experiences with C++, OpenGL, Vulkan, and more. 
            Exploring the intersection of performance and creativity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-autumn-600 text-white rounded-md hover:bg-autumn-700 transition-colors shadow-md"
            >
              View Projects
            </a>
            <a 
              href="#tutorials" 
              className="px-6 py-3 bg-forest-600 text-white rounded-md hover:bg-forest-700 transition-colors shadow-md"
            >
              Explore Tutorials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
