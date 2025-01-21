import { StaticImageData } from "next/image";

import type { SkillType } from "./skill.types";
import type { ReactNode } from "react";

export type ProjectSlideType = {
  image: StaticImageData;
  title: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: ReactNode;
  slides: ProjectSlideType[];
  link?: string;
  github?: string;
  techstack: SkillType[];
};
