
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
      className="bg-white bg-opacity-90 backdrop-blur-sm border border-gray-100 rounded-xl p-6 hover:border-lightblue-500 transition-colors duration-300 transform-gpu shadow-md hover:shadow-lg"
    >
      <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-lightblue-100">
        <Code className="text-lightblue-500" size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-[#0b2d5f]">{title}</h3>
      
      <p className="text-[#403E43] mb-6 font-fustat">{description}</p>
      
      <Link 
        to={path} 
        className="inline-flex items-center text-lightblue-500 hover:text-[#0b2d5f] group transition-colors duration-300 font-fustat"
      >
        Read more
        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
