"use client";

import Button from "./button";

const ResumeButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={className}
      onClick={() => window.open("/resume.pdf", "_blank")}
    >
      résumé
    </Button>
  );
};

export default ResumeButton;
