import { clsxm } from "../lib/clsxm";
import { SOCIALS } from "../lib/constants/socials.constant";

import type { SocialType } from "../lib/types/social.type";

const SocialsContainer = ({ className }: { className?: string }) => {
  return (
    <div className={clsxm("flex items-center gap-3", className)}>
      {SOCIALS.map((social: SocialType) => (
        <a href={social.url} target="_blank" key={social.label}>
          <social.icon className="size-6 transition-all duration-300 ease-in-out fill-body-muted hover:fill-body" />
        </a>
      ))}
    </div>
  );
};

export default SocialsContainer;
