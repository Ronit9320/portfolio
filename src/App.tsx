import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const mainElement = mainRef.current
    if (!mainElement) return

    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        const currentScrollY = mainElement.scrollTop
        
        // Update scroll state with a higher threshold
        setIsScrolled(currentScrollY > 150)
        
        // Update last scroll position
        lastScrollY.current = currentScrollY
      }, 10)
    }

    mainElement.addEventListener('scroll', handleScroll)
    return () => {
      mainElement.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])
  
  const scrollDown = () => {
    const mainElement = mainRef.current;
    if (!mainElement) return;
    
    const targetPosition = window.innerHeight;
    // Immediately scroll to target position
    mainElement.scrollTop = targetPosition;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Theme subtle decorative elements */}
        <div className="theme-elements">
          <div className="theme-leaf"></div>
          <div className="theme-leaf"></div>
          <div className="theme-leaf"></div>
          <div className="theme-wave"></div>
        </div>

        {/* Sticky header - appears when scrolled */}
        <header className={`sticky-header ${isScrolled ? 'visible' : ''}`}>
          <h1 className="text-center text-glow font-trojan w-full">
            ⚜ Ronit Shah ⚜
          </h1>
        </header>

        {/* Main Content */}
        <main ref={mainRef} className="scroll-container-no-nav overflow-auto">
          <Routes>
            <Route path="/" element={
              <>
                <section className="hero-section">
                  <div className="container mx-auto text-center pt-64 relative z-10">
                    <div className="decorative-corner"></div>
                    <div className="decorative-corner"></div>
                    <div className="decorative-corner"></div>
                    <div className="decorative-corner"></div>
                    <div className="flex justify-center mb-8 mt-16 relative z-20">
                      <img
                        src="/profile2.png"
                        alt="Profile"
                        className="rounded-full border-4 border-accent-1 shadow-lg w-36 h-36 object-cover relative"
                        style={{
                          boxShadow:
                            "0 0 0 4px #7e4e31, 0 0 0 8px rgba(139, 69, 19, 0.3), 0 5px 15px rgba(0, 0, 0, 0.3)",
                        }}
                      />
                    </div>
                    <h1 className="font-trojan text-glow mb-6 hero-title text-center">
                      ⚜ Ronit Shah ⚜
                    </h1>
                    <p className="text-xl mb-10 max-w-2xl mx-auto animated-gradient p-6 rounded-lg shadow-sm">
                      Crafting games from the ground up. C++ enthusiast building engines, exploring graphics, 
                      and diving deep into system internals. I use Arch btw.
                    </p>
                    <div className="flex justify-center space-x-6 flex-wrap gap-4 mt-4">
                      <Link to="/projects" className="submit-button">View Projects</Link>
                      <Link to="/contact" className="submit-button">Get in Touch</Link>
                    </div>
                    
                    <div className="scroll-indicator-container mt-16" onClick={scrollDown}>
                      <div className="scroll-indicator">
                        <div className="scroll-arrow"></div>
                        <div className="scroll-arrow"></div>
                        <div className="scroll-arrow"></div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="mythical-divider mx-auto w-3/4"></div>

                <section className="section">
                  <div className="container mx-auto">
                    <h2 className="section-title text-center text-glow">Featured Projects</h2>
                    <div className="project-grid">
                      <div className="project-card">
                        <div className="project-image-container">
                          <img src="/project1.jpg" alt="Game Engine" className="project-image" />
                        </div>
                        <div className="project-content">
                          <h3 className="text-xl font-trojan mb-2">Game Engine</h3>
                          <p className="mb-4">Custom game engine with focus on low-level optimization and memory management. Designed for maximum performance with minimal resource usage.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">OpenGL</span>
                            <span className="project-tag">Custom Memory Allocator</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-card">
                        <div className="project-image-container">
                          <img src="/project2.jpg" alt="The Last Crusade" className="project-image" />
                        </div>
                        <div className="project-content">
                          <h3 className="text-xl font-trojan mb-2">The Last Crusade</h3>
                          <p className="mb-4">A game featuring immersive gameplay and modern graphics. Built with a custom rendering pipeline and physics system.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">OpenGL</span>
                            <span className="project-tag">SDL3</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-card">
                        <div className="project-image-container">
                          <img src="/project3.jpg" alt="CMake Generator CLI" className="project-image" />
                        </div>
                        <div className="project-content">
                          <h3 className="text-xl font-trojan mb-2">CMake Generator CLI</h3>
                          <p className="mb-4">Command-line tool for automatically generating CMake project structures. Streamlines project setup and build configuration management.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">CMake</span>
                            <span className="project-tag">CLI Development</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/projects" className="submit-button">View All Projects</Link>
                    </div>
                  </div>
                </section>

                <div className="mythical-divider mx-auto w-3/4"></div>

                <section className="section">
                  <div className="container mx-auto">
                    <h2 className="section-title text-center text-glow">Latest Blog Posts</h2>
                    <div className="blog-preview">
                      <div className="blog-card">
                        <div className="p-6">
                          <div className="blog-date">March 20, 2024</div>
                          <h3 className="text-xl font-trojan mb-2">Welcome to My Technical Blog</h3>
                          <p className="blog-excerpt">
                            Join me as I share insights from my journey in game development, graphics programming, 
                            and low-level systems. From raytracing and shaders to kernel development and networking, 
                            I'll be documenting my learnings and project experiences...
                          </p>
                          <Link to="/blog" className="fancy-link inline-block mt-4 font-semibold">Read More</Link>
                        </div>
                      </div>
                      <div className="blog-card bg-gradient-to-br from-autumn-50 to-forest-50">
                        <div className="p-6 flex flex-col items-center justify-center h-full">
                          <h3 className="text-xl font-trojan mb-4 text-forest-700">Technical Deep Dives Coming Soon</h3>
                          <p className="text-forest-600 text-center">
                            Upcoming articles about graphics programming, game engine architecture, system programming, 
                            and my experiences with open source contributions. Follow me on X for regular updates on my journey.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/blog" className="submit-button">Visit Blog</Link>
                    </div>
                  </div>
                </section>

                <div className="mythical-divider mx-auto w-3/4"></div>

                <section className="section">
                  <div className="container mx-auto">
                    <h2 className="section-title text-center text-glow">Get In Touch</h2>
                    <div className="max-w-2xl mx-auto mythical-border">
                      <p className="mb-6 text-center">
                        Interested in collaborating or discussing my work? Feel free to reach out.
                      </p>
                      <Link to="/contact" className="submit-button block mx-auto text-center w-fit">
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer-wrapper">
          <div className="container mx-auto">
            <div className="footer-content">
              <div className="footer-links flex justify-center space-x-4">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/projects" className="footer-link">Projects</Link>
                <Link to="/blog" className="footer-link">Blog</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </div>
              <p className="footer-copyright text-xs text-center">
                © {new Date().getFullYear()} Ronit Shah. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
