import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F4F4F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-['Open_Sans'] text-sm">
              © {new Date().getFullYear()} Ronit Shah. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#ADD8E6] transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://youtube.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#ADD8E6] transition-colors duration-300"
            >
              YouTube
            </a>
            <a 
              href="https://x.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#ADD8E6] transition-colors duration-300"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 