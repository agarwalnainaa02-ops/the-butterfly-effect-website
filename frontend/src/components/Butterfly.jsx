import React from "react";

const Butterfly = ({ size = 28, color = "#2f2323", className = "", style = {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      style={{ color, ...style }}
      aria-hidden="true"
    >
      {/* Body */}
      <path
        d="M32 12 C 32.7 16 32.7 22 32.5 32 C 32.4 42 32 50 32 52 C 32 51 31.6 42 31.5 32 C 31.3 22 31.3 16 32 12 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Antennae */}
      <path
        d="M32 14 C 30 9 27 7 25 7 M32 14 C 34 9 37 7 39 7"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        opacity="0.85"
      />
      {/* Left upper wing */}
      <path
        d="M31 18 C 18 12 6 18 6 30 C 6 38 14 36 22 32 C 28 30 31 26 31 22 Z"
        fill="currentColor"
        opacity="0.78"
      />
      {/* Left lower wing */}
      <path
        d="M31 34 C 22 36 10 38 10 46 C 10 54 22 52 28 46 C 31 42 31 38 31 36 Z"
        fill="currentColor"
        opacity="0.66"
      />
      {/* Right upper wing */}
      <path
        d="M33 18 C 46 12 58 18 58 30 C 58 38 50 36 42 32 C 36 30 33 26 33 22 Z"
        fill="currentColor"
        opacity="0.78"
      />
      {/* Right lower wing */}
      <path
        d="M33 34 C 42 36 54 38 54 46 C 54 54 42 52 36 46 C 33 42 33 38 33 36 Z"
        fill="currentColor"
        opacity="0.66"
      />
      {/* Faint vein detail */}
      <path
        d="M14 28 C 20 26 26 25 30 24 M14 44 C 20 44 26 42 30 40 M50 28 C 44 26 38 25 34 24 M50 44 C 44 44 38 42 34 40"
        stroke="var(--tbe-cream)"
        strokeWidth="0.4"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

export default Butterfly;
