"use client";

const ScrollLink = ({
  id,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}) => {
  const scrollToElement = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={`#${id}`}
      className={className}
      onClick={scrollToElement}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
