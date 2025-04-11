import React from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../hooks/useSmoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollToSection } = useSmoothScroll();

  // Handle scroll event to change navbar appearance
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home first
      return;
    }
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-autumn-100 to-forest-50 bg-opacity-90'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-forest-800 font-medium text-xl">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-autumn-700">Game</span>
            <span className="text-forest-700">Dev</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/projects" 
            className="text-forest-700 hover:text-autumn-600 transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/tutorials" 
            className="text-forest-700 hover:text-autumn-600 transition-colors"
          >
            Tutorials
          </Link>
          <button 
            onClick={() => handleNavClick('tech')} 
            className="text-forest-700 hover:text-autumn-600 transition-colors"
          >
            Skills
          </button>
          <Link 
            to="/contact" 
            className="text-forest-700 hover:text-autumn-600 transition-colors"
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-autumn-50 rounded-md shadow-lg p-4 absolute right-6 left-6 z-10">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/projects" 
              className="text-forest-700 hover:text-autumn-600 transition-colors px-4 py-2 rounded-md hover:bg-autumn-100 text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/tutorials" 
              className="text-forest-700 hover:text-autumn-600 transition-colors px-4 py-2 rounded-md hover:bg-autumn-100 text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <button 
              onClick={() => handleNavClick('tech')} 
              className="text-forest-700 hover:text-autumn-600 transition-colors px-4 py-2 rounded-md hover:bg-autumn-100 text-left"
            >
              Skills
            </button>
            <Link 
              to="/contact" 
              className="text-forest-700 hover:text-autumn-600 transition-colors px-4 py-2 rounded-md hover:bg-autumn-100 text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
