"use client";

const FirebaseIcon = ({
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
        d="M34.872 0a1.94 1.94 0 0 0-.307.028A1.933 1.933 0 0 0 32.97 1.64L17.911 98l9.911-18.867 25.066-47.724L36.6 1.028l-.002-.002A1.935 1.935 0 0 0 34.872 0Zm28.387 18.294c-.722 0-1.38.396-1.716 1.035l-7.459 14.203-.008-.014-34.1 64.922 10.75-10.767 34.46-34.52 11.503-11.524-11.712-22.3a1.938 1.938 0 0 0-1.718-1.035zm32.175 8.301a1.907 1.907 0 0 0-.52.054 1.938 1.938 0 0 0-.913.514L79.18 42.006 66.623 54.589l-48.994 49.078 41.613 23.337h.002a7.846 7.846 0 0 0 7.653 0l42.532-23.647-12.145-75.153v.008a1.937 1.937 0 0 0-1.324-1.524 1.957 1.957 0 0 0-.526-.093Zm14.938 77.4-.6.049.249.146z"
      ></path>
    </svg>
  );
};

export default FirebaseIcon;
