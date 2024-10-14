import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from "../../assets/logo2.webp";
import { useData } from '@/app/contexts/data';

export default function Navbar({menuOpened, onLinkClick} :NavbarProps ){
    const [clickOnLink, setClickOnLink] = useState(menuOpened);
    const menuOpen = (clickOnLink ? "bg-white" : "hidden");
    const data = useData()
    const handleLinkClick = () => {
        setClickOnLink(false);
        onLinkClick({ clickOnLink: false });
    };
    useEffect(() => {
        setClickOnLink(menuOpened)
        if(menuOpened){
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpened])
    return (
        <AnimatePresence>
            {menuOpened && 
                <motion.nav 
                        className={`${menuOpen} gap-6 text-2xl flex flex-col justify-center top-0 left-0 fixed items-center w-full h-[100vh] z-[9]`}
                        initial={{translateX:"100%"}}
                        animate={{translateX:"0%", transition:{duration: 0.5, ease: "easeInOut"}}}
                        exit={{translateX:"100%", transition:{duration: 0.5, ease: "easeInOut"}}}
                    >
                    <div className='w-2/12 h-[10vh] flex items-center justify-center w-full'>
                        {Logo && 
                            <Link className='hover:scale-110 flex items-center justify-center' href="/" onClick={handleLinkClick} aria-label="Link to top">
                                <Image src={Logo} alt='Logo de La Providence Nicolas Barré' width={100} height={100} quality={100} className='cursor-pointer z-[8]'/>
                            </Link>
                        }
                    </div>
                    <div className={`flex flex-col gap-6 justify-center items-center w-full`}>
                        <Link className='hover:scale-110' href="/" onClick={handleLinkClick} aria-label="Lien vers la page d'accueil">Accueil</Link>
                        <Link className='hover:scale-110' href="/boutique" onClick={handleLinkClick} aria-label="Lien vers la page boutique">Boutique</Link>
                        <Link className='hover:scale-110' href="/notreequipe" onClick={handleLinkClick} aria-label="Lien vers la page Notre Equipe">Notre Équipe</Link>
                        <Link className='hover:scale-110' href="/contact" onClick={handleLinkClick} aria-label="Lien vers la page contact">Contact</Link>
                    </div>
                    <div className='flex gap-4'>
                        <Link href={`tel:${data.profile.telephone}`} className="hover:scale-[1.1] transition ease-in-out duration-100" onClick={handleLinkClick} target="blank">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link> 
                        <Link href="https://www.facebook.com/karine.beautezen/?locale=fr_FR" className="hover:scale-[1.1] transition ease-in-out duration-100" onClick={handleLinkClick} target="blank">
                            <svg width="30px" height="30px" viewBox="-5 0 20 20">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(-385.000000, -7399.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" fill='#000'></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                        <Link href="/" className="hover:scale-[1.1] transition ease-in-out duration-100" onClick={handleLinkClick} target="blank">
                            <svg fill="#000" width="30px" height="30px" viewBox="0 0 32 32">
                                <path d="M20.23 1.604c-0.008-0-0.017-0-0.027-0-5.961 0-10.793 4.832-10.793 10.793s4.832 10.793 10.793 10.793c5.955 0 10.783-4.822 10.793-10.775v-0.001c-0.004-5.953-4.816-10.781-10.763-10.809h-0.003zM1.004 1.604v28.792h5.274v-28.792z"></path>
                            </svg>
                        </Link>  
                        <Link href="" className="hover:scale-[1.1] transition ease-in-out duration-100" onClick={handleLinkClick} target="blank">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#000"/>
                                <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#000"/>
                                <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#000"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#000"/>
                            </svg>
                        </Link>
                    </div>
                    <p className="self-center text-xl px-12">Horaires : du Lundi au Vendredi: 10:00-19:00 / Samedi : 10:00-18:00 / Dimanche : Fermé</p>
                </motion.nav>
            }
        </AnimatePresence>  
    )
}

type NavbarProps = {
    menuOpened: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onLinkClick: any;
}