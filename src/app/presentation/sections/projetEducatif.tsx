"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image"

export default function ProjetEducatif(){
    const { leProjetEducatif } = useData();
    return (
        <section className="flex sm:flex-col md:flex-col gap-4 bg-gray-100 p-8">
            <div className="xl:w-1/2 lg:w-1/2">
                <h3>Projet</h3>
                <h4>éducatif</h4>
                <p>Le projet éducatif de l&apos;école, du collège et du lycée La Providence vise à ce que tout membre de la communauté éducative se sente invité à vivre le message du Christ :</p>
                <p>" Comme je vous ai aimés, aimez-vous les uns les autres. "</p>
                <p>et à ce que chaque jeune, à travers l&apos;attitude des adultes, l&apos;entende de la manière suivante :</p>
                <p>" Je crois en toi, j&apos;espère en toi, tu es capable de grandir, de surmonter les difficultés, je te fais confiance. "</p>
                <p>" Je t&apos;aime comme tu es, c&apos;est à dire comme Dieu t&apos;aime. "</p>
                <p>Le projet éducatif de La Providence inspiré par le message de Jésus-Christ tend " à promouvoir la personne dans toutes ses dimensions." Il se veut fidèle à l&apos;inspiration de Nicolas Barré, fondateur au XVII° siècle des Sœurs de l&apos;Enfant-Jésus Providence de Rouen :</p>
                <p>Accueillir, instruire, éduquer chacun selon son génie propre.</p>
                <div className="w-full flex justify-start">
                    <Image src={"https://laprovidencenicolasbarre.s3.eu-west-3.amazonaws.com/images/groupe-scolaire-la-providence-nicolas-barre-le-mesnil-esnard-ecole-college-lycee-prive-27.jpg"} alt="Photo de deux enfants qui révisent" width={500} height={300}/> 
                </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2">
                <div className="w-full flex justify-end">
                    <Image src={"https://laprovidencenicolasbarre.s3.eu-west-3.amazonaws.com/images/groupe-scolaire-la-providence-nicolas-barre-le-mesnil-esnard-ecole-college-lycee-prive-4.jpg.webp"} alt="Photo d'une classe de maternelle" width={500} height={300}/>
                </div>
                <p>Établissement Catholique d&apos;Enseignement de la maternelle à la terminale, La Providence accueille en référence aux valeurs évangéliques, les familles qui en font le choix pour leurs enfants. Partenaire du service public d&apos;enseignement, l&apos;établissement est sous contrat d'association avec l&apos;État.</p>
                <ul className="flex flex-col gap-6">À la suite de Nicolas Barré, la communauté éducative veut :
                {leProjetEducatif?.map((slide, index) =>
                             (
                                <li key={index} className="w-full h-full flex items-center justify-center px-8 bg-white rounded-3xl">
                                    <div className="p-8 rounded-3xl w-full h-full flex flex-col justify-center font-light">
                                        <h3 className="text-2xl font-bold underline uppercase">{slide.title}</h3>
                                        <blockquote className="italic text-bold text-2xl">"{slide.citation}"</blockquote>
                                        {slide.text && <p className="italic">{slide.text}</p>}
                                        {slide.textX && <p className="italic">{slide.textX}</p>}
                                        {slide.list.length > 0 && (
                                            <ul className="mt-4 list-disc list-inside italic">
                                                {slide.list.map((item) => (
                                                    <li key={item.id}>{item.text}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            )
                        )}
                </ul>
            </div>
        </section>
    )
}