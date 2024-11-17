import React from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function VideoBanner() {
  const { width } = useWindowSize();
  return (
    <div className="relative w-full max-h-96 flex items-center overflow-hidden">
      <div className="absolute z-40 w-full">
        <h2 className="md:text-7xl text-3xl opacity-50 text-white text-center font-bold ">
          24H TURNAROUND
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
        src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FrealState.mp4?alt=media&token=04e8903b-702b-4231-8dfb-ec80cc60966c"
        type="video/mp4"
      />
    </div>
  );
}
