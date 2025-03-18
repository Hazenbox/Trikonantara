
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function AuroraBackground({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "absolute z-0 inset-0 bg-[#050505]",
          className
        )}
      >
        <div
          className="absolute z-[-1] h-full w-full bg-[#050505]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(45, 70, 185, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(128, 0, 255, 0.2) 0%, transparent 50%)
            `,
          }}
        />
        <div className="aurora-dots" />
        <div className="aurora-mask" />
      </div>
      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        .aurora-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(128, 0, 255, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
        }

        .aurora-mask {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #050505 70%);
        }
      `}</style>
    </div>
  );
}

export default AuroraBackground;
