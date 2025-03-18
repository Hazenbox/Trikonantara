
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRevealAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  useRevealAnimation(".reveal-element");

  return (
    <div className="bg-white min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 reveal-element text-[#0b2d5f]">
              Our Services
            </h1>
            <p className="text-xl text-[#403E43] reveal-element">
              Making Cutting-Edge Technology Accessible to All. At the forefront of innovation, we bring Augmented Reality (AR) and Virtual Reality (VR) to life, offering immersive experiences that redefine how you perceive the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          </div>
        </div>
      </main>
      
      {/* CTA Section - New dark-themed CTA section */}
      <section className="relative overflow-hidden bg-[#0d1626] py-20">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Reality?
              </h2>
              <p className="text-gray-300 mb-8 font-fustat">
                Let's collaborate to bring your vision to life through cutting-edge AR/VR technology
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-lightblue-500 hover:bg-lightblue-600 text-white py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center bg-transparent border border-white/20 text-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors duration-300"
                >
                  <Play className="mr-2 h-5 w-5" /> Watch how it works
                </Link>
              </div>
            </div>
            <div>
              {/* This div is intentionally left empty for future graphic content */}
            </div>
          </div>
        </div>
        
        {/* Decorative dots pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-white opacity-5"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-white opacity-5"></div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
