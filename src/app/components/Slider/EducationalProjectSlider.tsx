/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useData } from "@/app/contexts/data";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeProjetEducatifSlider() {
    const { leProjetEducatif } = useData();
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = leProjetEducatif?.length || 0;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(goToNext, 5000);
    };
    const goToNext = () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);};
    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };
    const goToSlide = (index: number) => { setCurrentIndex(index)};
    useEffect(() => {
        if (totalSlides > 0) {
            startInterval();
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [totalSlides]);
    const handleDragEnd = (event: any, info: any) => {
        if (info.offset.x < -50) {
            goToNext();
        } else if (info.offset.x > 50) {
            goToPrev();
        }
    };
    return (
        <section className="w-full max-w-[1200px] flex flex-col justify-center px-8 pb-16 mx-auto gap-1">
            <h3 className="text-3xl uppercase">Le projet</h3>
            <h4 className="text-3xl">éducatif</h4>
            <p className="mt-4">Établissement Catholique d&apos;Enseignement de la maternelle à la terminale, La Providence accueille en référence aux valeurs évangéliques, les familles qui en font le choix pour leurs enfants. Partenaire du service public d&apos;enseignement, l&apos;établissement est sous contrat d&apos;association avec l&apos;État. À la suite de Nicolas Barré, la communauté éducative veut :</p>
            <div className="relative w-full max-w-[1200px] mx-auto mt-4">
                <div className="overflow-hidden relative h-[350px]">
                    <AnimatePresence initial={false}>
                        {leProjetEducatif?.map((slide, index) =>
                            index === currentIndex && (
                                <motion.div key={index} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing px-8" drag="x" dragConstraints={{left: 0, right: 0}} onDragEnd={handleDragEnd} style={{minHeight: "350px"}}>
                                    <div className="p-8 rounded-3xl bg-gray-100 w-full h-full flex flex-col justify-center font-light">
                                        <h3 className="text-2xl font-bold underline uppercase">{slide.title}</h3>
                                        <blockquote className="italic text-bold text-2xl">{slide.citation}</blockquote>
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
                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </div>
                <button onClick={goToPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl font-bold">{"<"}</button>
                <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl font-bold">{">"}</button>
                <div className="flex justify-center mt-4 space-x-2">
                    {leProjetEducatif?.map((_, index) => (
                        <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}/>
                    ))}
                </div>
            </div>
        </section>
    );
}