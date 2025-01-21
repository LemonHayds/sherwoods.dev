import FancyText from "../../components/fancy-text";
import Heading from "../../components/heading";
import SectionContainer from "../../components/section-container";
import { CONTACT_TOPICS } from "../../lib/constants/contact-topics.constants";
import { EMAIL } from "../../lib/constants/socials.constant";
import Button from "../buttons/button";
import ContactMeButton from "../buttons/contact-me-button";

import type { ContactTopic } from "../../lib/types/contact-topic.type";

const Contact = () => {
  return (
    <SectionContainer id="contact" className="pt-10 pb-8">
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
        <div className="flex justify-end items-start md:items-end flex-col gap-y-4">
          <FancyText type="h3" className="text-2xl -mb-1">
            I&apos;m always interested in
          </FancyText>
          <div className="flex justify-start md:justify-end flex-wrap gap-2">
            {CONTACT_TOPICS.map((topic: ContactTopic) => (
              <Button
                key={topic.title}
                href={`mailto:${EMAIL}?subject=${topic.subject}`}
                className="text-[14px] md:text-[14px] lg:text-[14px]"
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
