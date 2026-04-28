"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import storylineThumbnail from "../../assets/images/projects/storyline/storyline_thumbnail.webp";
import storylineListing from "../../assets/images/projects/storyline/storyline_listing.webp";
import StorylineOwlIcon from "../icons/storyline-owl.icon";
import FancyText from "../../components/fancy-text";
import Heading from "../../components/heading";
import SectionContainer from "../../components/section-container";
import { AppDownloadButtons } from "../app-download-buttons";
import SkillLink from "../skill-link";
import { clsxm } from "../../lib/clsxm";
import XButton from "../buttons/x-button";
import Underline from "../underline";
import EmblaCarousel from "../carousel/embla-carousel";

import {
  REACT_SKILL,
  EXPO_SKILL,
  TYPESCRIPT_SKILL,
  NESTJS_SKILL,
  NODEJS_SKILL,
  POSTGRESQL_SKILL,
  GOOGLE_CLOUD_SKILL,
} from "../../lib/constants/skills.constant";

import type { ProjectSlideType } from "../../lib/types/project.type";

const STORYLINE_TECH = [
  REACT_SKILL,
  EXPO_SKILL,
  TYPESCRIPT_SKILL,
  NESTJS_SKILL,
  NODEJS_SKILL,
  POSTGRESQL_SKILL,
  GOOGLE_CLOUD_SKILL,
];

const STORYLINE_SLIDES: ProjectSlideType[] = [
  { image: storylineThumbnail, title: "Storyline Hero" },
  { image: storylineListing, title: "Storyline App Store Listing" },
];

const Focused = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    if (showModal) {
      setIsModalOpen(true);
      if (navbar) {
        navbar.classList.add("top-[-100px]");
      }
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 500);

      if (navbar) {
        navbar.classList.remove("top-[-100px]");
      }
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const handleImageClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <SectionContainer id="focused" className="pt-10 pb-0">
        <div className="flex justify-between items-end mb-4">
          <Heading className="mb-0">Focus</Heading>
          <StorylineOwlIcon
            color="var(--body-muted)"
            className="w-5 h-9 md:w-6 md:h-11 animate-bounce mr-2"
          />
        </div>
        <button
          onClick={handleImageClick}
          className="block w-full text-left"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className={clsxm(
              "border border-secondary rounded-md w-full overflow-hidden transition-all duration-1000 ease-in-out",
              {
                "scale-[0.98]": isHovering,
              }
            )}
          >
            <Image
              src={storylineThumbnail}
              alt="Storyline - the future of storytelling"
              className="w-full h-full object-contain select-none"
              loading="eager"
            />
          </div>
        </button>
        <div className="mt-4 flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
          <div className="flex-1">
            <FancyText type="div" className="text-2xl md:text-3xl mb-2">
              Storyline
            </FancyText>
            <p className="text-body-muted">
              Turn a memory into a short film - just by talking. Tell a story in
              your own voice, and Storyline transforms it into a cinematic video
              you can keep and share with the people who matter most.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center justify-start gap-2 md:justify-end">
              {STORYLINE_TECH.map((skill, index) => (
                <SkillLink
                  key={index}
                  {...skill}
                  linkClassName="size-5"
                  iconContainerClassName={clsxm("size-5 mx-0")}
                />
              ))}
            </div>
            <AppDownloadButtons
              appStoreUrl="https://apps.apple.com/us/app/storyline-tell-your-story/id6759474533"
              websiteUrl="https://www.storyline.now/"
            />
          </div>
        </div>
      </SectionContainer>

      <div
        className={clsxm(
          "fixed inset-0 transition-all duration-500 ease-in-out z-50 overflow-hidden",
          {
            "pointer-events-none": !showModal,
          }
        )}
        style={{
          backgroundColor: showModal
            ? "rgba(15, 15, 15, 0.98)"
            : "transparent",
        }}
      >
        <div
          className={clsxm(
            "px-6 lg:px-2 w-full max-w-screen-lg -mt-2 sm:-mt-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out flex justify-center items-center flex-col gap-y-5",
            {
              "opacity-0": !showModal,
            }
          )}
        >
          <div className="flex justify-between items-end w-full pr-1">
            <FancyText
              type="div"
              className={clsxm(
                "relative -mb-1 md:-mb-[1px] text-3xl md:text-4xl opacity-0 transition-all duration-1000 ease-in-out",
                {
                  "opacity-100": showModal,
                }
              )}
            >
              Storyline
              <Underline className="w-full h-[2px] bg-secondary" />
            </FancyText>
            <XButton
              className={clsxm("-mb-1 size-6 opacity-0 group", {
                "opacity-100": showModal,
              })}
              xClassName={"size-6 fill-secondary group-hover:opacity-100"}
              onClick={() => setShowModal(false)}
            />
          </div>

          {isModalOpen && (
            <EmblaCarousel
              slides={STORYLINE_SLIDES}
              options={{ loop: true, duration: 30 }}
              className={clsxm("w-fit h-fit transition-opacity duration-300", {
                "opacity-0": !showModal,
                "opacity-100": showModal,
              })}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Focused;
