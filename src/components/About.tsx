import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Import the About-specific CSS file

const About: React.FC = () => {
  // Inline styles to forcefully override any centering
  const forcedLeftStyle = {
    textAlign: "left" as const,
    marginLeft: 0,
    display: "block",
    width: "100%",
  };

  return (
    <section className="section about-section">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-glow">About Me</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          A passionate low-level game developer with a focus on performance and
          efficiency.
        </p>

        <div className="mythical-divider mx-auto w-3/4 mb-12"></div>

        <div className="max-w-4xl mx-auto">
          {/* Background Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Image */}
              <div className="profile-image mx-auto md:mx-0">
                <img
                  src="/profile2.png"
                  alt="Profile"
                  className="rounded-full border-4 border-accent-1 shadow-lg w-48 h-48 object-cover"
                  style={{
                    boxShadow:
                      "0 0 0 4px #7e4e31, 0 0 0 8px rgba(139, 69, 19, 0.3), 0 5px 15px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </div>

              {/* Background Text */}
              <div className="content-column md:col-span-2">
                <div className="background-content" style={forcedLeftStyle}>
                  <h3
                    className="text-2xl font-trojan mb-4 text-accent-1 mt-0"
                    style={forcedLeftStyle}
                  >
                    Background
                  </h3>
                  <p className="mb-4" style={forcedLeftStyle}>
                    I'm a passionate low-level game developer with a strong
                    focus on performance optimization, memory management, and
                    graphics programming. My journey in game development started
                    with a fascination for how games work at their core, leading
                    me to specialize in the technical aspects that make games
                    run smoothly and efficiently.
                  </p>
                  <p className="mb-6" style={forcedLeftStyle}>
                    With over 6 years of experience in the industry, I've worked
                    on various projects ranging from indie games to AAA titles,
                    always focusing on optimizing performance and creating
                    robust technical foundations.
                  </p>

                  <h3
                    className="text-2xl font-trojan mb-4 text-accent-1"
                    style={forcedLeftStyle}
                  >
                    My Approach
                  </h3>
                  <p className="mb-6" style={forcedLeftStyle}>
                    I believe that great games are built on solid technical
                    foundations. By focusing on the low-level aspects of game
                    development, I help create experiences that not only look
                    beautiful but also run efficiently across a wide range of
                    hardware.
                  </p>

                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    style={forcedLeftStyle}
                  >
                    <span className="project-tag">Game Engine Development</span>
                    <span className="project-tag">Graphics Programming</span>
                    <span className="project-tag">
                      Performance Optimization
                    </span>
                    <span className="project-tag">Memory Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mythical-divider mx-auto w-3/4 my-12"></div>

          <h3 className="text-2xl font-trojan mb-6 text-center text-accent-1">
            Technical Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="mythical-border h-full">
              <h4 className="text-xl font-trojan mb-4">
                Game Engine Development
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Custom engine architecture</li>
                <li>Memory optimization</li>
                <li>Resource management</li>
                <li>Rendering pipeline</li>
                <li>Cross-platform development</li>
              </ul>
            </div>
            <div className="mythical-border h-full">
              <h4 className="text-xl font-trojan mb-4">
                Performance Optimization
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>SIMD programming</li>
                <li>Cache optimization</li>
                <li>Multithreading</li>
                <li>Profiling and analysis</li>
                <li>Memory layout optimization</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-trojan mb-6 text-center text-accent-1">
            Professional Experience
          </h3>

          <div className="space-y-6 mb-12">
            <div className="mythical-border">
              <h4 className="text-xl font-trojan">
                Senior Game Engine Developer
              </h4>
              <p className="text-gray-600 mb-2">
                Tech Games Studio | 2020 - Present
              </p>
              <p className="text-gray-700">
                Leading the development of a custom game engine, focusing on
                performance optimization and memory management for large-scale
                open-world games. Implemented a custom memory allocator that
                reduced fragmentation by 60% and improved loading times by 40%.
              </p>
            </div>
            <div className="mythical-border">
              <h4 className="text-xl font-trojan">Graphics Programmer</h4>
              <p className="text-gray-600 mb-2">
                Indie Game Studio | 2018 - 2020
              </p>
              <p className="text-gray-700">
                Developed and optimized rendering systems, implemented custom
                shaders, and improved overall graphics performance. Created a
                deferred rendering pipeline that supported hundreds of dynamic
                lights with minimal performance impact.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="submit-button">
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
