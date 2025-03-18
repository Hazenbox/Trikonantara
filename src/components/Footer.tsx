
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-pebble-cream to-pebble-lightBeige py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-6 text-pebble-darkBlue">
              Trikonantara
            </h3>
            <p className="text-pebble-secondaryText mb-4 font-fustat">
              There is no risk-free trading
            </p>
          </div>

          <div className="mb-10">
            <div className="flex justify-center space-x-6 mb-8">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/documentation">Documentation</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-base font-semibold mb-6 text-pebble-darkBlue">
              Social
            </h4>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pebble-taupe hover:text-pebble-darkBlue transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <FooterLink to="https://twitter.com" external>X (Twitter)</FooterLink>
              <FooterLink to="https://linkedin.com" external>LinkedIn</FooterLink>
              <FooterLink to="https://youtube.com" external>YouTube</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-16 pt-8 border-t border-pebble-taupe border-opacity-20">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-pebble-secondaryText font-fustat">© 2025 Trikonantara. All rights reserved</p>
          </div>

          <div className="flex space-x-6 text-sm text-pebble-secondaryText font-fustat md:ml-8">
            <Link to="/privacy" className="hover:text-pebble-darkBlue transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pebble-darkBlue transition-colors duration-300">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children, external }) => {
  if (external) {
    return (
      <a
        href={to}
        className="text-pebble-secondaryText hover:text-pebble-darkBlue transition-colors duration-300 font-fustat"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      className="text-pebble-secondaryText hover:text-pebble-darkBlue transition-colors duration-300 font-fustat"
    >
      {children}
    </Link>
  );
};

export default Footer;
