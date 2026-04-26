import betterverse_2 from "../../assets/images/projects/betterverse/betterverse_impact.webp";
import betterverse_3 from "../../assets/images/projects/betterverse/betterverse_summary.webp";
import betterverse_1 from "../../assets/images/projects/betterverse/betterverse_thumbnail.webp";
import storyline_1 from "../../assets/images/projects/storyline/storyline_thumbnail.webp";
import storyline_2 from "../../assets/images/projects/storyline/storyline_listing.webp";
import tickornot_1 from "../../assets/images/projects/tickornot/tickornot_thumbnail.webp";
import tickornot_2 from "../../assets/images/projects/tickornot/tickornot_listing.webp";
import intent_2 from "../../assets/images/projects/intent/intent_compare.webp";
import intent_4 from "../../assets/images/projects/intent/intent_content.webp";
import intent_5 from "../../assets/images/projects/intent/intent_form.webp";
import intent_3 from "../../assets/images/projects/intent/intent_partners.webp";
import intent_1 from "../../assets/images/projects/intent/intent_thumbnail.webp";
import ta_2 from "../../assets/images/projects/ta/ta_dashboard.webp";
import ta_4 from "../../assets/images/projects/ta/ta_login.webp";
import ta_3 from "../../assets/images/projects/ta/ta_profile.webp";
import ta_1 from "../../assets/images/projects/ta/ta_thumbnail.webp";

import { AppDownloadButtons } from "../../components/app-download-buttons";

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
  NODEJS_SKILL,
  EXPO_SKILL,
} from "./skills.constant";

export const PROJECTS: ProjectType[] = [
  {
    id: "storyline",
    title: "Storyline",
    description: (
      <>
        Turn a memory into a short film - just by talking. Tell a story in your
        own voice, and Storyline transforms it into a cinematic video you can
        keep and share with the people who matter most.
        <AppDownloadButtons
          appStoreUrl="https://apps.apple.com/us/app/storyline-tell-your-story/id6759474533"
          websiteUrl="https://www.storyline.now/"
        />
      </>
    ),
    slides: [
      { image: storyline_1, title: "Storyline" },
      { image: storyline_2, title: "Storyline" },
    ],
    link: "https://storyline.video",
    techstack: [
      REACT_SKILL,
      EXPO_SKILL,
      TYPESCRIPT_SKILL,
      NESTJS_SKILL,
      NODEJS_SKILL,
      POSTGRESQL_SKILL,
      GOOGLE_CLOUD_SKILL,
    ],
  },
  {
    id: "tickornot",
    title: "tickornot",
    description: (
      <>
        Fact-check TikTok videos in seconds. A mobile app that verifies claims
        with cited sources, helping users separate facts from misinformation.
        <AppDownloadButtons
          appStoreUrl="https://apps.apple.com/app/id6755215165"
          websiteUrl="https://tickornot.com"
        />
      </>
    ),
    slides: [
      { image: tickornot_1, title: "tickornot" },
      { image: tickornot_2, title: "tickornot" },
    ],
    link: "https://tickornot.com",
    techstack: [
      REACT_SKILL,
      EXPO_SKILL,
      TYPESCRIPT_SKILL,
      NESTJS_SKILL,
      NODEJS_SKILL,
      SUPABASE_SKILL,
      GOOGLE_CLOUD_SKILL,
      TAILWIND_SKILL,
      NEXTJS_SKILL,
    ],
  },
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
    link: "https://intent.co.uk",
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
    id: "betterverse",
    title: "Betterverse",
    description:
      "A donation platform with pre-seed investment. Goal of enabling users to donate to charitable projects in crypto, receive unique NFTs, and ability to track the impact of their contributions in efforts to make charitable giving more engaging. Unfortunately, the project no longer exists - but was an amazing learning experience.",
    slides: [
      { image: betterverse_1, title: "Betterverse" },
      { image: betterverse_2, title: "Betterverse" },
      { image: betterverse_3, title: "Betterverse" },
    ],
    // link: "https://betterverse.vercel.app",
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
    // link: "https://truealtitude.vercel.app",
    techstack: [JAVASCRIPT_SKILL, HTML_SKILL, CSS_SKILL, FIREBASE_SKILL],
  },
];
