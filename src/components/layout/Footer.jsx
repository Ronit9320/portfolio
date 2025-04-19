import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-forest-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-autumn-300">About</h3>
            <p className="text-forest-100 mb-4">
              Game developer with a passion for low-level programming, 
              creating immersive experiences with C++, OpenGL, Vulkan, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" className="text-forest-100 hover:text-autumn-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/" className="text-forest-100 hover:text-autumn-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://youtube.com/" className="text-forest-100 hover:text-autumn-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-autumn-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-forest-100 hover:text-autumn-300 transition-colors">Projects</a></li>
              <li><a href="#tutorials" className="text-forest-100 hover:text-autumn-300 transition-colors">Tutorials</a></li>
              <li><a href="#about" className="text-forest-100 hover:text-autumn-300 transition-colors">About</a></li>
              <li><a href="#contact" className="text-forest-100 hover:text-autumn-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-autumn-300">Contact</h3>
            <p className="text-forest-100 mb-2">Feel free to reach out for collaborations or just a friendly chat.</p>
            <a href="mailto:contact@example.com" className="text-autumn-300 hover:text-autumn-200 transition-colors">
              contact@example.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-forest-700 text-center text-forest-300">
          <p>&copy; {new Date().getFullYear()} Game Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
