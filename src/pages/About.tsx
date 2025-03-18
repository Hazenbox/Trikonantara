
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRevealAnimation } from "../hooks/useGSAP";
import CustomCursor from "../components/CustomCursor";

const About = () => {
  useRevealAnimation(".reveal-element");

  return (
    <div className="bg-white min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0b2d5f] reveal-element">
              About Trikonantara
            </h1>
            
            <div className="space-y-16">
              <div className="reveal-element">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <p className="text-xl text-[#403E43] mb-6 font-fustat">
                    At Trikonantara Innovation Technology Pvt. Ltd., we are driven by a singular passion: to redefine how people experience and interact with the world through the transformative power of Augmented Reality (AR) and Virtual Reality (VR). As pioneers in immersive technology, we craft innovative solutions that elevate industries like gaming, education, healthcare, and entertainment.
                  </p>
                  <p className="text-xl text-[#403E43] font-fustat">
                    Our team of visionary engineers, creators, and developers work tirelessly to bridge the gap between imagination and reality, delivering cutting-edge experiences that not only push boundaries but transform industries. gaming, education, entertainment, and more.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="reveal-element">
                  <div className="bg-lightblue-100 p-8 rounded-xl h-full">
                    <h2 className="text-2xl font-bold mb-4 text-[#0b2d5f]">
                      Mission
                    </h2>
                    <p className="text-[#403E43] font-fustat">
                      Our mission is to leverage the power of AR/VR technologies to create immersive, innovative solutions that empower businesses and individuals. By transforming how we perceive and engage with the world, we strive to drive progress across diverse industries—gaming, education, healthcare, and beyond. Our goal is to make the impossible possible by bridging the gap between imagination and technology, fostering creativity, and unlocking new possibilities for all.
                    </p>
                  </div>
                </div>
                
                <div className="reveal-element">
                  <div className="bg-lightblue-100 p-8 rounded-xl h-full">
                    <h2 className="text-2xl font-bold mb-4 text-[#0b2d5f]">
                      Vision
                    </h2>
                    <p className="text-[#403E43] font-fustat">
                      "To become a global leader in AR/VR innovation, shaping a future where immersive technologies enrich lives, redefine industries, and inspire new possibilities. We envision a world where boundaries between the digital and physical realms dissolve, enabling endless creativity, seamless connectivity, and transformative experiences for all."
                    </p>
                  </div>
                </div>
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
