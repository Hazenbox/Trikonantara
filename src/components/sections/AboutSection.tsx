
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, useImageParallax, useSplitTextAnimation } from "../../hooks/useGSAP";
import { ScrollArea } from "@/components/ui/scroll-area";

const AboutSection: React.FC = () => {
  // Apply split text animation for headings
  useSplitTextAnimation(".split-text");
  
  // Apply parallax effect to the image
  useImageParallax(".about-image");

  const aboutRef = useGSAP((gsap, scrollTrigger) => {
    // Left column fade in
    gsap.from(".about-left-col", {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
    
    // Right column fade in
    gsap.from(".about-right-col", {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
    
    // Text fade in animations
    gsap.from(".about-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-text-wrapper",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section 
      ref={aboutRef}
      className="py-20 relative bg-pebble-cream overflow-hidden"
    >
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-pebble-taupe rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pebble-darkTaupe rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float" style={{ animationDelay: "-2s" }}></div>
      
      <div className="container mx-auto px-4 about-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="about-left-col md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pebble-darkBlue font-funnel split-text">
              About Trikonantara
            </h2>
            
            <div className="about-text-wrapper">
              <p className="text-lg text-pebble-secondaryText font-fustat mb-6 about-text">
                We redefine how people experience the world through pioneering AR and VR technology.
              </p>
              <p className="text-lg text-pebble-secondaryText font-fustat about-text">
                Our visionary team bridges imagination and reality, delivering transformative experiences across gaming, education, healthcare, and entertainment.
              </p>
            </div>
            
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center bg-pebble-darkTaupe hover:bg-pebble-charcoal text-pebble-cream py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-pebble-charcoal/20"
              >
                Explore Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right Column - Image and Cards */}
          <div className="about-right-col md:col-span-7">
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="overflow-hidden">
                <img 
                  src="public/lovable-uploads/2f679cde-6ad1-4d93-8c27-d7e90ae3b829.png" 
                  alt="AR/VR Experience" 
                  className="w-full h-auto about-image object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pebble-offWhite p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel">
                  Mission
                </h3>
                <p className="text-pebble-secondaryText font-fustat">
                  To leverage AR/VR technologies to create immersive solutions that empower businesses and transform industries.
                </p>
              </div>
              
              <div className="bg-pebble-offWhite p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel">
                  Vision
                </h3>
                <p className="text-pebble-secondaryText font-fustat">
                  To lead AR/VR innovation, shaping a future where immersive technologies dissolve boundaries between digital and physical realms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
