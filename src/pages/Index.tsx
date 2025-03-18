
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP, useRevealAnimation, useParallaxEffect } from "../hooks/useGSAP";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import CustomCursor from "../components/CustomCursor";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  // Animation hooks
  useRevealAnimation(".reveal-element");
  useParallaxEffect(".parallax-bg", 0.3);

  // Hero section reference for GSAP animations
  const heroRef = useGSAP((gsap, scrollTrigger) => {
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
    <div className="bg-dark min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-dark opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neon-red rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title">
            <SplitText text="Redefining Reality through AR/VR Innovation" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 hero-subtitle">
            At Trikonantara, we bridge the gap between imagination and technology,
            creating immersive experiences that transform industries.
          </p>
          <div className="hero-button">
            <Link
              to="/contact"
              className="inline-flex items-center bg-neon-blue hover:bg-blue-600 text-white py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-neon-blue/20"
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

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 reveal-element">
              <span className="text-glow">About</span> Us
            </h2>
            <p className="text-lg text-gray-300 reveal-element">
              At Trikonantara Innovation Technology Pvt. Ltd., we are driven by a singular passion: to redefine how people experience and interact with the world through the transformative power of Augmented Reality (AR) and Virtual Reality (VR). As pioneers in immersive technology, we craft innovative solutions that elevate industries like gaming, education, healthcare, and entertainment. Our team of visionary engineers, creators, and developers work tirelessly to bridge the gap between imagination and reality, delivering cutting-edge experiences that not only push boundaries but transform industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="reveal-element">
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                <span className="text-glow-red">Mission</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-red"></span>
              </h3>
              <p className="text-gray-300">
                Our mission is to leverage the power of AR/VR technologies to create immersive, innovative solutions that empower businesses and individuals. By transforming how we perceive and engage with the world, we strive to drive progress across diverse industries—gaming, education, healthcare, and beyond. Our goal is to make the impossible possible by bridging the gap between imagination and technology, fostering creativity, and unlocking new possibilities for all.
              </p>
            </div>
            
            <div className="reveal-element">
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                <span className="text-glow">Vision</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue"></span>
              </h3>
              <p className="text-gray-300">
                "To become a global leader in AR/VR innovation, shaping a future where immersive technologies enrich lives, redefine industries, and inspire new possibilities. We envision a world where boundaries between the digital and physical realms dissolve, enabling endless creativity, seamless connectivity, and transformative experiences for all."
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center reveal-element">
            <h3 className="text-2xl font-bold mb-6">
              Unleashing Innovation in Every Experience
            </h3>
            <p className="text-gray-300">
              We are pioneering the future of AR/VR, crafting solutions that break new ground in every interaction. Our commitment to excellence ensures that every experience is not only memorable but impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-red rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 reveal-element">
              Our <span className="text-glow">Services</span>
            </h2>
            <p className="text-lg text-gray-300 reveal-element">
              Making Cutting-Edge Technology Accessible to All. At the forefront of innovation, we bring Augmented Reality (AR) and Virtual Reality (VR) to life, offering immersive experiences that redefine how you perceive the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal-element">
              <ServiceCard
                title="Product AR/VR"
                description="We create interactive AR/VR experiences, allowing customers to explore products in immersive, realistic virtual environments."
                path="/services/product"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="Entertainment AR/VR"
                description="Our AR/VR entertainment services provide users with immersive, engaging experiences in virtual worlds, games, and events."
                path="/services/entertainment"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="Tourism AR/VR"
                description="We offer AR/VR services for virtual travel, letting users explore destinations and landmarks before visiting."
                path="/services/tourism"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="Medical AR/VR"
                description="Our Medical AR/VR solutions provide healthcare professionals with training, simulation, and visualization tools in interactive environments."
                path="/services/medical"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="Web & App Dev AR/VR"
                description="We design responsive websites and mobile apps that deliver user-friendly, seamless digital experiences across all devices."
                path="/services/web-app"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="End to End Services AR/VR"
                description="We design responsive websites and mobile apps that deliver user-friendly, seamless digital experiences across all devices."
                path="/services/end-to-end"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-red/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center reveal-element">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-glow">Reality</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's collaborate to bring your vision to life through cutting-edge AR/VR technology
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-neon-blue hover:bg-blue-600 text-white py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-neon-blue/20"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
