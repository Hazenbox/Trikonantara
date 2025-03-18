
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Send } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md mx-auto mt-2 md:w-[95%] max-w-7xl md:left-[50%] md:transform md:-translate-x-1/2 md:rounded-full" 
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/56b9bfab-5919-424f-b808-0a73bd735e7f.png" 
              alt="Trikonantara Logo" 
              className="h-8 mr-2" 
            />
            <span className={`text-2xl font-funnel font-bold relative overflow-hidden group ${
              scrolled ? 'text-[#0b2d5f]' : 'text-white'
            }`}>
              Trikonantara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              onClick={() => scrollToSection("about-section")} 
              scrolled={scrolled}
            >
              About
            </NavLink>
            <NavLink 
              onClick={() => scrollToSection("services-section")} 
              scrolled={scrolled}
            >
              Services
            </NavLink>
            <NavLink 
              onClick={() => scrollToSection("products-section")} 
              scrolled={scrolled}
            >
              Product
            </NavLink>
            <Dialog>
              <DialogTrigger asChild>
                <NavButton scrolled={scrolled}>Contact</NavButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className={`block md:hidden ${scrolled ? 'text-[#0b2d5f]' : 'text-white'}`}
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
          <MobileNavLink onClick={() => scrollToSection("about-section")}>
            About
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("services-section")}>
            Services
          </MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("products-section")}>
            Product
          </MobileNavLink>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="text-2xl text-[#0b2d5f] hover:text-[#1EAEDB] transition-all duration-300 font-fustat"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  scrolled: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, scrolled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${scrolled ? 'text-pebble-darkBlue hover:text-pebble-blue' : 'text-pebble-offWhite hover:text-white'} transition-colors duration-300 group font-fustat`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-pebble-blue' : 'bg-white'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
    </button>
  );
};

interface NavButtonProps {
  children: React.ReactNode;
  scrolled: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ children, scrolled }) => {
  return (
    <button
      className={`relative ${scrolled ? 'text-pebble-darkBlue hover:text-pebble-blue' : 'text-pebble-offWhite hover:text-white'} transition-colors duration-300 group font-fustat`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-pebble-blue' : 'bg-white'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
    </button>
  );
};

interface MobileNavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="text-2xl text-[#0b2d5f] hover:text-[#1EAEDB] transition-all duration-300 font-fustat"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white inline-flex items-center">
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default Navbar;
