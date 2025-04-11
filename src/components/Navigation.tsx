import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 ${
      scrolled 
        ? 'bg-[#F8F4E3]/75 backdrop-blur-sm py-2 shadow-md' 
        : 'bg-gradient-to-r from-[#F8F4E3]/85 to-[#E8E4D3]/85 backdrop-blur-sm py-3'
    }`}>
      <ul className="flex justify-center space-x-8">
        <li>
          <Link 
            to="/projects" 
            className="font-['Trojan_Pro'] text-[#2F4F4F] hover:text-[#556B2F] transition-all duration-300 relative group text-lg"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link 
            to="/blog" 
            className="font-['Trojan_Pro'] text-[#2F4F4F] hover:text-[#556B2F] transition-all duration-300 relative group text-lg"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="font-['Trojan_Pro'] text-[#2F4F4F] hover:text-[#556B2F] transition-all duration-300 relative group text-lg"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="font-['Trojan_Pro'] text-[#2F4F4F] hover:text-[#556B2F] transition-all duration-300 relative group text-lg"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 