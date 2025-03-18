
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, GitHub, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              <span className="text-glow">Trikonantara</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue"></span>
            </h3>
            <p className="text-gray-400 mb-6">
              Pioneering the future of AR/VR, crafting solutions that break new
              ground in every interaction.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
              <SocialIcon icon={<GitHub size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              <span>Quick Links</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-neon-red"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-neon-red"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/services/product">Product AR/VR</FooterLink>
              <FooterLink to="/services/entertainment">Entertainment AR/VR</FooterLink>
              <FooterLink to="/services/tourism">Tourism AR/VR</FooterLink>
              <FooterLink to="/services/medical">Medical AR/VR</FooterLink>
              <FooterLink to="/services/web-app">Web & App Development</FooterLink>
              <FooterLink to="/services/end-to-end">End to End Services</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-neon-red"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-neon-blue mt-1" />
                <span className="text-gray-400">info@trikonantara.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-neon-blue mt-1" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Trikonantara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-neon-blue hover:text-white transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;
