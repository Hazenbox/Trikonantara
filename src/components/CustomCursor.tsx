
import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05
      });
    };

    const onMouseDown = () => {
      cursor?.classList.add("custom-cursor-active");
    };

    const onMouseUp = () => {
      cursor?.classList.remove("custom-cursor-active");
    };

    const onMouseEnter = () => {
      cursor?.classList.remove("opacity-0");
      cursorDot?.classList.remove("opacity-0");
    };

    const onMouseLeave = () => {
      cursor?.classList.add("opacity-0");
      cursorDot?.classList.add("opacity-0");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const links = document.querySelectorAll("a, button");
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        cursor?.classList.add("scale-150");
      });
      link.addEventListener("mouseleave", () => {
        cursor?.classList.remove("scale-150");
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor hidden md:block opacity-0 shadow-[0_0_10px_rgba(0,243,255,0.7)]"
      />
      <div 
        ref={cursorDotRef} 
        className="fixed w-1 h-1 rounded-full bg-white pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-0"
      />
    </>
  );
};

export default CustomCursor;
