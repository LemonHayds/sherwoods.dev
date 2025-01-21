import SocialsContainer from "./socials-container";
import FancyText from "./fancy-text";
import { EMAIL } from "../lib/constants/socials.constant";

const Footer = () => {
  return (
    <footer
      style={{ borderColor: "rgb(245, 238, 231, 0.6)" }}
      className="w-full border-t-[1px] h-[77px] flex items-center justify-between px-6 lg:px-2"
    >
      <SocialsContainer />
      <FancyText type="div" className="group text-body-muted text-md">
        <a
          href={`mailto:${EMAIL}`}
          className="group-hover:text-body transition-all duration-300 ease-in-out"
        >
          {EMAIL} 🌳
        </a>
      </FancyText>
    </footer>
  );
};

export default Footer;
