"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import { EMAIL } from "../../lib/constants/socials.constant";
import { clsxm } from "../../lib/clsxm";

const ContactMeButton = ({
  children = "Contact Me",
  className = "",
  childrenClassName = "",
}: {
  children?: React.ReactNode;
  className?: string;
  childrenClassName?: string;
  href?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  return (
    <a
      href={`mailto:${EMAIL}`}
      className={clsxm(
        "relative w-[143px] md:w-[170px] lg:w-[202px] px-0 py-0 text-[16px] md:text-[20px] lg:text-[25px] group text-primary text-center flex justify-center items-center border-[1px] hover:border-black border-primary rounded-full uppercase transition-all duration-300 ease-in-out hover:bg-primary hover:text-black font-semibold",
        className
      )}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <Marquee
        key={isPlaying ? "playing" : "not-playing"}
        autoFill={true}
        className="px-4 py-1"
        direction="right"
        speed={80}
        play={isPlaying}
        onMount={() => setMounted(true)}
      >
        <div className={clsxm("whitespace-nowrap", childrenClassName)}>
          {children}
        </div>
      </Marquee>
      {!mounted && (
        <div className="px-4 py-1 ml-[-2px] lg:ml-[-0px] whitespace-nowrap">
          {children}
        </div>
      )}
    </a>
  );
};

export default ContactMeButton;
