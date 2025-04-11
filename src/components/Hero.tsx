import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-all duration-500 ${isScrolled ? 'fixed top-0 w-full z-50 bg-[#F5F5DC]/90 backdrop-blur-sm shadow-lg' : 'relative'}`}>
      <div className={`text-center ${isScrolled ? 'py-4' : 'py-32'}`}>
        <div className="flex items-center justify-center gap-4">
          <span className="text-[#556B2F] text-4xl transform rotate-90">⚜</span>
          <h1 className={`font-['Trojan_Pro'] transition-all duration-500 ${
            isScrolled ? 'text-3xl' : 'text-6xl'
          } text-[#2F4F4F]`}>
            Ronit Shah
          </h1>
          <span className="text-[#556B2F] text-4xl transform -rotate-90">⚜</span>
        </div>
        {!isScrolled && (
          <p className="mt-4 text-xl text-[#696969] font-['Open_Sans']">
            Low-Level Game Developer
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero; 