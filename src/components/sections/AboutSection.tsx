
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "../../hooks/useGSAP";
import { ScrollArea } from "@/components/ui/scroll-area";

const AboutSection: React.FC = () => {
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
    
    // Card animations
    gsap.from(".about-card", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-cards",
        start: "top 80%",
        end: "top 50%",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="about-left-col">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pebble-darkBlue font-funnel">
              About Trikonantara
            </h2>
            <div className="h-0.5 w-20 bg-pebble-taupe mb-8"></div>
            
            <ScrollArea className="h-[280px] md:h-auto">
              <p className="text-lg text-pebble-secondaryText font-fustat mb-6">
                At Trikonantara Innovation Technology Pvt. Ltd., we are driven by a singular passion: to redefine how people experience and interact with the world through the transformative power of Augmented Reality (AR) and Virtual Reality (VR).
              </p>
              <p className="text-lg text-pebble-secondaryText font-fustat">
                As pioneers in immersive technology, we craft innovative solutions that elevate industries like gaming, education, healthcare, and entertainment. Our team of visionary engineers, creators, and developers work tirelessly to bridge the gap between imagination and reality, delivering cutting-edge experiences that not only push boundaries but transform industries.
              </p>
            </ScrollArea>
            
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
          
          <div className="about-right-col mt-10 md:mt-0">
            <div className="grid grid-cols-1 gap-6 about-cards">
              <div className="about-card bg-pebble-offWhite p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel">
                  Mission
                </h3>
                <div className="h-0.5 w-16 bg-pebble-taupe mb-6"></div>
                <p className="text-pebble-secondaryText font-fustat">
                  Our mission is to leverage the power of AR/VR technologies to create immersive, innovative solutions that empower businesses and individuals. By transforming how we perceive and engage with the world, we strive to drive progress across diverse industries—gaming, education, healthcare, and beyond.
                </p>
              </div>
              
              <div className="about-card bg-pebble-offWhite p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel">
                  Vision
                </h3>
                <div className="h-0.5 w-16 bg-pebble-taupe mb-6"></div>
                <p className="text-pebble-secondaryText font-fustat">
                  "To become a global leader in AR/VR innovation, shaping a future where immersive technologies enrich lives, redefine industries, and inspire new possibilities. We envision a world where boundaries between the digital and physical realms dissolve, enabling endless creativity, seamless connectivity, and transformative experiences for all."
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
