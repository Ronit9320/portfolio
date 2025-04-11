import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-[#F8F4E3]/95 backdrop-blur-sm py-2 shadow-sm">
      <div className="container mx-auto px-4">
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
      </div>
    </nav>
  );
};

export default Navigation; 