
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP, useRevealAnimation, useParallaxEffect, useImageParallax, useSplitTextAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Basic reveal animation for elements
  useRevealAnimation(".reveal-element");
  
  // Parallax effect for background elements
  useParallaxEffect(".parallax-bg", 0.2);
  
  // Apply split text animation for headings
  useSplitTextAnimation(".split-text");
  
  // Apply parallax effect to images
  useImageParallax(".parallax-image");
  
  // Advanced GSAP animations
  const pageRef = useGSAP((gsap, scrollTrigger) => {
    // Header text animation
    gsap.from(".header-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    
    // Content columns animation
    gsap.from(".content-left", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    gsap.from(".content-right", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Card staggered animations
    gsap.from(".mission-vision-card", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".mission-vision-section",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Section divider line animation
    gsap.from(".section-divider", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".section-divider",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
    
    // Text paragraphs reveal
    gsap.from(".about-paragraph", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={pageRef} className="bg-pebble-cream min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-40 -left-24 w-96 h-96 bg-pebble-taupe rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float parallax-bg"></div>
        <div className="absolute top-[60%] right-0 w-80 h-80 bg-pebble-darkTaupe rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float parallax-bg" style={{ animationDelay: "-3s" }}></div>
        
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pebble-darkBlue font-funnel header-title split-text">
              About Trikonantara
            </h1>
            <div className="h-1 w-20 bg-pebble-taupe mx-auto mb-12 section-divider"></div>
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="container mx-auto px-4 content-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-20">
            {/* Left Column - About Content */}
            <div className="about-content content-left md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pebble-darkBlue font-funnel reveal-element split-text">
                Our Story
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                  Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries.
                </p>
                
                <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                  With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
                </p>
                
                <p className="text-lg text-pebble-secondaryText font-fustat about-paragraph">
                  Trikonantara bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
                </p>
              </div>
              
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-pebble-darkTaupe hover:bg-pebble-charcoal text-pebble-cream py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-pebble-charcoal/20 reveal-element"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="content-right md:col-span-7">
              <div className="bg-pebble-offWhite rounded-xl overflow-hidden shadow-md">
                <div className="overflow-hidden">
                  <img 
                    src="public/lovable-uploads/789b56f2-093e-4961-a436-b091c1f2a2ca.png" 
                    alt="About Trikonantara" 
                    className="w-full h-auto object-cover parallax-image transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission & Vision Section */}
          <div className="max-w-5xl mx-auto mission-vision-section">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-pebble-darkBlue font-funnel text-center reveal-element split-text">
              Mission & Vision
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mission-vision-card bg-pebble-offWhite p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel">
                  Mission
                </h3>
                <p className="text-pebble-secondaryText font-fustat">
                  To leverage AR/VR technologies to create immersive solutions that empower businesses and individuals, driving innovation across gaming, education, healthcare, and beyond.
                </p>
              </div>
              
              <div className="mission-vision-card bg-pebble-offWhite p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-pebble-darkBlue font-funnel">
                  Vision
                </h3>
                <p className="text-pebble-secondaryText font-fustat">
                  To lead global AR/VR innovation, shaping a future where immersive technologies dissolve boundaries between digital and physical realms, enabling endless creativity and transformative experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
