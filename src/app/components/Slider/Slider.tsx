"use client"

import { useState, useRef } from "react";
import Slide from "./Slide";

export default function Slider({ props }: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };
  const handleMouseUp = () => { setIsDragging(false);};
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX;
    const diffX = x - startX;
    const newScrollLeft = scrollLeft - diffX;
    containerRef.current.scrollLeft = newScrollLeft;
  };
  return (
    <div ref={containerRef} className="flex items-center overflow-x-scroll snap-x snap-mandatory cursor-grab select-none h-[600px]" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onMouseMove={handleMouseMove}>
      {props.map((categories) => {
        return <Slide grade={categories.grade} name={categories.name} key={categories.id} imgFront={categories.imgFront} imgBack={categories.imgBack} bgFront={categories.bgFront} bgBack={categories.bgBack} color={categories.color} link={categories.link}/>
      })}
    </div>
  );
}

type SliderProps = {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any[];
};