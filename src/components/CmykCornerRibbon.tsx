import React from "react";

export function CmykCornerRibbon({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0 -scale-x-100";
      case "bottom-left":
        return "bottom-0 left-0 -scale-y-100";
      case "bottom-right":
        return "bottom-0 right-0 rotate-180";
    }
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none absolute h-16 w-16 sm:h-24 sm:w-24 z-10 ${getPositionClasses()} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="0,0 24,0 0,24" fill="#00A8FF" />
      <polygon points="24,0 48,0 0,48 0,24" fill="#E6007E" />
      <polygon points="48,0 72,0 0,72 0,48" fill="#FFCC00" />
      <polygon points="72,0 96,0 0,96 0,72" fill="#0055FF" />
    </svg>
  );
}

export function CmykBar({ className = "h-1 w-16" }: { className?: string }) {
  return (
    <div className={`flex rounded-full overflow-hidden ${className}`} aria-hidden="true">
      <span className="w-1/4 bg-[#00A8FF]" />
      <span className="w-1/4 bg-[#E6007E]" />
      <span className="w-1/4 bg-[#FFCC00]" />
      <span className="w-1/4 bg-[#0055FF]" />
    </div>
  );
}

