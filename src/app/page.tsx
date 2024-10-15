import RollingSlider from "./components/Slider/RollingSlider";
import Video from "./components/Video/Video";

export default function Home() {
  return (
    <main className="md:pt-[10vh] sm:pt-[5vh]">
      <h1 className="my-4 w-[90%] text-center text-4xl sm:mt-28 md:mt-20 max-w-[1200px] mx-auto">Bienvenue à La Providence Nicolas Barré</h1>
      <Video/>
      <section className="w-full max-w-[1017px] flex flex-col items-center justify-center text-3xl uppercase shadow-md p-4 mx-auto">
        <div className="flex gap-2 w-full items-center justify-center">
          <h2 className="text-[#FBB800]">La Providence</h2>
          <h2 className="text-[#18AAE2]">Nicolas Barré</h2>
        </div>
        <p className="text-[#E3097B] font-semibold">Une passeport pour l&apos;avenir</p>
      </section>
      <RollingSlider/>
    </main>
  );
}
