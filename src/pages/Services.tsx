
import React from "react";
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
      
      <Footer />
    </div>
  );
};

export default Services;
