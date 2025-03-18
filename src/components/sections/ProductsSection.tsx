
import React, { useEffect } from "react";
import PixelCard from "../PixelCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProductsSection: React.FC = () => {
  const sectionId = "products-section";

  useEffect(() => {
    // Wait for the DOM to be ready
    const ctx = gsap.context(() => {
      // Split text animation for the title
      const headings = document.querySelectorAll(".products-title");
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

      // Section title fade in
      gsap.from(".products-heading", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".products-container",
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
      
      // Intro fade in
      gsap.from(".products-intro", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".products-container",
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
      
      // Featured product animation
      gsap.from(".featured-product", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".featured-product",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pebble-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pebble-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 products-container">
        <div className="text-center mb-16 products-heading">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black products-title">
            Our Flagship Product
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto products-intro">
            Discover our innovative technology solutions designed to transform industries through immersive experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto featured-product">
          <PixelCard
            title="Bharat VR - Our Flagship Product"
            description="An immersive virtual reality platform designed to showcase India's cultural heritage and historical landmarks through interactive 3D environments."
            imageSrc="/lovable-uploads/48b1e3ce-5061-4ff9-baaf-4ec0ba8a63ec.png"
            footerText="Experience India like never before"
            className="bg-gradient-to-br from-pebble-offWhite to-pebble-lightBlue border-pebble-lightBeige shadow-lg"
            link="/products/bharat-vr"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
