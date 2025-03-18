
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import AuroraBackground from "../AuroraBackground";

const HeroSection: React.FC = () => {
  const sectionId = "hero-section";

  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.from(".hero-title span", {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Marquee animation
      gsap.to(".marquee-wrapper", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
      
      // Section entry/exit animations
      gsap.to(`#${sectionId}`, {
        opacity: 1,
        duration: 1.2,
        delay: 0.2,
      });
    });

    return () => {
      // Clean up
      ctx.revert();
    };
  }, []);

  // Split text animation helper
  const SplitText = ({ text }: { text: string }) => {
    return (
      <>
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden relative"
          >
            <span className="inline-block hero-title-word">
              {word}&nbsp;
            </span>
          </span>
        ))}
      </>
    );
  };

  return (
    <AuroraBackground>
      <section
        id={sectionId}
        className="min-h-screen flex items-center justify-center overflow-hidden pt-20 opacity-0"
      >
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title text-white">
            <SplitText text="Adventure inspiring" />
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 hero-subtitle">
            At Trikonantara, we bridge the gap between imagination and technology,
            creating immersive experiences that transform industries.
          </p>
          <div className="hero-button">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white hover:bg-white/90 text-pebble-darkBlue py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-pebble-charcoal/20"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full">
          <div className="container mx-auto">
            <div className="marquee-container">
              <div className="marquee-wrapper flex">
                {Array(10).fill("AR/VR • Immersive Experiences • Innovation • Technology • ").map((text, i) => (
                  <div key={i} className="marquee-element text-4xl font-bold text-white opacity-10">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
