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
          Self-taught developer passionate about building from first principles
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
                    I'm a self-taught developer with a deep passion for game development and low-level programming. 
                    My journey began with a curiosity about how games work at their core, leading me to explore 
                    everything from graphics programming to system internals.
                  </p>
                  <p className="mb-6" style={forcedLeftStyle}>
                    As an Arch Linux enthusiast, I believe in understanding systems from the ground up. This philosophy 
                    drives my approach to game development, where I focus on building everything from first principles.
                  </p>

                  <h3
                    className="text-2xl font-trojan mb-4 text-accent-1"
                    style={forcedLeftStyle}
                  >
                    My Approach
                  </h3>
                  <p className="mb-6" style={forcedLeftStyle}>
                    I learn through building projects and diving deep into technical documentation. Currently developing 
                    my own game engine, exploring graphics programming with OpenGL and SDL, and contributing to open source 
                    projects. I regularly share my learning journey and insights on X.
                  </p>

                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    style={forcedLeftStyle}
                  >
                    <span className="project-tag">C++</span>
                    <span className="project-tag">OpenGL</span>
                    <span className="project-tag">SDL</span>
                    <span className="project-tag">Game Engines</span>
                    <span className="project-tag">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mythical-divider mx-auto w-3/4 my-12"></div>

          <h3 className="text-2xl font-trojan mb-6 text-center text-accent-1">
            Technical Interests
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="mythical-border h-full">
              <h4 className="text-xl font-trojan mb-4">
                Game Development
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Custom Game Engine Development</li>
                <li>Graphics Programming (OpenGL)</li>
                <li>Shader Development</li>
                <li>Raytracing</li>
                <li>Game Networking</li>
              </ul>
            </div>
            <div className="mythical-border h-full">
              <h4 className="text-xl font-trojan mb-4">
                System Programming
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kernel Development</li>
                <li>Low-level Optimization</li>
                <li>System Architecture</li>
                <li>Open Source Development</li>
                <li>Linux Systems</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-trojan mb-6 text-center text-accent-1">
            Current Focus
          </h3>

          <div className="space-y-6 mb-12">
            <div className="mythical-border">
              <h4 className="text-xl font-trojan">
                Game Engine Development
              </h4>
              <p className="text-gray-700">
                Building a custom game engine from scratch, focusing on modern graphics techniques,
                efficient memory management, and clean architecture. Exploring advanced concepts like
                raytracing and shader programming.
              </p>
            </div>
            <div className="mythical-border">
              <h4 className="text-xl font-trojan">Open Source & Learning</h4>
              <p className="text-gray-700">
                Actively contributing to open source projects while expanding my knowledge through
                technical books and hands-on project development. Sharing insights and experiences
                with the developer community on X.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="submit-button">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
