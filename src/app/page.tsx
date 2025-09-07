import { Button } from "@/components/ui/button";
import Slider from "@/components/utils/slider";
import MainSlider from "@/components/utils/slider";

export default function Home() {
  return (
    <>
      <main className="container-fluid mx-auto mt-9 h-110 text-center ">
        <Slider className="h-110" autoplay={true} autoplaySpeed={3000}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Slider>
      </main>

      <div className="container mx-auto text-4xl">Home Page</div>
    </>
  );
}
