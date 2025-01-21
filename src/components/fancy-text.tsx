import { Mate } from "next/font/google";

import { clsxm } from "../lib/clsxm";

const mate = Mate({
  subsets: ["latin"],
  weight: ["400"],
});

type FancyTextProps = {
  type?: "h3" | "div";
  className?: string;
  children: React.ReactNode;
};

const FancyText = ({
  type = "h3",
  className = "",
  children,
}: FancyTextProps) => {
  const Tag = type;

  return (
    <Tag
      className={clsxm(
        "text-subheading",
        { "text-5xl": type === "h3" },
        className,
        mate.className
      )}
    >
      {children}
    </Tag>
  );
};

export default FancyText;
