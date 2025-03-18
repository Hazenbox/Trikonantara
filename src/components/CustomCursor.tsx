
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Add styles to hide default cursor
    document.documentElement.style.cursor = 'none';
    
    // Set up cursor movement
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    // Handle hover states
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    
    // Add listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    
    // Cleanup
    return () => {
      document.documentElement.style.cursor = '';
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`fixed w-6 h-6 rounded-full bg-pebble-taupe bg-opacity-50 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 ${
        isActive ? "scale-75" : "scale-100"
      } transition-transform duration-200`}
    />
  );
};

export default CustomCursor;
