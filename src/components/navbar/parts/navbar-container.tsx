"use client";

import React, { useEffect, useState } from "react";
import { clsxm } from "../../../lib/clsxm";

const NavbarContainer = (props: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="navbar"
      className={clsxm(
        "sticky top-0 z-50 h-[77px] px-6 lg:px-2 transition-all duration-700 ease-in-out",
        {
          "backdrop-blur-sm": isScrolled,
        }
      )}
    >
      <nav className="h-full w-full flex items-center">{props.children}</nav>
      <progress
        className="w-full h-[1px] absolute left-0 bottom-0"
        value={scrollProgress}
        max="100"
      />
    </header>
  );
};

export default NavbarContainer;
