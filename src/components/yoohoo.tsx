"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

interface YoohooProps {
  text: string;
  image: StaticImageData;
  imageAlt: string;
  className?: string;
}

const Yoohoo = ({ text, image, imageAlt, className = "" }: YoohooProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const span = spanRef.current;

    const updateCursor = (e: MouseEvent) => {
      const rect = span?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        span?.style.setProperty("--x", `${x}px`);
        span?.style.setProperty("--y", `${y}px`);
      }
    };

    span?.addEventListener("mousemove", updateCursor);

    return () => {
      span?.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <span
      ref={spanRef}
      className={`relative cursor-none group ${className} transition-colors duration-300 ease-in-out sm:font-medium sm:text-body sm:hover:text-gray-300`}
    >
      <Image
        src={image}
        alt={imageAlt}
        className="hidden sm:block size-24 object-contain absolute pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          transform: "translate(-50%, -50%)",
          left: "var(--x)",
          top: "var(--y)",
        }}
      />
      {text}
    </span>
  );
};

export default Yoohoo;
