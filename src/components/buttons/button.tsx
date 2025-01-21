import { clsxm } from "../../lib/clsxm";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  title?: string;
  href?: string;
};

const Button = ({
  children,
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  title,
  href,
}: ButtonProps) => {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      title={title}
      className={clsxm(
        "text-[16px] md:text-[20px] lg:text-[25px] group w-fit text-primary text-center flex justify-center items-center border-[1px] hover:border-black border-primary rounded-full px-4 py-1 uppercase transition-all duration-300 ease-in-out hover:bg-primary hover:text-black font-semibold",
        className
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Tag>
  );
};

export default Button;
