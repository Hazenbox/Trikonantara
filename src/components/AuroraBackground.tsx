
import React, { useEffect, useRef } from "react";

const AuroraBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Aurora parameters
    const blobs = [];
    for (let i = 0; i < 5; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        hue: Math.random() * 40 + 220, // Blue to purple hues
      });
    }

    const renderFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each blob
      for (let blob of blobs) {
        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;
        
        // Bounce off edges
        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;
        
        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        
        gradient.addColorStop(0, `hsla(${blob.hue}, 100%, 60%, 0.2)`);
        gradient.addColorStop(1, `hsla(${blob.hue}, 100%, 50%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Add a subtle overlay for the entire canvas
      ctx.fillStyle = 'rgba(5, 5, 20, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      hue = (hue + 0.1) % 360;
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
