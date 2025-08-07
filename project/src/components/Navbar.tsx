import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      to={to} 
      className="text-black hover:text-primary-green transition-colors font-medium relative group"
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="transform hover:scale-105 transition-transform duration-300 -my-3"
            onClick={() => setIsOpen(false)}
            aria-label="Home"
          >
            <img 
              src="/exact-montage-logo.png"
              alt="Exact Montage" 
              className="h-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/werkwijze">Onze Werkwijze</NavLink>
            <NavLink to="/fotoboek">Fotoboek</NavLink>
            <Link 
              to="/contact"
              className="bg-primary-green text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black hover:text-primary-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="/werkwijze" onClick={() => setIsOpen(false)}>Onze Werkwijze</NavLink>
              <NavLink to="/fotoboek" onClick={() => setIsOpen(false)}>Fotoboek</NavLink>
              <Link 
                to="/contact"
                className="bg-primary-green text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105 inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="bg-primary-green text-black text-center py-1 font-medium text-lg border-b-[2px] border-primary-green">
        Timmerwerk / Renovatie / Montage
      </div>
    </nav>
  );
}