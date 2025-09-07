// src/types/react-awesome-slider-autoplay.d.ts
declare module "react-awesome-slider/dist/autoplay" {
  import type { ComponentType } from "react";
  import type { AwesomeSliderProps } from "react-awesome-slider";

  export interface AutoplayProps extends AwesomeSliderProps {
    play?: boolean;
    cancelOnInteraction?: boolean;
    interval?: number;
  }

  // No `any`: constrain to the real prop type the HOC expects/returns
  const withAutoplay: (
    Component: ComponentType<AwesomeSliderProps>
  ) => ComponentType<AutoplayProps>;

  export default withAutoplay;
}
