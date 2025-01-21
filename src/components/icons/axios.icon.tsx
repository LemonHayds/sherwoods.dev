"use client";

const AxiosIcon = ({
  color,
  className = "",
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path
        fill={color}
        d="m 34,43.977569 27.379067,-22.912155 0.0385,91.494586 -9.3189,7.74007 -0.15403,-76.091455 z"
      ></path>
      <path
        fill={color}
        d="M 96.961687,82.322502 69.582627,105.23466 69.544127,13.74007 78.863017,6 l 0.15403,76.091452 z"
      ></path>
    </svg>
  );
};

export default AxiosIcon;