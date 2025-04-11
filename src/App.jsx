import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import './index.css';

function App() {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
    
    // Prevent scroll chaining
    document.body.style.overscrollBehavior = 'contain';
    
    return () => {
      document.body.style.overscrollBehavior = '';
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <AnimatedRoutes />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 