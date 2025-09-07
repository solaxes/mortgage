// src/components/utils/Slider.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

// Load the library only on the client:
const AwesomeSlider = dynamic(() => import("react-awesome-slider"), {
  ssr: false,
});

import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

// Import CSS inside a client file so it doesn't run on the server
import "react-awesome-slider/dist/styles.css";

type SliderProps = React.PropsWithChildren<Record<string, unknown>>;

export default function Slider({ children, ...props }: SliderProps) {
  return (
    <AutoplaySlider
      play={true} // enable autoplay
      cancelOnInteraction={false} // keep playing even if user interacts
      interval={3000} // slide interval in ms
      {...props}
    >
      {children}
    </AutoplaySlider>
  );
}
