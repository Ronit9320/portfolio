import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="card-content">
              <h3 className="text-2xl mb-4">Background</h3>
              <p className="mb-4">
                I'm a passionate low-level game developer with a strong focus on performance optimization,
                memory management, and graphics programming. My journey in game development started with
                a fascination for how games work at their core, leading me to specialize in the technical
                aspects that make games run smoothly and efficiently.
              </p>
              
              <h3 className="text-2xl mb-4">Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-accent-2 rounded-lg">
                  <h4 className="text-xl mb-2">Game Engine Development</h4>
                  <ul className="list-disc list-inside">
                    <li>Custom engine architecture</li>
                    <li>Memory optimization</li>
                    <li>Resource management</li>
                    <li>Rendering pipeline</li>
                  </ul>
                </div>
                <div className="p-4 bg-accent-2 rounded-lg">
                  <h4 className="text-xl mb-2">Performance Optimization</h4>
                  <ul className="list-disc list-inside">
                    <li>SIMD programming</li>
                    <li>Cache optimization</li>
                    <li>Multithreading</li>
                    <li>Profiling and analysis</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="project-tag">C++</span>
                <span className="project-tag">OpenGL</span>
                <span className="project-tag">Vulkan</span>
                <span className="project-tag">DirectX</span>
                <span className="project-tag">Assembly</span>
                <span className="project-tag">SIMD</span>
                <span className="project-tag">Memory Management</span>
                <span className="project-tag">Multithreading</span>
              </div>

              <h3 className="text-2xl mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="text-xl">Senior Game Engine Developer</h4>
                  <p className="text-gray-600">Tech Games Studio | 2020 - Present</p>
                  <p className="mt-2">
                    Leading the development of a custom game engine, focusing on performance optimization
                    and memory management for large-scale open-world games.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="text-xl">Graphics Programmer</h4>
                  <p className="text-gray-600">Indie Game Studio | 2018 - 2020</p>
                  <p className="mt-2">
                    Developed and optimized rendering systems, implemented custom shaders, and improved
                    overall graphics performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 