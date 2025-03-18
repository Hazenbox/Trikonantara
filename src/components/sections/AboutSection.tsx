
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AboutModal from "../AboutModal";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionId = "about-section";

  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Split text animation
      const headings = document.querySelectorAll(".split-text");
      headings.forEach((el) => {
        const text = el.textContent || "";
        const words = text.split(' ');
        el.innerHTML = '';
        
        words.forEach((word) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'inline-block opacity-0 transform translate-y-[20px]';
          wordSpan.textContent = word + ' ';
          el.appendChild(wordSpan);
        });
        
        gsap.to(el.querySelectorAll('span'), {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Centered content animations
      gsap.from(".about-text-wrapper", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-text-wrapper",
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

      // Logo animations
      gsap.from(".partner-logo", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 85%",
        },
      });

      // Section entry/exit animations
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
    });

    return () => {
      // Clean up
      ctx.revert();
    };
  }, []);

  return (
    <section 
      id={sectionId}
      className="min-h-screen py-20 relative bg-white flex items-center opacity-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-pebble-taupe rounded-full mix-blend-multiply filter blur-[128px] opacity-5 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pebble-darkTaupe rounded-full mix-blend-multiply filter blur-[128px] opacity-5 animate-float" style={{ animationDelay: "-2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl about-container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-funnel split-text tracking-wide">
            About Trikonantara™
          </h2>
          
          <div className="about-text-wrapper">
            <p className="text-lg text-black font-fustat mb-6 about-text">
              Trikonantara™ bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
            </p>
            <p className="text-lg text-black font-fustat about-text">
              Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries. With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
            </p>
          </div>
          
          {/* Associated with section - updated with new images */}
          <div className="mt-10 partners-section">
            <h3 className="text-sm font-medium mb-6 text-[#8A898C] font-fustat">Associated with</h3>
            <div className="flex justify-center space-x-12 mb-8">
              <img src="/lovable-uploads/4eeead38-8221-4629-867d-ac3cf7391273.png" alt="NITI Aayog & AIM Partner Logo" className="h-28 partner-logo" />
              <img src="/lovable-uploads/ece65d10-2de9-4521-bebb-18990da2a976.png" alt="ACIC-CBIT Partner Logo" className="h-28 partner-logo" />
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center relative z-20">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#101E4E] hover:bg-[#101E4E]/90 text-white rounded-none relative z-20"
                >
                  <span className="inline-flex items-center">
                    Explore Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </DialogTrigger>
              <AboutModal />
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  className="border-[#101E4E] text-[#101E4E] hover:bg-[#101E4E] hover:text-white rounded-none relative z-20"
                >
                  <span className="inline-flex items-center">
                    Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </DialogTrigger>
              <AboutModal />
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
