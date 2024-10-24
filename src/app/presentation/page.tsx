"use client"

import Image from "next/image";
import Slider from "../components/Slider/Slider";
import { useData } from "../contexts/data";
import ProjetEducatif from "./sections/projetEducatif";
import NotreHistoire from "./sections/notreHistoire";
import Internat from "./sections/internat";
import LaBrochure from "./sections/laBrochure";

export default function Presentation() {
    const data = useData()
  return (
    <main className="md:pt-[10vh] sm:pt-[5vh]">
      <h1 className="mt-20 w-[90%] text-center text-4xl max-w-[1200px] mx-auto xl:mb-12 uppercase font-bold">Groupe scolaire</h1>
      <h2 className="text-4xl font-light text-center max-w-[1200px] w-[90%] mx-auto">La Providence Nicolas Barré</h2>
      <section className="max-w-[1200px] mx-auto w-full h-full mt-10">
        <Image src="https://laprovidencenicolasbarre.s3.eu-west-3.amazonaws.com/images/groupe-scolaire-la-providence-nicolas-barre-le-mesnil-esnard-ecole-college-lycee-prive-19.jpg" alt="Photo du groupe scolaire" width={1200} height={600}/>
      </section>
      <section className="max-w-[1200px] mx-auto mt-8">
        <h3 className="uppercase text-2xl font-bold pl-4">Le mot</h3>
        <h4 className="text-2xl font-normal pl-4 mb-[-50px]">des directrices</h4>
        <Slider props={data.directrices}/>
      </section>
      <section className="max-w-[1200px] mx-auto p-4 flex flex-col gap-2 mt-[-30px]">
        <h3 className="text-3xl font-normal">Bienvenue à la Providence Nicolas Barré</h3>
        <p className="font-light italic">De deux à dix-huit ans, de la maternelle, tout jeune, fille ou garçon, baptisé ou pas, très doué pour les études ou beaucoup moins, d&apos;origine sociale modeste ou plus favorisée, peut-être accueilli dans notre établissement où il comprendra, nous l&apos;espérons, nous le voulons, nous nous y engageons par notre projet éducatif, que les adultes espèrent en lui, croient en lui, l&apos;aiment tel qu&apos;il est et non tel qu&apos;ils rêvaient qu&apos;il soit.</p>
        <p className="font-bold">Trois établissements (école, collège, lycée), trois directions, mais un seul projet éducatif, une seule tutelle, un même esprit.</p>
        <ul>
            <li className="list-disc mx-8"><span className="font-bold">Trois établissements </span>que nous vous invitons à découvrir à travers ce site.</li>
            <li className="list-disc mx-8"><span className="font-bold">Trois établissements </span>dont vous percevrez, nous l&apos;espérons, tout à la fois l&apos;unité et les différences car, naturellement, on ne propose ni les mêmes règles, ni les mêmes méthodes d&apos;enseignement à l&apos;école, au collège, ou au lycée.</li>
            <li className="font-bold list-disc mx-8"><span>Trois établissements,</span> peut-être faudrait-il dire 4, ou même 5 ...</li>
        </ul>
        <ul className="font-bold">Bienvenue donc :
            <li className="mt-4 font-light italic list-disc mx-8">à l&apos;école maternelle</li>
            <li className="font-light italic list-disc mx-8">à l&apos;école élémentaire</li>
            <li className="font-light italic list-disc mx-8">au collège</li>
            <li className="font-light italic list-disc mx-8">au lycée d&apos;enseignement général</li>
            <li className="font-light italic list-disc mx-8">au lycée d&apos;enseignement technologique</li>
        </ul>
        <p>Ce site récapitule les informations pratiques, les activités éducatives et pédagogiques... Prêtez une attention particulière aux projets qui nous animent et aidez nous à promouvoir pour demain la qualité d&apos;éducation du service rendu aux jeunes confiés à notre sollicitude.</p>
      </section>
      <section className="w-full max-w-[1200px] flex flex-col justify-center pb-16 mx-auto gap-1">
        <h3 className="text-3xl uppercase px-8">Le projet</h3>
        <h4 className="text-3xl px-8">éducatif</h4>
        <p className="mt-4 px-8">Établissement Catholique d&apos;Enseignement de la maternelle à la terminale, La Providence accueille en référence aux valeurs évangéliques, les familles qui en font le choix pour leurs enfants. Partenaire du service public d&apos;enseignement, l&apos;établissement est sous contrat d&apos;association avec l&apos;État. À la suite de Nicolas Barré, la communauté éducative veut :</p>
        <ProjetEducatif/>
      </section>
      <NotreHistoire/>
      <Internat/>
      <LaBrochure/>
    </main>
  );
}
