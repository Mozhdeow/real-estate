import React from 'react';
import Link from "next/link";
import {navLinks} from "../../../../constant/constant";
import {CgClose} from "react-icons/cg";

interface props {
    showNav: boolean;
    closeNav: () => void;
}

function MobileNav({showNav,closeNav}:props) {
    const navOpen = showNav?"translate-x-0": "translate-x-[100%]";
    return (
        <>
            <div
                className={`transform fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen
                ${navOpen}`}>
            </div>
            {/*    nav links*/}
            <div dir="rtl"
                 className={`right-0 text-white transform transition-all duration-500 delay-300 fixed flex justify-center flex-col
                     h-full w-[60%] bg-[#c1205e] space-y-6 z-[10000] ${navOpen}`}>
                {navLinks.map((item) => (
                    <Link href={item.url} key={item.id}>
                        <p className="text-[20px] mr-12 border-b-[1.5px] w-fit border-whitesm:text[30px]
                             font-medium hover:text-yellow-300">{item.label}</p>
                    </Link>
                ))}
                {/*close button*/}
                <CgClose onClick={closeNav}
                    className="absolute top-[0.7rem] left-[1.4rem] text-white sm:w-8 sm:h-8 h-8 w-8 cursor-pointer"/>
            </div>


        </>
    );
}

export default MobileNav;