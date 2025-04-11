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
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        const currentScrollY = scrollContainer.scrollTop
        const scrollDiff = currentScrollY - lastScrollY.current
        
        // Update scroll state
        setIsScrolled(currentScrollY > 100)
        
        // Update last scroll position
        lastScrollY.current = currentScrollY
      }, 10)
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  return (
    <Router>
      <div className="App">
        {/* Theme Elements */}
        <div className="theme-leaf"></div>
        <div className="theme-leaf"></div>
        <div className="theme-leaf"></div>
        <div className="theme-wave"></div>

        {/* Header */}
        <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-content">
            <h1 className="text-4xl font-trojan">
              <span className="header-symbol">⚜</span>
              Ronit Shah
              <span className="header-symbol">⚜</span>
            </h1>
            {!isScrolled && (
              <p className="text-lg text-gray-600 mt-2">
                Low-Level Game Developer
              </p>
            )}
          </div>
        </header>

        {/* Navigation */}
        <nav className="nav-container">
          <div className="container mx-auto">
            <ul className="flex justify-center space-x-8">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="scroll-container">
          <Routes>
            <Route path="/" element={
              <>
                <section className="hero-section">
                  <div className="container mx-auto text-center">
                    <h2 className="section-title">Welcome</h2>
                    <p className="text-xl mb-8">
                      Specializing in low-level game development, focusing on performance optimization, 
                      memory management, and graphics programming.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Link to="/projects" className="submit-button">View Projects</Link>
                      <Link to="/contact" className="submit-button">Get in Touch</Link>
                    </div>
                  </div>
                </section>

                <section className="section">
                  <div className="container mx-auto">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="project-grid">
                      <div className="project-card">
                        <img src="/project1.jpg" alt="Project 1" className="project-image" />
                        <div className="project-content">
                          <h3>Game Engine Core</h3>
                          <p>Custom game engine with focus on memory optimization and efficient rendering.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">OpenGL</span>
                            <span className="project-tag">Memory Management</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-card">
                        <img src="/project2.jpg" alt="Project 2" className="project-image" />
                        <div className="project-content">
                          <h3>Physics Engine</h3>
                          <p>High-performance physics simulation with custom collision detection.</p>
                          <div className="project-tags">
                            <span className="project-tag">C++</span>
                            <span className="project-tag">SIMD</span>
                            <span className="project-tag">Optimization</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="section">
                  <div className="container mx-auto">
                    <h2 className="section-title">Latest Blog Posts</h2>
                    <div className="blog-preview">
                      <div className="blog-card">
                        <div className="p-6">
                          <div className="blog-date">March 15, 2024</div>
                          <h3>Memory Management in Game Development</h3>
                          <p className="blog-excerpt">
                            Exploring advanced memory management techniques for high-performance games...
                          </p>
                          <Link to="/blog/memory-management" className="text-accent-1">Read More</Link>
                        </div>
                      </div>
                      <div className="blog-card">
                        <div className="p-6">
                          <div className="blog-date">March 10, 2024</div>
                          <h3>Optimizing Game Physics</h3>
                          <p className="blog-excerpt">
                            Techniques for improving physics simulation performance in real-time games...
                          </p>
                          <Link to="/blog/physics-optimization" className="text-accent-1">Read More</Link>
                        </div>
                      </div>
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
              <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/projects" className="footer-link">Projects</Link>
                <Link to="/blog" className="footer-link">Blog</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </div>
              <p className="footer-copyright">
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
