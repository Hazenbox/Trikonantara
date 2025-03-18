
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
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md mx-auto mt-2 md:w-[95%] md:left-[2.5%] md:rounded-full" 
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-funnel font-bold relative overflow-hidden group text-[#0b2d5f]"
          >
            Trikonantara
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" scrolled={scrolled}>Home</NavLink>
            <NavLink to="/about" scrolled={scrolled}>About</NavLink>
            <NavLink to="/services" scrolled={scrolled}>Services</NavLink>
            <NavLink to="/projects" scrolled={scrolled}>Projects</NavLink>
            <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="block md:hidden text-[#0b2d5f]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
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
  scrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, scrolled }) => {
  return (
    <Link
      to={to}
      className={`relative ${scrolled ? 'text-pebble-darkBlue hover:text-pebble-blue' : 'text-pebble-offWhite hover:text-white'} transition-colors duration-300 group font-fustat`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-pebble-blue' : 'bg-white'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
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
      className="text-2xl text-[#0b2d5f] hover:text-lightblue-500 transition-all duration-300 font-fustat"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
