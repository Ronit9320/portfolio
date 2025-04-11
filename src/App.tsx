import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'

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

  return (
    <Router>
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
                  <div className="container mx-auto text-center">
                    <div className="decorative-corner"></div>
                    <div className="decorative-corner"></div>
                    <div className="decorative-corner"></div>
                    <div className="decorative-corner"></div>
                    <h1 className="font-trojan text-glow mb-6 hero-title text-center">
                      ⚜ Ronit Shah ⚜
                    </h1>
                    <p className="text-xl mb-10 max-w-2xl mx-auto animated-gradient p-6 rounded-lg shadow-sm">
                      Specializing in low-level game development, focusing on performance optimization, 
                      memory management, and graphics programming.
                    </p>
                    <div className="flex justify-center space-x-6 flex-wrap gap-4 mt-4">
                      <Link to="/projects" className="submit-button">View Projects</Link>
                      <Link to="/contact" className="submit-button">Get in Touch</Link>
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
                          <img src="/project1.jpg" alt="Project 1" className="project-image" />
                        </div>
                        <div className="project-content">
                          <h3 className="text-xl font-trojan mb-2">Game Engine Core</h3>
                          <p className="mb-4">Custom game engine with focus on memory optimization and efficient rendering.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">OpenGL</span>
                            <span className="project-tag">Memory Management</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-card">
                        <div className="project-image-container">
                          <img src="/project2.jpg" alt="Project 2" className="project-image" />
                        </div>
                        <div className="project-content">
                          <h3 className="text-xl font-trojan mb-2">Physics Engine</h3>
                          <p className="mb-4">High-performance physics simulation with custom collision detection.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">SIMD</span>
                            <span className="project-tag">Optimization</span>
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
                          <div className="blog-date">March 15, 2024</div>
                          <h3 className="text-xl font-trojan mb-2">Memory Management in Game Development</h3>
                          <p className="blog-excerpt">
                            Exploring advanced memory management techniques for high-performance games...
                          </p>
                          <Link to="/blog/memory-management" className="fancy-link inline-block mt-4 font-semibold">Read More</Link>
                        </div>
                      </div>
                      <div className="blog-card">
                        <div className="p-6">
                          <div className="blog-date">March 10, 2024</div>
                          <h3 className="text-xl font-trojan mb-2">Optimizing Game Physics</h3>
                          <p className="blog-excerpt">
                            Techniques for improving physics simulation performance in real-time games...
                          </p>
                          <Link to="/blog/physics-optimization" className="fancy-link inline-block mt-4 font-semibold">Read More</Link>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/blog" className="submit-button">Read All Articles</Link>
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
