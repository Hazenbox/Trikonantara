
import React from "react";
import ServiceCard from "../ServiceCard";

const ServicesSection: React.FC = () => {
  return (
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
  );
};

export default ServicesSection;
