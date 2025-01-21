"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";

import { SKILLS } from "../../lib/constants/skills.constant";
import SectionContainer from "../../components/section-container";
import SkillLink from "../skill-link";

import type { SkillType } from "../../lib/types/skill.types";

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <SectionContainer
      id="skills"
      className="pb-0 pt-0 h-6 sm:h-8 relative overflow-hidden"
    >
      <Marquee
        gradient={true}
        gradientColor="var(--background)"
        gradientWidth={50}
        autoFill={true}
        play={isMounted}
        pauseOnHover={true}
        onMount={() => setIsMounted(true)}
      >
        {SKILLS.map((skill: SkillType) => (
          <SkillLink
            key={skill.id}
            {...skill}
            linkClassName="w-6 h-6 sm:w-8 sm:h-8"
            iconContainerClassName="size-6 sm:size-8"
          />
        ))}
      </Marquee>

      {!isMounted && (
        <div className="h-full w-full skills-fade">
          <div className="absolute left-0 top-0 flex gap-4 justify-center">
            {[...Array(2)].map((_, rowIndex) =>
              SKILLS.map((skill: SkillType) => (
                <SkillLink
                  key={`${skill.id}-${rowIndex}`}
                  {...skill}
                  linkClassName="w-6 h-6 sm:w-8 sm:h-8"
                  iconContainerClassName="size-6 sm:size-8"
                />
              ))
            )}
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default Skills;
