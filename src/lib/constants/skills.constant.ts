import AxiosIcon from "../../components/icons/axios.icon";
import CssIcon from "../../components/icons/css.icon";
import DataGripIcon from "../../components/icons/datagrip.icon";
import DockerIcon from "../../components/icons/docker.icon";
import FirebaseIcon from "../../components/icons/firebase.icon";
import GitIcon from "../../components/icons/git.icon";
import GoogleCloudIcon from "../../components/icons/google-cloud.icon";
import GraphQLIcon from "../../components/icons/graph-ql.icon";
import HtmlIcon from "../../components/icons/html.icon";
import JavaScriptIcon from "../../components/icons/javascript.icon";
import NestJsIcon from "../../components/icons/nest-js.icon";
import NextJsIcon from "../../components/icons/next-js.icon";
import NodeIcon from "../../components/icons/node.icon";
import PostgresIcon from "../../components/icons/postgres.icon";
import ReactIcon from "../../components/icons/react.icon";
import SolidityIcon from "../../components/icons/solidity.icon";
import SupabaseIcon from "../../components/icons/supabase.icon";
import TailwindIcon from "../../components/icons/tailwind.icon";
import ThreeJsonIcon from "../../components/icons/three-js.icon";
import TypeScriptIcon from "../../components/icons/typescript.icon";

import type { SkillType } from "../types/skill.types";

export const SKILL_COLOR = "var(--secondary)";

export const REACT_SKILL = {
  id: "react",
  label: "React / React Native",
  icon: ReactIcon,
  url: "https://react.dev/",
};

export const NEXTJS_SKILL = {
  id: "nextjs",
  label: "Next.js",
  icon: NextJsIcon,
  url: "https://nextjs.org/",
};

export const TAILWIND_SKILL = {
  id: "tailwind",
  label: "Tailwind CSS",
  icon: TailwindIcon,
  url: "https://tailwindcss.com/",
};

export const TYPESCRIPT_SKILL = {
  id: "typescript",
  label: "TypeScript",
  icon: TypeScriptIcon,
  url: "https://www.typescriptlang.org/",
};

export const JAVASCRIPT_SKILL = {
  id: "javascript",
  label: "JavaScript",
  icon: JavaScriptIcon,
  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};

export const HTML_SKILL = {
  id: "html",
  label: "HTML",
  icon: HtmlIcon,
  url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
};

export const CSS_SKILL = {
  id: "css",
  label: "CSS",
  icon: CssIcon,
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};

export const NESTJS_SKILL = {
  id: "nestjs",
  label: "Nest.js",
  icon: NestJsIcon,
  url: "https://nestjs.com/",
};

export const GITHUB_SKILL = {
  id: "github",
  label: "GitHub",
  icon: GitIcon,
  url: "https://github.com/",
};

export const GOOGLE_CLOUD_SKILL = {
  id: "google-cloud",
  label: "Google Cloud",
  icon: GoogleCloudIcon,
  url: "https://cloud.google.com/",
};

export const SUPABASE_SKILL = {
  id: "supabase",
  label: "Supabase",
  icon: SupabaseIcon,
  url: "https://supabase.com/",
};

export const DOCKER_SKILL = {
  id: "docker",
  label: "Docker",
  icon: DockerIcon,
  url: "https://www.docker.com/",
};

export const POSTGRESQL_SKILL = {
  id: "postgresql",
  label: "PostgreSQL",
  icon: PostgresIcon,
  url: "https://www.postgresql.org/",
};

export const GRAPHQL_SKILL = {
  id: "graphql",
  label: "GraphQL",
  icon: GraphQLIcon,
  url: "https://graphql.org/",
};

export const FIREBASE_SKILL = {
  id: "firebase",
  label: "Firebase",
  icon: FirebaseIcon,
  url: "https://firebase.google.com/",
};

export const NODEJS_SKILL = {
  id: "nodejs",
  label: "Node",
  icon: NodeIcon,
  url: "https://nodejs.org/",
};

export const SOLIDITY_SKILL = {
  id: "solidity",
  label: "Solidity",
  icon: SolidityIcon,
  url: "https://soliditylang.org/",
};

export const THREEJS_SKILL = {
  id: "threejs",
  label: "Three.js",
  icon: ThreeJsonIcon,
  url: "https://threejs.org/",
};

export const AXIOS_SKILL = {
  id: "axios",
  label: "Axios",
  icon: AxiosIcon,
  url: "https://axios-http.com/",
};

export const DATAGRIP_SKILL = {
  id: "datagrip",
  label: "DataGrip",
  icon: DataGripIcon,
  url: "https://www.jetbrains.com/datagrip/",
};

export const SKILLS: SkillType[] = [
  REACT_SKILL,
  NEXTJS_SKILL,
  TAILWIND_SKILL,
  TYPESCRIPT_SKILL,
  JAVASCRIPT_SKILL,
  HTML_SKILL,
  CSS_SKILL,
  NESTJS_SKILL,
  GITHUB_SKILL,
  GOOGLE_CLOUD_SKILL,
  SUPABASE_SKILL,
  DOCKER_SKILL,
  POSTGRESQL_SKILL,
  GRAPHQL_SKILL,
  FIREBASE_SKILL,
  NODEJS_SKILL,
  SOLIDITY_SKILL,
  THREEJS_SKILL,
  AXIOS_SKILL,
  DATAGRIP_SKILL,
];
