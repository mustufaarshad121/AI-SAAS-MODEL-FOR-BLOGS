import React, { useState, useEffect } from 'react';
import { PenSquare, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <PenSquare className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-white">Writers.AI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/how-it-works">How it works</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/resources">Resources</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-white hover:text-purple-400 transition-colors">
                Login
              </Link>
              <Link 
                to="/dashboard" 
                className="btn-primary"
              >
                Get Started - It's Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col space-y-4 p-4">
              <NavLink to="/features" mobile>Features</NavLink>
              <NavLink to="/how-it-works" mobile>How it works</NavLink>
              <NavLink to="/pricing" mobile>Pricing</NavLink>
              <NavLink to="/resources" mobile>Resources</NavLink>
              <Link to="/login" className="text-white hover:text-purple-400 transition-colors">
                Login
              </Link>
              <Link 
                to="/dashboard" 
                className="btn-primary text-center"
              >
                Get Started - It's Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children, mobile = false }: { to: string; children: React.ReactNode; mobile?: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        mobile ? 'block' : 'inline-block'
      } relative text-${isActive ? 'white' : 'gray-300'} hover:text-white transition-colors`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0'
      }`} />
    </Link>
  );
}