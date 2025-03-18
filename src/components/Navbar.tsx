
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-pebble-beige/90 backdrop-blur-md py-3 shadow-md mx-auto mt-2 md:w-[95%] md:left-[2.5%] md:rounded-full" 
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold relative overflow-hidden group text-pebble-darkBlue"
          >
            <span className="inline-block">
              Trikonantara
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pebble-taupe transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="block md:hidden text-pebble-darkBlue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-pebble-cream bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative text-pebble-darkBlue hover:text-pebble-taupe transition-colors duration-300 group font-fustat"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pebble-taupe transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <Link
      to={to}
      className="text-2xl text-pebble-darkBlue hover:text-pebble-taupe transition-all duration-300 font-fustat"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
