"use client";

import { useState } from "react";
import Image from "next/image";

import { clsxm } from "../lib/clsxm";

import FancyText from "./fancy-text";
import Underline from "./underline";
import SkillLink from "./skill-link";

import type { ProjectType } from "../lib/types/project.type";
import type { SkillType } from "../lib/types/skill.types";

type ProjectContainerProps = {
  project: ProjectType;
  selectedProject: ProjectType | null;
  setSelectedProject: (project: ProjectType) => void;
  className?: string;
};

const ProjectContainer = (props: ProjectContainerProps) => {
  const {
    project,
    selectedProject,
    setSelectedProject,
    className = "",
  } = props;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={clsxm("flex justify-between items-center gap-x-10", className)}
    >
      <div className="flex flex-col gap-y-2 flex-1">
        <div
          className="w-fit h-fit"
          onMouseEnter={() => {
            if (!isHovering) {
              setIsHovering(true);
            }
          }}
          onMouseLeave={() => {
            if (isHovering) {
              setIsHovering(false);
            }
          }}
          onClick={() => {
            setSelectedProject(project);
          }}
        >
          <FancyText
            type="h3"
            className={clsxm("relative w-fit text-4xl mb-0", {
              "cursor-pointer":
                isHovering || selectedProject?.id === project.id,
            })}
          >
            {project.title}
            <Underline
              className={clsxm("h-[2px] bg-secondary duration-1000", {
                "w-full": isHovering || selectedProject?.id === project.id,
              })}
            />
          </FancyText>
        </div>

        <p className="text-body-muted mb-1">{project.description}</p>
        <div className="flex items-center justify-start gap-2 mt-1">
          {project.techstack.map((skill: SkillType, index: number) => {
            return (
              <SkillLink
                key={index}
                {...skill}
                linkClassName="size-5"
                iconContainerClassName={clsxm("size-5 mx-0")}
              />
            );
          })}
        </div>
      </div>

      <div
        className={clsxm(
          "border border-secondary rounded-md flex-1 h-fit scale-100 transition-all duration-1000 ease-in-out relative overflow-hidden",
          {
            "scale-95 cursor-pointer":
              isHovering || selectedProject?.id === project.id,
          }
        )}
        onMouseEnter={() => {
          if (!isHovering) {
            setIsHovering(true);
          }
        }}
        onClick={() => {
          setSelectedProject(project);
        }}
        onMouseLeave={() => {
          if (isHovering) {
            setIsHovering(false);
          }
        }}
      >
        {project.slides?.[0] && (
          <Image
            loading="eager"
            src={project.slides[0].image}
            alt={project.slides[0].title}
            className="w-full h-full object-contain select-none"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
