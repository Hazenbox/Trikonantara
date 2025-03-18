import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
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
    <div className="bg-white min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-lightblue-100 to-lightblue-200 opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-lightblue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-lightblue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title text-[#0b2d5f]">
            <SplitText text="Redefining Reality through AR/VR Innovation" />
          </h1>
          <p className="text-xl md:text-2xl text-[#403E43] max-w-3xl mx-auto mb-10 hero-subtitle">
            At Trikonantara, we bridge the gap between imagination and technology,
            creating immersive experiences that transform industries.
          </p>
          <div className="hero-button">
            <Link
              to="/contact"
              className="inline-flex items-center bg-lightblue-500 hover:bg-lightblue-600 text-white py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-lightblue-500/20"
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
                  <div key={i} className="marquee-element text-4xl font-bold text-[#0b2d5f] opacity-10">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 reveal-element text-[#0b2d5f]">
              About Us
            </h2>
            <p className="text-lg text-[#403E43] reveal-element">
              At Trikonantara Innovation Technology Pvt. Ltd., we are driven by a singular passion: to redefine how people experience and interact with the world through the transformative power of Augmented Reality (AR) and Virtual Reality (VR). As pioneers in immersive technology, we craft innovative solutions that elevate industries like gaming, education, healthcare, and entertainment. Our team of visionary engineers, creators, and developers work tirelessly to bridge the gap between imagination and reality, delivering cutting-edge experiences that not only push boundaries but transform industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="reveal-element bg-lightblue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#0b2d5f]">
                Mission
              </h3>
              <p className="text-[#403E43]">
                Our mission is to leverage the power of AR/VR technologies to create immersive, innovative solutions that empower businesses and individuals. By transforming how we perceive and engage with the world, we strive to drive progress across diverse industries—gaming, education, healthcare, and beyond. Our goal is to make the impossible possible by bridging the gap between imagination and technology, fostering creativity, and unlocking new possibilities for all.
              </p>
            </div>
            
            <div className="reveal-element bg-lightblue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#0b2d5f]">
                Vision
              </h3>
              <p className="text-[#403E43]">
                "To become a global leader in AR/VR innovation, shaping a future where immersive technologies enrich lives, redefine industries, and inspire new possibilities. We envision a world where boundaries between the digital and physical realms dissolve, enabling endless creativity, seamless connectivity, and transformative experiences for all."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative bg-lightblue-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-lightblue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-lightblue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 reveal-element text-[#0b2d5f]">
              Our Services
            </h2>
            <p className="text-lg text-[#403E43] reveal-element">
              Making Cutting-Edge Technology Accessible to All. At the forefront of innovation, we bring Augmented Reality (AR) and Virtual Reality (VR) to life, offering immersive experiences that redefine how you perceive the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="reveal-element">
              <ServiceCard
                title="AR/VR Interactive Services"
                description="Immersive augmented and virtual reality experiences that blend the digital and physical worlds, creating engaging and interactive solutions for training, entertainment, and product visualization."
                path="/services/arvr"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="Arch Viz"
                description="High-quality 3D renderings and animations that bring architectural designs to life, allowing clients and stakeholders to visualize spaces before they are built."
                path="/services/archviz"
              />
            </div>
            
            <div className="reveal-element">
              <ServiceCard
                title="3D for E-commerce"
                description="Photorealistic 3D models of products for online stores, enhancing the customer experience and increasing sales through interactive product views and augmented reality previews."
                path="/services/ecommerce"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-[#0d1626] rounded-xl shadow-lg shadow-[#0d1626]/10 p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-white">
                  The range of functionalities offered on the platforms includes the ability to connect
                </h2>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <p className="text-gray-300 mb-8 font-fustat">
                  With existing algorithmic strategies that reduce
                  risk and automatically execute buy and sell orders.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-white text-[#0d1626] py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Get started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center bg-transparent text-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" /> Watch how it works
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-white opacity-5"></div>
              <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-white opacity-5"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white opacity-5"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
