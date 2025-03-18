
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-6 text-[#0b2d5f]">
              Trikonantara
            </h3>
            <p className="text-[#403E43] mb-4 font-fustat">
              There is no risk-free trading
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-[#0b2d5f]">
              Company
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-[#0b2d5f]">
              Resources
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/documentation">Documentation</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-[#0b2d5f]">
              Social
            </h4>
            <ul className="space-y-3">
              <FooterLink to="https://twitter.com" external>X (Twitter)</FooterLink>
              <FooterLink to="https://linkedin.com" external>LinkedIn</FooterLink>
              <FooterLink to="https://youtube.com" external>YouTube</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center mr-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <p className="text-sm text-[#403E43] font-fustat">All systems operational</p>
              </div>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <p className="text-[#403E43] text-sm font-fustat">© {new Date().getFullYear()} Trikonantara. All rights reserved</p>
              <Link to="/privacy" className="text-[#403E43] text-sm hover:text-[#0b2d5f] transition-colors duration-300 font-fustat">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#403E43] text-sm hover:text-[#0b2d5f] transition-colors duration-300 font-fustat">
                Terms of Use
              </Link>
            </div>
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
      <li>
        <a
          href={to}
          className="text-[#403E43] hover:text-[#0b2d5f] transition-colors duration-300 font-fustat"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        to={to}
        className="text-[#403E43] hover:text-[#0b2d5f] transition-colors duration-300 font-fustat"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
