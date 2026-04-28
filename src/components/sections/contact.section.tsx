import FancyText from "../../components/fancy-text";
import Heading from "../../components/heading";
import SectionContainer from "../../components/section-container";
import { EMAIL } from "../../lib/constants/socials.constant";
import ContactMeButton from "../buttons/contact-me-button";

const Contact = () => {
  return (
    <SectionContainer id="contact" className="pt-10 pb-6 md:pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-y-6 gap-x-12">
        <div>
          <Heading className="-mb-1">
            Let&apos;s
            <span className="block mt-[-11px] md:mt-[-13px]">Connect</span>
          </Heading>
          <ContactMeButton
            childrenClassName="mr-4"
            href={`mailto:${EMAIL}`}
            className="mt-3 w-[168px] text-[20px]"
          />
        </div>
        <FancyText
          type="div"
          className="text-sm md:text-base flex items-center gap-x-1.5"
        >
          <svg
            className="inline-block w-3.5 h-3.5 align-middle"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="contact-circle">
                <circle cx="50" cy="50" r="50" />
              </clipPath>
            </defs>
            <g clipPath="url(#contact-circle)">
              <rect width="100" height="100" fill="#012169" />
              <path
                d="M0,0 L100,100 M100,0 L0,100"
                stroke="#fff"
                strokeWidth="20"
              />
              <path
                d="M50,0 L50,100 M0,50 L100,50"
                stroke="#fff"
                strokeWidth="33"
              />
              <path
                d="M50,0 L50,100 M0,50 L100,50"
                stroke="#C8102E"
                strokeWidth="20"
              />
              <path
                d="M0,0 L50,50 M100,0 L50,50"
                stroke="#C8102E"
                strokeWidth="7"
                transform="translate(-2,-2)"
              />
              <path
                d="M0,100 L50,50 M100,100 L50,50"
                stroke="#C8102E"
                strokeWidth="7"
                transform="translate(2,2)"
              />
            </g>
          </svg>
          Originally from London, UK.
        </FancyText>
      </div>
    </SectionContainer>
  );
};

export default Contact;
