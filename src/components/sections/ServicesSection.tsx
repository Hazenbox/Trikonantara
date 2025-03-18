
import React from "react";
import ServiceCard from "../ServiceCard";
import { useGSAP, useSplitTextAnimation } from "../../hooks/useGSAP";

const ServicesSection: React.FC = () => {
  // Apply split text animation
  useSplitTextAnimation(".services-title");

  // GSAP animations
  const servicesRef = useGSAP((gsap, scrollTrigger) => {
    // Section title fade in
    gsap.from(".services-heading", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Left column fade in
    gsap.from(".services-intro", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Cards staggered animation
    gsap.from(".service-card-wrapper", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".services-cards",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section 
      ref={servicesRef}
      className="py-20 relative bg-pebble-gray overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pebble-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pebble-darkBlue rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 services-container">
        <div className="text-center mb-16 services-heading">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pebble-darkBlue services-title">
            Our Services
          </h2>
          <p className="text-lg text-pebble-secondaryText max-w-2xl mx-auto services-intro">
            Making cutting-edge AR/VR technology accessible to all. We create immersive experiences that redefine digital interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto services-cards">
          <div className="service-card-wrapper">
            <ServiceCard
              title="AR/VR Interactive"
              description="Immersive experiences blending digital and physical worlds for training, entertainment, and visualization."
              path="/services/arvr"
              type="arvr"
            />
          </div>
          
          <div className="service-card-wrapper">
            <ServiceCard
              title="Arch Viz"
              description="High-quality 3D renderings that bring architectural designs to life before construction begins."
              path="/services/archviz"
              type="archviz"
            />
          </div>
          
          <div className="service-card-wrapper">
            <ServiceCard
              title="3D for E-commerce"
              description="Photorealistic 3D product models enhancing online shopping with interactive views and AR previews."
              path="/services/ecommerce"
              type="ecommerce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
