import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/logo2.webp"
import Chat from "../Chat/Chat"
import { useData } from "@/app/contexts/data"

export default function Footer (){
    const data = useData();
    return (
        <footer className="w-full h-full flex flex-col gap-4 max-w-[1200px] mx-auto">
            <Chat/>
            <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 font-light py-4">
                <Image src={logo} alt="Logo de la providence" width={100} height={100}/>
                <ul className="flex flex-wrap items-center gap-4 justify-center">
                    <li className="flex flex-col items-center justify-center">
                        <h3 className="font-semibold text-[#FBB800]">École</h3>
                        <Link href={"/"} className="flex flex-col">
                            <div className="flex gap-1 items-center">
                                <svg fill="#000000" version="1.1" id="Capa_1" width="15px" height="15px" viewBox="0 0 395.71 395.71" xmlSpace="preserve">
                                    <g>
	                                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                                    </g>
                                </svg>
                                <p>6 Rue de Neuvillette,</p>
                            </div>
                            <p>76240 Le Mesnil-Esnard</p>
                        </Link>
                        <Link href={"/"} className="flex gap-1 items-center self-start">
                            <svg width="15px" height="15px" viewBox="0 0 16 16" fill="none">
                                <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#000000"/>
                            </svg>
                            <p>02 32 86 50 90</p>
                        </Link>
                        <Link href={"/"} className="flex gap-1 items-center self-start">
                            <svg width="15px" height="15px" viewBox="0 -3.5 32 32" version="1.1">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Icon-Set-Filled" transform="translate(-414.000000, -261.000000)" fill="#000000">
                                        <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"/>
                                    </g>
                                </g>
                            </svg>
                            <p>0762041f@ac-rouen.fr</p>
                        </Link>
                    </li>
                    <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                    <li className="flex flex-col items-center justify-center">
                        <h3 className="font-semibold text-[#18AAE2]">Collège</h3>
                        <Link href={"/"} className="flex flex-col">
                            <div className="flex gap-1 items-center">
                                <svg fill="#000000" version="1.1" id="Capa_1" width="15px" height="15px" viewBox="0 0 395.71 395.71" xmlSpace="preserve">
                                    <g>
	                                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                                    </g>
                                </svg>
                                <p>6 Rue de Neuvillette,</p>
                            </div>
                            <p>76240 Le Mesnil-Esnard</p>
                        </Link>
                        <Link href={"/"} className="flex gap-1 items-center self-start">
                            <svg width="15px" height="15px" viewBox="0 0 16 16" fill="none">
                                <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#000000"/>
                            </svg>
                            <p>02 32 86 50 90</p>
                        </Link>
                        <Link href={"/"} className="flex gap-1 items-center self-start">
                            <svg width="15px" height="15px" viewBox="0 -3.5 32 32" version="1.1">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Icon-Set-Filled" transform="translate(-414.000000, -261.000000)" fill="#000000">
                                        <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"/>
                                    </g>
                                </g>
                            </svg>
                            <p>0762565a@ac-rouen.fr</p>
                        </Link>
                    </li>
                    <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                    <li className="flex flex-col items-center justify-center">
                        <h3 className="font-semibold text-[#E3097B]">Lycée</h3>
                        <Link href={"/"} className="flex flex-col">
                            <div className="flex gap-1 items-center">
                                <svg fill="#000000" version="1.1" id="Capa_1" width="15px" height="15px" viewBox="0 0 395.71 395.71" xmlSpace="preserve">
                                    <g>
	                                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                                    </g>
                                </svg>
                                <p>6 Rue de Neuvillette,</p>
                            </div>
                            <p>76240 Le Mesnil-Esnard</p>
                        </Link>
                        <Link href={"/"} className="flex gap-1 items-center self-start">
                            <svg width="15px" height="15px" viewBox="0 0 16 16" fill="none">
                                <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#000000"/>
                            </svg>
                            <p>02 32 86 50 90</p>
                        </Link>
                        <Link href={"/"} className="flex gap-1 items-center self-start">
                            <svg width="15px" height="15px" viewBox="0 -3.5 32 32" version="1.1">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Icon-Set-Filled" transform="translate(-414.000000, -261.000000)" fill="#000000">
                                        <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"/>
                                    </g>
                                </g>
                            </svg>
                            <p>0761713z@ac-rouen.fr</p>
                        </Link>
                    </li>
                </ul>
                <span className="h-[2px] w-[85%] bg-gray-300"></span>
                <div className="flex items-center gap-10">
                    <Link href={"/"}>
                        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24">
                            <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
                        </svg>
                    </Link>
                    <Link href={"/"}>
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                        </svg>
                    </Link>
                </div>
                <div className="flex">

                </div>
            </div>
            <div className="flex justify-center items-center gap-4 p-4">
                <Link href={"/"}>Mentions Légales</Link>
                <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                <Link href={"/"}>Réalisation : Fl0jfk</Link>
            </div>
        </footer>
    )
}