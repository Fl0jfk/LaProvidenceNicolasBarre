"use client"

import { useState } from 'react';
import Image from 'next/image';
import CrossButton from '../Buttons/CrossButton';
import Navbar from '../Navbar/Navbar';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';	
import Logo from "../../assets/logo2.webp";
import Link from 'next/link';

export default function Header(){
    const { scrollY } = useScroll();
    const [menuOpened, setMenuOpened] = useState(false);
    const [hidden, setHidden ] = useState(false);
    const opacityMenu = (!menuOpened ? "sm:opacity-95 md:opacity-95 h-[10vh] ease-linear duration-300" : "h-[100vh] ease-linear duration-300");
    const opacityLogo = (!menuOpened ? "ease-linear delay-100 duration-200 scale-1" : "ease-linear delay-150 duration-300 scale-0");
    const menuDisapear = (menuOpened ? "hidden" : "")
    const handleClick = () => { setMenuOpened(!menuOpened);};
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });
    const handleLinkClick = ({ clickOnLink } : handleLinkClickProps) => { setMenuOpened(clickOnLink)}
    const items = [
        { name: 'École', color: '#FBB800' },
        { name: 'Collège', color: '#18AAE2' },
        { name: 'Lycée', color: '#E3097B' }
    ];
    return (
        <motion.header 
            variants={{ visible: { y: 0 }, hidden: { y: "-100%" }}} 
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`flex p-4 justify-between items-center w-full sm:fixed md:fixed z-[12] md:mb-[100px] ${opacityMenu} self-center text-2xl overflow-hidden max-w-[1500px] mx-auto bg-white sm:shadow md:shadow`}>
            <div className='w-2/12 flex items-center h-full'>
                {Logo &&
                    <Link href="/">
                        <Image src={Logo} alt='Mon memoji' width={80} height={80} className={`cursor-pointer z-[8] ${opacityLogo}`} quality={100} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} />
                    </Link>
                }
            </div>
            <ul className={`flex gap-10 sm:gap-6 z-[9] text-2xl justify-center sm:text-lg uppercase w-8/12 ${menuDisapear}`}>
                {items.map((item, index) => (
                    <li key={index} className='flex flex-col group relative'>
                        <Link href={`/${item.name.toLowerCase()}`} aria-label={`Lien vers la page ${item.name}`} className="xl:group-hover:text-white lg:group-hover:text-white transition-colors duration-300 z-10 p-1">{item.name}</Link>
                        <span className={`h-[2px] w-full transition-transform duration-200 bg-[${item.color}] group-hover:scale-y-[20] group-hover:z-0 origin-bottom`}></span>
                        {index < items.length - 1 && (
                            <span className='absolute right-[-22px] top-[39%] sm:right-[-16px] transform-translate-1/2 w-2 h-2 rounded-full bg-gray-400'></span>
                        )}
                    </li>
                ))}
            </ul>
            <div className='w-2/12 flex justify-end items-center sm:mt-[-5px] h-full'>
                <Navbar menuOpened={menuOpened} onLinkClick={handleLinkClick} />
                <div className='flex justify-end w-[40] items-center h-full' onClick={() => handleClick()}>
                    <CrossButton menuOpened={menuOpened} />
                </div>
            </div>
        </motion.header>
    );
}

type handleLinkClickProps = {
    clickOnLink: boolean;
    onLinkClick: (clickOnLink: boolean) => void;
}
