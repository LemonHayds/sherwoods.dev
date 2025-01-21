import betterverse_2 from "../../assets/images/projects/betterverse/betterverse_impact.webp";
import betterverse_3 from "../../assets/images/projects/betterverse/betterverse_summary.webp";
import betterverse_1 from "../../assets/images/projects/betterverse/betterverse_thumbnail.webp";
import intent_2 from "../../assets/images/projects/intent/intent_compare.webp";
import intent_4 from "../../assets/images/projects/intent/intent_content.webp";
import intent_5 from "../../assets/images/projects/intent/intent_form.webp";
import intent_3 from "../../assets/images/projects/intent/intent_partners.webp";
import intent_1 from "../../assets/images/projects/intent/intent_thumbnail.webp";
import moodly_4 from "../../assets/images/projects/moodly/moodly_analytics.webp";
import moodly_1 from "../../assets/images/projects/moodly/moodly_dark.webp";
import moodly_2 from "../../assets/images/projects/moodly/moodly_picker.webp";
import moodly_3 from "../../assets/images/projects/moodly/moodly_thumbnail.webp";
import ta_2 from "../../assets/images/projects/ta/ta_dashboard.webp";
import ta_4 from "../../assets/images/projects/ta/ta_login.webp";
import ta_3 from "../../assets/images/projects/ta/ta_profile.webp";
import ta_1 from "../../assets/images/projects/ta/ta_thumbnail.webp";

import type { ProjectType } from "../types/project.type";

import {
  REACT_SKILL,
  NEXTJS_SKILL,
  TAILWIND_SKILL,
  TYPESCRIPT_SKILL,
  SUPABASE_SKILL,
  NESTJS_SKILL,
  POSTGRESQL_SKILL,
  DOCKER_SKILL,
  CSS_SKILL,
  GOOGLE_CLOUD_SKILL,
  JAVASCRIPT_SKILL,
  FIREBASE_SKILL,
  HTML_SKILL,
  SOLIDITY_SKILL,
} from "./skills.constant";

export const PROJECTS: ProjectType[] = [
  {
    id: "intent",
    title: "Intent",
    description: (
      <>
        Managing and improving a variety of websites used by thousands, such as{" "}
        <a
          href="https://moneytransfers.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-body hover:underline"
        >
          MoneyTransfers.com
        </a>
        ,{" "}
        <a
          href="https://moneyzine.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-body hover:underline"
        >
          Moneyzine.com
        </a>
        , and{" "}
        <a
          href="https://sendabroad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-body hover:underline"
        >
          SendAbroad.com
        </a>
        .
      </>
    ),
    slides: [
      { image: intent_1, title: "Intent" },
      { image: intent_2, title: "Intent" },
      { image: intent_3, title: "Intent" },
      { image: intent_4, title: "Intent" },
      { image: intent_5, title: "Intent" },
    ],
    link: "https://intent.vercel.app",
    techstack: [
      REACT_SKILL,
      NEXTJS_SKILL,
      NESTJS_SKILL,
      TAILWIND_SKILL,
      TYPESCRIPT_SKILL,
      JAVASCRIPT_SKILL,
      GOOGLE_CLOUD_SKILL,
      POSTGRESQL_SKILL,
      CSS_SKILL,
      DOCKER_SKILL,
    ],
  },
  {
    id: "moodly",
    title: "Moodly",
    description:
      "Moodly is a web app that allows users to log their moods with emojis, visualized globally. Still a work in progress.",
    slides: [
      { image: moodly_1, title: "Moodly" },
      { image: moodly_2, title: "Moodly" },
      { image: moodly_3, title: "Moodly" },
      { image: moodly_4, title: "Moodly" },
    ],
    link: "https://moodly.vercel.app",
    techstack: [
      REACT_SKILL,
      NEXTJS_SKILL,
      TAILWIND_SKILL,
      TYPESCRIPT_SKILL,
      SUPABASE_SKILL,
    ],
  },
  {
    id: "betterverse",
    title: "Betterverse",
    description:
      "A donation platform with pre-seed investment. Goal of enabling users to donate to charitable projects in crypto, receive unique NFTs, and ability to track the impact of their contributions in efforts to make charitable giving more engaging. Unfortunatley, the project no longer exists - but was a beautiful learning experience.",
    slides: [
      { image: betterverse_1, title: "Betterverse" },
      { image: betterverse_2, title: "Betterverse" },
      { image: betterverse_3, title: "Betterverse" },
    ],
    link: "https://betterverse.vercel.app",
    techstack: [
      HTML_SKILL,
      CSS_SKILL,
      JAVASCRIPT_SKILL,
      FIREBASE_SKILL,
      SOLIDITY_SKILL,
    ],
  },
  {
    id: "true-altitude",
    title: "True Altitude",
    description:
      "Closed web app with the purpose of facilitating meaningful and worthwhile connections between startups, mentors and investors.",
    slides: [
      { image: ta_1, title: "True Altitude" },
      { image: ta_2, title: "True Altitude" },
      { image: ta_3, title: "True Altitude" },
      { image: ta_4, title: "True Altitude" },
    ],
    link: "https://truealtitude.vercel.app",
    techstack: [JAVASCRIPT_SKILL, HTML_SKILL, CSS_SKILL, FIREBASE_SKILL],
  },
];
