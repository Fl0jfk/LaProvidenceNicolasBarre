"use client"

import RollingSlider from "./components/Slider/RollingSlider";
import Video from "./components/Video/Video";
import Banner from "./components/Banner/Banner";
import News from "./components/News/News";
import LeProjetEducatifSlider from "./components/Slider/EducationalProjectSlider";
import { useData } from "./contexts/data";

export default function Home() {
  const { leProjetEducatif } = useData()
  return (
    <main className="md:pt-[10vh] sm:pt-[5vh]">
      <Banner/>
      <h1 className="mt-12 w-[90%] text-center text-4xl max-w-[1200px] mx-auto xl:mb-12">Bienvenue à La Providence Nicolas Barré</h1>
      <Video/>
      <section className="w-full max-w-[1200px] flex flex-col items-center justify-center text-3xl uppercase shadow-md px-4 pb-16 mx-auto">
        <div className="flex gap-2 w-full items-center justify-center">
          <h2 className="text-[#FBB800]">La Providence</h2>
          <h2 className="text-[#18AAE2]">Nicolas Barré</h2>
        </div>
        <p className="text-[#E3097B] font-semibold">Une passeport pour l&apos;avenir</p>
      </section>
      <RollingSlider/>
      <News/>
      <section className="w-full max-w-[1200px] flex flex-col justify-center pb-16 mx-auto gap-1">
        <h3 className="text-3xl uppercase px-8">Le projet</h3>
        <h4 className="text-3xl px-8">éducatif</h4>
        <p className="mt-4 px-8"> Établissement Catholique d&apos;Enseignement de la maternelle à la terminale, La Providence accueille en référence aux valeurs évangéliques, les familles qui en font le choix pour leurs enfants. Partenaire du service public d&apos;enseignement, l&apos;établissement est sous contrat d&apos;association avec l&apos;État. À la suite de Nicolas Barré, la communauté éducative veut :</p>
        <LeProjetEducatifSlider slides={leProjetEducatif}/>
      </section>
    </main>
  );
}