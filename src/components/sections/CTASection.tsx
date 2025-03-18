
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
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
      className="relative overflow-hidden py-32 flex flex-col bg-gradient-to-b from-white via-[#e3edf0] to-[#d1dfe4] opacity-0"
    >
      <div className="container mx-auto px-4 relative mb-16">
        <div className="max-w-4xl mx-auto bg-[#101E4E] rounded-xl shadow-lg shadow-[#101E4E]/20 p-16 relative overflow-hidden cta-content">
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
                  className="inline-flex items-center bg-white text-[#101E4E] py-3 px-6 rounded-md transition-colors duration-300 hover:bg-gray-100"
                >
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
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
      
      {/* Footer Content - Center-aligned with darker text and reduced spacing */}
      <div className="container mx-auto px-4 footer-content mt-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-3">
              <img 
                src="/lovable-uploads/56b9bfab-5919-424f-b808-0a73bd735e7f.png" 
                alt="Trikonantara Logo" 
                className="h-10 mb-1" 
              />
            </div>
            <h3 className="text-2xl font-funnel font-bold mb-4 text-pebble-charcoal">
              Trikonantara
            </h3>
            <div className="flex justify-center space-x-3 mb-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="mb-6">
            <ul className="flex justify-center gap-6">
              <AnimatedFooterLink to="/about">About</AnimatedFooterLink>
              <AnimatedFooterLink to="/contact">Contact</AnimatedFooterLink>
              <AnimatedFooterLink to="/blog">Blog</AnimatedFooterLink>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 pt-6 border-t border-pebble-charcoal/20">
          <div className="mb-4 text-center">
            <p className="text-xs text-pebble-charcoal font-fustat">© 2025 Trikonantara Innovation Technology Private Limited. All rights reserved</p>
          </div>

          <div className="flex space-x-4 text-xs text-pebble-charcoal font-fustat">
            <Link to="/privacy" className="hover:text-pebble-darkBlue transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pebble-darkBlue transition-colors duration-300">
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

// Regular FooterLink component (keep it for existing references)
const FooterLink: React.FC<FooterLinkProps> = ({ to, children, external }) => {
  if (external) {
    return (
      <li>
        <a
          href={to}
          className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300 font-fustat"
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
        className="text-pebble-charcoal hover:text-pebble-darkBlue transition-colors duration-300 font-fustat"
      >
        {children}
      </Link>
    </li>
  );
};

// Updated animated link component with darker text
const AnimatedFooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-pebble-charcoal relative font-fustat group"
      >
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pebble-charcoal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </li>
  );
};

export default CTASection;
