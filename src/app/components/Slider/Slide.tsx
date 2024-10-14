import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Slide({ name, imgFront, imgBack, bgFront, bgBack, color, link }: SliderProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={link} style={!isHovered?{backgroundImage:bgFront }:{backgroundImage:bgBack}} className="select-none flex flex-col justify-between h-[450px] min-w-[250px] w-[250px] rounded-3xl m-3 cursor-grab active:cursor-grabbing relative overflow-hidden" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <p className={`pt-4 pl-4 text-4xl`} style={{ color:color}}>{name}</p>
            <div className='flex w-full h-full items-end justify-end'>
                <div className='relative h-[95%] w-[85%]'>
                    <Image src={isHovered?imgBack:imgFront} alt={name} style={{objectFit:'cover'}} className='select-none pointer-events-none' quality={100} fill sizes='70vw'/>
                </div>
            </div>  
            <div  className={`w-[35px] h-[35px] z-[2] absolute top-[550px] left-[250px] sm:top-[400px] sm:left-[200px] rounded-full z-[1] p-2`} style={{ backgroundColor:color}}>
                <svg viewBox="0 0 20 20">
                    <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z" fill='#fff'></path>
                </svg>
            </div>
        </Link> 
    )
}

type SliderProps = {
    name: string;
    imgFront: string;
    imgBack: string;
    bgFront: string;
    bgBack: string;
    color: string;
    link: string;
};
