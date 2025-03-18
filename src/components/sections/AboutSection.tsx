
import React from "react";

const AboutSection: React.FC = () => {
  return (
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
  );
};

export default AboutSection;
