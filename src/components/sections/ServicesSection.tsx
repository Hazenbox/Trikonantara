
import React from "react";
import ServiceCard from "../ServiceCard";
import { useGSAP, useSplitTextAnimation } from "../../hooks/useGSAP";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  // Apply split text animation
  useSplitTextAnimation(".services-title");

  // GSAP animations
  const servicesRef = useGSAP((gsap, scrollTrigger) => {
    // Left column fade in
    gsap.from(".services-left", {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    
    // Right column fade in
    gsap.from(".services-right", {
      x: 50,
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center mb-16">
          <div className="services-left md:col-span-5">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pebble-darkBlue services-title">
              Our Services
            </h2>
            <p className="text-lg text-pebble-secondaryText">
              Making cutting-edge AR/VR technology accessible to all. We create immersive experiences that redefine digital interaction.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center bg-pebble-darkTaupe hover:bg-pebble-charcoal text-pebble-cream py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-pebble-charcoal/20"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="services-right md:col-span-7">
            <div className="bg-pebble-offWhite rounded-xl overflow-hidden shadow-md">
              <img 
                src="public/lovable-uploads/2f679cde-6ad1-4d93-8c27-d7e90ae3b829.png" 
                alt="Our Services" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto services-cards">
          <div className="service-card-wrapper">
            <ServiceCard
              title="AR/VR Interactive"
              description="Immersive experiences blending digital and physical worlds for training, entertainment, and visualization."
              path="/services/arvr"
            />
          </div>
          
          <div className="service-card-wrapper">
            <ServiceCard
              title="Arch Viz"
              description="High-quality 3D renderings that bring architectural designs to life before construction begins."
              path="/services/archviz"
            />
          </div>
          
          <div className="service-card-wrapper">
            <ServiceCard
              title="3D for E-commerce"
              description="Photorealistic 3D product models enhancing online shopping with interactive views and AR previews."
              path="/services/ecommerce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
