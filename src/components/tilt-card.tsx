"use client";

import { useState } from "react";
import { Tilt } from "react-tilt";
import { clsxm } from "../lib/clsxm";

interface TiltCardProps {
  className?: string;
  children?: React.ReactNode;
  glareOpacity?: number;
  glareSize?: number;
}

const defaultOptions = {
  reverse: true,
  max: 28,
  perspective: 1000,
  scale: 1.05,
  speed: 3000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const TiltCard = ({
  className = "",
  children,
  glareOpacity = 0.035,
  glareSize = 50,
}: TiltCardProps) => {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  return (
    <Tilt
      options={defaultOptions}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={clsxm("relative", className)}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent ${glareSize}%)`,
        }}
      />

      {children}
    </Tilt>
  );
};

export default TiltCard;
