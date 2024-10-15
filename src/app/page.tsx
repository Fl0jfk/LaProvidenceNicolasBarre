import RollingSlider from "./components/Slider/RollingSlider";
import Video from "./components/Video/Video";

export default function Home() {
  return (
    <main className="md:pt-[10vh] sm:pt-[5vh]">
      <h1 className="my-4 w-[90%] text-center text-4xl sm:mt-28 md:mt-20 max-w-[1200px] mx-auto">Bienvenue à La Providence Nicolas Barré</h1>
      <Video/>
      <RollingSlider/>
    </main>
  );
}
