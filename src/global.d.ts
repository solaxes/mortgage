// src/global.d.ts
declare module "react-awesome-slider/dist/autoplay" {
  import type { ComponentType } from "react";
  import type { AwesomeSliderProps } from "react-awesome-slider";

  export interface AutoplayProps extends AwesomeSliderProps {
    play?: boolean;
    cancelOnInteraction?: boolean;
    interval?: number;
  }

  const withAutoplay: (
    Comp: ComponentType<any>
  ) => ComponentType<AutoplayProps>;
  export default withAutoplay;
}
