"use client";

import { clsxm } from "../../../lib/clsxm";

import Underline from "../../underline";

import type { NavLinkType } from "../../../lib/types/nav-link.type";

const NavbarLink = ({
  id,
  className,
  children,
}: NavLinkType & { className?: string }) => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100; // 100px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleScroll}
      className={clsxm(
        "relative group hover:cursor-pointer text-primary",
        className
      )}
    >
      {children}
      <Underline className={clsxm("group-hover:w-full")} />
    </a>
  );
};

export default NavbarLink;
