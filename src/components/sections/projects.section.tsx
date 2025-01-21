"use client";

import { useEffect, useState } from "react";

import { PROJECTS } from "../../lib/constants/projects.constant";
import { clsxm } from "../../lib/clsxm";

import SectionContainer from "../../components/section-container";
import Heading from "../../components/heading";
import ProjectContainer from "../../components/project-container";
import FancyText from "../fancy-text";
import XButton from "../buttons/x-button";
import Underline from "../underline";
import EmblaCarousel from "../carousel/embla-carousel";

import type {
  ProjectSlideType,
  ProjectType,
} from "../../lib/types/project.type";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlides, setActiveSlides] = useState<ProjectSlideType[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    if (selectedProject) {
      setActiveSlides(selectedProject.slides);
      setActiveHeading(selectedProject.title);
      setIsModalOpen(true);
      if (navbar) {
        navbar.classList.add("top-[-100px]");
      }
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        setActiveHeading("");
        setIsModalOpen(false);
        setActiveSlides([]);
      }, 500);

      if (navbar) {
        navbar.classList.remove("top-[-100px]");
      }
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <div>
      <SectionContainer id="projects" className="pt-0 pb-2 group">
        <div className="flex justify-between items-center">
          <Heading className="mb-[-1px]">Projects</Heading>
          <FancyText type="div" className="animate-bounce hidden md:block">
            ...and many more to come
          </FancyText>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-8 pt-2 md:pt-3">
          {PROJECTS.map((project, index) => (
            <ProjectContainer
              key={index}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              project={project}
              className={clsxm("flex-col md:flex-row gap-y-6", {
                "md:flex-row-reverse": index % 2 === 0,
              })}
            />
          ))}
        </div>
      </SectionContainer>

      <div
        className={clsxm(
          "fixed inset-0 transition-all duration-500 ease-in-out z-50 overflow-hidden",
          {
            "pointer-events-none": !selectedProject,
          }
        )}
        style={{
          backgroundColor: selectedProject
            ? "rgba(15, 15, 15, 0.98)"
            : "transparent",
        }}
      >
        <div
          className={clsxm(
            "px-6 lg:px-2 w-full max-w-screen-lg -mt-2 sm:-mt-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out flex justify-center items-center flex-col gap-y-5",
            {
              "opacity-0": !selectedProject,
            }
          )}
        >
          <div className="flex justify-between items-end w-full pr-1">
            <FancyText
              type="div"
              className={clsxm(
                "relative -mb-1 md:-mb-[1px] text-3xl md:text-4xl opacity-0 transition-all duration-1000 ease-in-out",
                {
                  "opacity-100": selectedProject,
                }
              )}
            >
              {activeHeading}
              <Underline className="w-full h-[2px] bg-secondary" />
            </FancyText>
            <XButton
              className={clsxm("-mb-1 size-6 opacity-0 group", {
                "opacity-100": selectedProject,
              })}
              xClassName={"size-6 fill-secondary group-hover:opacity-100"}
              onClick={() => setSelectedProject(null)}
            />
          </div>

          {isModalOpen && (
            <EmblaCarousel
              slides={activeSlides}
              options={{ loop: true, duration: 30 }}
              className={clsxm("w-fit h-fit transition-opacity duration-300", {
                "opacity-0": !selectedProject,
                "opacity-100": selectedProject,
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
