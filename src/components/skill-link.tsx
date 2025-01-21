import Link from "next/link";

import { clsxm } from "../lib/clsxm";
import { SKILL_COLOR } from "../lib/constants/skills.constant";

import type { SkillType } from "../lib/types/skill.types";

const SkillLink = (
  props: SkillType & { linkClassName?: string; iconContainerClassName?: string }
) => {
  const {
    id,
    label,
    url,
    linkClassName = "",
    iconContainerClassName = "",
  } = props;

  return (
    <Link
      target="_blank"
      href={url || ""}
      className={clsxm(
        "w-8 h-8 opacity-70 hover:opacity-100 transition-all ease-in-out duration-300 hover:cursor-default",
        { "hover:cursor-pointer": url },
        linkClassName
      )}
      title={label}
      key={id}
    >
      <div className={clsxm("size-8 mx-2", iconContainerClassName)}>
        {props?.icon && <props.icon color={SKILL_COLOR} />}
      </div>
    </Link>
  );
};

export default SkillLink;
