import React from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function VideoBanner() {
  const { width } = useWindowSize();
  return (
    <div className="relative w-full max-h-96 flex items-center overflow-hidden">
      <div className="absolute z-40 w-full">
        <h2 className="text-7xl opacity-50 text-white text-center font-bold ">
          24H TURNAROUND
        </h2>
        <h2 className="text-xl opacity-50 text-white text-center font-bold ">
          video
        </h2>
      </div>

      <video
        width={width}
        height="600"
        autoPlay
        loop
        muted
        controls={true}
        preload="none"
        src="/public/realState.mp4"
        type="video/mp4"
      />
    </div>
  );
}
