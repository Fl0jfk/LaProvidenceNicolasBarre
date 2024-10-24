/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
    title: string;
    citation?: string;
    text?: string;
    textX?: string;
    list?: { id: number; text: string }[];
}

interface LeProjetEducatifSliderProps {
    slides: Slide[];
}

export default function LeProjetEducatifSlider({slides}:LeProjetEducatifSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundClass, setBackgroundClass] = useState("bg-gray-100");
    const totalSlides = slides?.length || 0;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(goToNext, 5000);
    };
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };
    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
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
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;
            if (pathname === "/presentation") {
                setBackgroundClass("bg-white");
            } else {
                setBackgroundClass("bg-gray-100");
            }
        }
    }, []);
    return (
        <div className="relative w-full max-w-[1200px] mx-auto mt-4">
            <div className="overflow-hidden relative h-[350px] sm:h-[500px]">
                <AnimatePresence initial={false}>
                    {slides?.map((slide, index) =>
                        index === currentIndex && (
                            <motion.div key={index} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing px-8 sm:h-[400px]" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleDragEnd} style={{ minHeight: "350px" }}>
                                <div className={`p-8 rounded-3xl w-full h-full flex flex-col justify-center font-light ${backgroundClass}`}>
                                    <h3 className="text-2xl font-bold underline uppercase">{slide.title}</h3>
                                    {slide.citation&&<blockquote className="italic text-bold text-2xl">{slide.citation}</blockquote>}
                                    {slide.text&& (<p className="italic">{slide.text}</p>)}
                                    {slide.textX&& (<p className="italic">{slide.textX}</p>)}
                                    {slide.list&& (
                                        <ul className="list-disc list-inside italic">
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
            <div className="flex justify-center space-x-2 mt-[-50px]">
                {slides?.map((_, index) => (
                    <button key={index} onClick={()=>goToSlide(index)} className={`w-3 h-3 rounded-full ${ index === currentIndex ? "bg-black" : "bg-gray-300"}`}/>
                ))}
            </div>
        </div>
    );
}