import { Globe } from "@/components/ui/globe";
import React from "react";

const Earth = () => {
  return (
    <div className="w-full px-6 border-b border-neutral-300">
      <div className="bg-background border-x border-neutral-300 relative flex size-full w-full items-center justify-center overflow-hidden md:px-40 pt-8 pb-40 md:pb-60">
        <Globe className="top-6" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
};

export default Earth;
