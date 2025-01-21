import type { ComponentType } from "react";

export type SkillType = {
  id: string;
  label: string;
  icon: ComponentType<{ color?: string; className?: string }>;
  url?: string;
};
