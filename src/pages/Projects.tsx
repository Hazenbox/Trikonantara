
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRevealAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";

const Projects = () => {
  useRevealAnimation(".reveal-element");

  return (
    <div className="bg-dark min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 reveal-element">
              Our <span className="text-glow">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 reveal-element">
              Explore our portfolio of innovative AR/VR projects that are redefining reality and transforming industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Sample project placeholders - would be actual projects in a real app */}
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="reveal-element project-card h-72 md:h-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
                <div className="project-card-image bg-gradient-to-b from-neon-blue/20 to-neon-red/20 w-full h-full"></div>
                <div className="project-card-overlay"></div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-xl font-bold mb-2">AR/VR Project {index + 1}</h3>
                  <p className="text-gray-300">Immersive experience project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
