import Image from 'next/image';
import Link from 'next/link';

export default function Slide({name, imgFront, imgBack, bgFront, bgBack, color, link}: SliderProps) {
    return (
        <Link href={link} className={`select-none flex flex-col justify-between xl:hover:scale-105 lg:hover:scale-105 h-[600px] min-w-[300px] sm:h-[450px] sm:min-w-[250px] rounded-3xl m-3 p-4 cursor-grab active:cursor-grabbing relative overflow-hidden transition ease-in-out duration-300 bg-[${bgFront}]`}>
            <p className={`text-4xl z-[2] text-[${color}]`}>{name}</p>
            <Image src={imgFront} alt={name} style={{objectFit:"cover"}} className={`rounded-3xl select-none pointer-events-none `} quality={100} fill sizes='50vw'/>     
            <div className={`w-[35px] h-[35px] z-[2] absolute top-[550px] left-[250px] sm:top-[400px] sm:left-[200px] bg-[${color}] rounded-full z-[1] p-2`}>
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
    imgBack:string;
    bgFront:string;
    bgBack:string;
    color:string;
    link:string;
};