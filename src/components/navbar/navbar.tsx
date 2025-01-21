import { SECTIONS } from "../../lib/constants/sections.constant";
import FancyText from "../fancy-text";
import NavbarContainer from "./parts/navbar-container";
import NavbarLink from "./parts/navbar-link";

import type { SectionType } from "../../lib/types/section.type";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="h-full w-full flex justify-between items-center">
        <FancyText
          type="div"
          className="text-[17px] sm:text-2xl text-white font-bold select-none"
        >
          <div className="hidden sm:block">Hayden Sherwood</div>
          <div className="sm:hidden">Hayden</div>
          <div className="sm:hidden mt-[-7px]">Sherwood</div>
        </FancyText>
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          {SECTIONS.map((section: SectionType) => (
            <NavbarLink key={section.id} id={section.id}>
              {section.label}
            </NavbarLink>
          ))}
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
