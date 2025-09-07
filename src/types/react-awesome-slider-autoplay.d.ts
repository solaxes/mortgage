// types/react-awesome-slider-autoplay.d.ts
declare module "react-awesome-slider/dist/autoplay" {
  import type { ComponentType } from "react";
  import type { AwesomeSliderProps } from "react-awesome-slider";

  export interface AutoplayProps extends AwesomeSliderProps {
    play?: boolean;
    cancelOnInteraction?: boolean;
    interval?: number;
  }

  // HOC that returns a component accepting AutoplayProps
  export default function withAutoplay<T extends ComponentType<any>>(
    Component: T
  ): ComponentType<AutoplayProps>;
}
