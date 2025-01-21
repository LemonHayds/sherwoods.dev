import { clsxm } from "../lib/clsxm";

const SectionContainer = (props: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { id, children, className = "" } = props;

  return (
    <section id={id} className={clsxm("py-4", className)}>
      {children}
    </section>
  );
};

export default SectionContainer;
