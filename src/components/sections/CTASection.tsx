
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CTASection: React.FC = () => {
  const sectionId = "cta-section";
  
  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Section entry/exit animations with a delayed start to ensure the element exists
      gsap.to(`#${sectionId}`, {
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: `#${sectionId}`,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
      
      // Content animations
      gsap.from(".cta-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });
      
      // Footer animations
      gsap.from(".footer-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".footer-content",
          start: "top 85%",
          end: "top 65%",
          scrub: 1,
        },
      });
    });
    
    return () => {
      // Clean up
      ctx.revert();
    };
  }, []);

  return (
    <section 
      id={sectionId}
      className="relative overflow-hidden py-32 flex flex-col bg-gradient-to-b from-pebble-lightBeige to-pebble-taupe opacity-0"
    >
      <div className="container mx-auto px-4 relative mb-20">
        <div className="max-w-4xl mx-auto bg-pebble-beige rounded-xl shadow-lg shadow-pebble-taupe/20 p-16 relative overflow-hidden cta-content">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-pebble-offWhite">
                The range of functionalities offered on the platforms includes the ability to connect
              </h2>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <p className="text-pebble-offWhite/80 mb-8 font-fustat">
                With existing algorithmic strategies that reduce
                risk and automatically execute buy and sell orders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-pebble-taupe text-pebble-offWhite py-3 px-6 rounded-md transition-colors duration-300 hover:bg-pebble-taupe/90"
                >
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center bg-transparent text-pebble-offWhite py-3 px-6 rounded-md hover:bg-pebble-offWhite/10 transition-colors duration-300"
                >
                  <Play className="mr-2 h-5 w-5" /> Watch how it works
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-pebble-offWhite opacity-5"></div>
            <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-pebble-offWhite opacity-5"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-pebble-offWhite opacity-5"></div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container mx-auto px-4 footer-content mt-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0 lg:w-1/4">
            <h3 className="text-3xl font-funnel font-bold mb-6 text-pebble-offWhite">
              Trikonantara
            </h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-3/4 lg:pl-12">
            <div>
              <h4 className="text-base font-semibold mb-6 text-pebble-offWhite">
                Company
              </h4>
              <ul className="space-y-4">
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/services">Features</FooterLink>
                <FooterLink to="/pricing">Pricing</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-6 text-pebble-offWhite">
                Resources
              </h4>
              <ul className="space-y-4">
                <FooterLink to="/documentation">Documentation</FooterLink>
                <FooterLink to="/faq">FAQ</FooterLink>
                <FooterLink to="/support">Support</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-16 pt-8 border-t border-pebble-offWhite/20">
          <div className="flex items-center mb-6 md:mb-0">
            <p className="text-sm text-pebble-offWhite/70 font-fustat">© 2025 Trikonantara. All rights reserved</p>
          </div>

          <div className="flex space-x-6 text-sm text-pebble-offWhite/70 font-fustat">
            <Link to="/privacy" className="hover:text-pebble-offWhite transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pebble-offWhite transition-colors duration-300">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </section>
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
          className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300 font-fustat"
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
        className="text-pebble-offWhite/70 hover:text-pebble-offWhite transition-colors duration-300 font-fustat"
      >
        {children}
      </Link>
    </li>
  );
};

export default CTASection;
