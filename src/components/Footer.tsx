
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightblue-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-lightblue-300">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#0b2d5f]">
              Trikonantara
            </h3>
            <p className="text-[#403E43] mb-6 max-w-md font-fustat">
              Pioneering the future of AR/VR, crafting solutions that break new
              ground in every interaction.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#0b2d5f]">
                Product
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/services/product">AR/VR</FooterLink>
                <FooterLink to="/services/web-app">App</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#0b2d5f]">
                Company
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#0b2d5f]">
                Community
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/projects">Projects</FooterLink>
                <FooterLink to="/services">Services</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#0b2d5f]">
                Press
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/contact">Preorder</FooterLink>
                <FooterLink to="/contact">Subscribe</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-[#403E43] text-sm font-fustat">© {new Date().getFullYear()} Trikonantara. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <SocialIcon icon={<Instagram size={20} />} href="#" />
            <SocialIcon icon={<Facebook size={20} />} href="#" />
            <SocialIcon icon={<Linkedin size={20} />} href="#" />
            <SocialIcon icon={<Twitter size={20} />} href="#" />
            <SocialIcon icon={<Youtube size={20} />} href="#" />
            <SocialIcon icon={<Mail size={20} />} href="#" />
          </div>
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
        className="text-[#403E43] hover:text-[#0b2d5f] transition-colors duration-300 font-fustat"
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
      className="text-[#403E43] hover:text-[#0b2d5f] transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;
