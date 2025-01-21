import Image from "next/image";

import me from "../../assets/images/me.webp";
import yoohoo from "../../assets/images/yoohoo.webp";
import squigglyArrow from "../../assets/vectors/squiggly-arrow.svg";
import us from "../../assets/vectors/us-coat-of-arms.svg";
import FancyText from "../../components/fancy-text";
import Heading from "../../components/heading";
import DegreeIcon from "../../components/icons/degree.icon";
import SectionContainer from "../../components/section-container";
import TiltCard from "../../components/tilt-card";
import Yoohoo from "../../components/yoohoo";

const About = () => {
  return (
    <SectionContainer
      id="about"
      className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 pt-10 pb-10 md:pb-5 -mt-[1px]"
    >
      <div>
        <Heading type="h2">About</Heading>
        <div className="flex flex-col gap-4">
          <div className="text-body-muted">
            <p className="mb-4">
              I&apos;m a creative and ambitious full-stack developer focused on
              building engaging and scalable digital solutions. Currently Lead
              Developer at{" "}
              <a
                href="https://intent.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-body hover:underline"
              >
                Intent
              </a>
              , where I manage cloud servers, enhance a custom CMS platform, and
              maintain high-traffic websites used by thousands.
            </p>
            <p className="mb-0">
              In my career, I&apos;ve had the privilege of scoping and
              developing digital products across various industries and
              settings. My journey has taken me through an investment firm,
              freelance projects, and even founding a startup. Outside of work,
              you&apos;ll often find me coding, reading, or spending time with
              my beautiful wife and our{" "}
              <Yoohoo text="frenchie" image={yoohoo} imageAlt="frenchie" />.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-[2px]">
            <Image
              src={us}
              alt="University of Sussex"
              title="University of Sussex"
              className="size-12 sm:size-14 rounded-full p-1 border border-primary"
            />
            <div>
              <p className="text-body font-medium flex gap-[6px] items-center hover:underline">
                <DegreeIcon className="size-4" />
                <a
                  className="relative"
                  href="https://www.sussex.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Sussex
                </a>
              </p>

              <p className="text-body-muted text-xs sm:text-sm">
                BSc Computer Science (1st Class Honors)
              </p>
              <p className="text-body-muted text-xs">2016-2020</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-2">
        <FancyText type="div" className="text-2xl">
          Hey, I&apos;m Hayden
        </FancyText>
        <Image
          src={squigglyArrow}
          alt="squiggly arrow"
          className="size-8 scale-x-[-1] rotate-[-19deg] mb-1 mt-[-2px]"
        />
        <TiltCard className="mb-8 max-w-[300px] max-h-[300px] md:w-[300px] md:h-[300px] rounded-lg p-[2px] bg-secondary">
          <Image
            src={me}
            alt="about"
            className="object-contain rounded-md"
            loading="eager"
          />
        </TiltCard>
      </div>
    </SectionContainer>
  );
};

export default About;
