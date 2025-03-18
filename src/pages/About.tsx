
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRevealAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";

const About = () => {
  useRevealAnimation(".reveal-element");

  return (
    <div className="bg-dark min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 reveal-element">
              About <span className="text-glow">Trikonantara</span>
            </h1>
            
            <div className="space-y-8">
              <div className="reveal-element">
                <p className="text-xl text-gray-300 mb-6">
                  At Trikonantara Innovation Technology Pvt. Ltd., we are driven by a singular passion: to redefine how people experience and interact with the world through the transformative power of Augmented Reality (AR) and Virtual Reality (VR). As pioneers in immersive technology, we craft innovative solutions that elevate industries like gaming, education, healthcare, and entertainment.
                </p>
                <p className="text-xl text-gray-300">
                  Our team of visionary engineers, creators, and developers work tirelessly to bridge the gap between imagination and reality, delivering cutting-edge experiences that not only push boundaries but transform industries. gaming, education, entertainment, and more.
                </p>
              </div>
              
              <div className="reveal-element">
                <h2 className="text-2xl font-bold mb-4 relative inline-block">
                  <span className="text-glow-red">Mission</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-red"></span>
                </h2>
                <p className="text-gray-300">
                  Our mission is to leverage the power of AR/VR technologies to create immersive, innovative solutions that empower businesses and individuals. By transforming how we perceive and engage with the world, we strive to drive progress across diverse industries—gaming, education, healthcare, and beyond. Our goal is to make the impossible possible by bridging the gap between imagination and technology, fostering creativity, and unlocking new possibilities for all.
                </p>
              </div>
              
              <div className="reveal-element">
                <h2 className="text-2xl font-bold mb-4 relative inline-block">
                  <span className="text-glow">Vision</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue"></span>
                </h2>
                <p className="text-gray-300">
                  "To become a global leader in AR/VR innovation, shaping a future where immersive technologies enrich lives, redefine industries, and inspire new possibilities. We envision a world where boundaries between the digital and physical realms dissolve, enabling endless creativity, seamless connectivity, and transformative experiences for all."
                </p>
              </div>
              
              <div className="reveal-element">
                <h2 className="text-2xl font-bold mb-4">
                  Unleashing Innovation in Every Experience
                </h2>
                <p className="text-gray-300 mb-4">
                  We are pioneering the future of AR/VR, crafting solutions that break new ground in every interaction. Our commitment to excellence ensures that every experience is not only memorable but impactful.
                </p>
                <p className="text-gray-300">
                  Pioneering the Future of AR/VR: We lead with innovation, setting the standard for AR/VR technologies, pushing boundaries to create the most immersive experiences possible. Our dedication drives us to shape the future of how we interact with both the digital and physical worlds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
