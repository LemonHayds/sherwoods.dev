import FancyText from "../../components/fancy-text";
import Heading from "../../components/heading";
import LocationIcon from "../../components/icons/location.icon";
import SectionContainer from "../../components/section-container";
import ResumeButton from "../buttons/resume-button";
import ContactMeLink from "../contact-me-link";

const Intro = () => {
  return (
    <SectionContainer id="intro" className="py-10">
      <div className="flex flex-col sm:flex-row gap-y-4 gap-x-2 md:gap-y-0 justify-between items-start sm:items-end h-full">
        <div className="text-center sm:text-left sm:mb-[-15px] md:mb-[-21px] flex-1 mx-auto">
          <FancyText
            type="div"
            className="ml-[-5px] text-4xl md:text-5xl -mb-[5px] md:-mb-[10px] sm:ml-[3px]"
          >
            creative
          </FancyText>
          <Heading type="h1">
            <span className="block ml-[-2.5px] sm:ml-0">Fullstack</span>

            <span className="block -mt-3 sm:-mt-4 md:-mt-7">Developer</span>
          </Heading>
        </div>
        <div className="h-full flex flex-col gap-y-3 items-center sm:items-end justify-end flex-1 mx-auto">
          <ResumeButton className="text-[20px]" />
          <ContactMeLink
            href="#contact"
            childrenClassName="mr-5"
            className="text-[20px] w-[170px] mt-[2px] sm:mt-[1px]"
          />
          <FancyText
            type="div"
            className="text-md flex items-center gap-x-1.5 md:-mt-1 whitespace-nowrap"
          >
            <LocationIcon
              color="var(--secondary)"
              className="size-3.5 my-auto animate-pulse pb-[0.5px]"
            />
            Located in London / San Francisco
          </FancyText>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Intro;
