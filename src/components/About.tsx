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
    <section className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-glow">About Me</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          A passionate game developer focused on low-level programming and performance optimization.
        </p>

        <div className="mythical-divider mx-auto w-3/4 mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="mythical-border mb-12">
            <div className="p-6">
              <h3 className="text-2xl font-trojan mb-6 text-accent-1">
                My Journey
              </h3>
              <p className="mb-6">
                I learn through building projects and diving deep into technical documentation. Currently developing 
                my own game engine, exploring graphics programming with OpenGL and SDL, and contributing to open source 
                projects. I regularly share my learning journey and insights on X.
              </p>
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
          <div className="mythical-border">
            <div className="p-6">
              <p className="mb-6">
                Currently focused on developing a custom game engine with modern graphics features and efficient systems.
                Exploring advanced rendering techniques, physics simulation, and networking solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
