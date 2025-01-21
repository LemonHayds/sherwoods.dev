import { Bebas_Neue } from "next/font/google";

import { clsxm } from "../lib/clsxm";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

type HeadingProps = {
  type?: "h1" | "h2" | "div";
  className?: string;
  children: React.ReactNode;
};

const Heading = ({ type = "h2", className = "", children }: HeadingProps) => {
  const Tag = type;

  return (
    <Tag
      className={clsxm(
        "text-heading",
        { "text-7xl sm:text-8xl md:text-9xl": type === "h1" },
        { "text-6xl md:text-7xl mb-1": type === "h2" },
        bebasNeue.className,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
