
import React, { useRef, useEffect } from "react";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, path }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;

      gsap.to(card, {
        rotationY: xPercent * 10,
        rotationX: yPercent * -10,
        transformPerspective: 500,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-black bg-opacity-20 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon-blue transition-colors duration-300 transform-gpu"
    >
      <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-neon-blue bg-opacity-10">
        <Code className="text-neon-blue" size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-400 mb-6">{description}</p>
      
      <Link 
        to={path} 
        className="inline-flex items-center text-neon-blue hover:text-white group transition-colors duration-300"
      >
        Read more
        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
