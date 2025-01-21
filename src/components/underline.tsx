import { clsxm } from "../lib/clsxm";

const Underline = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsxm(
        "w-0 h-[1px] absolute bottom-0 left-0 transition-all duration-500 bg-primary",
        className
      )}
    />
  );
};

export default Underline;
