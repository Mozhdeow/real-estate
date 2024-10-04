'use client'

import React, {useEffect, useState} from 'react';
import {FaHouse} from "react-icons/fa6";
import Link from "next/link";
import {FaUserCircle} from "react-icons/fa";
import {HiBars3BottomRight} from "react-icons/hi2";
import {navLinks} from "../../../../constant/constant";

interface props {
    openNav: () => void
}

function Nav({openNav}: props) {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true)
            if (window.scrollY < 90) setNavBg(false)
        }

        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        }
    }, [])

    return (
        <div className={`fixed h-[10vh] z-[100] w-full transition-all duration-200 
                ${navBg ? "bg-gray-800" : ""}`}>
            <div
                className="flex items-center justify-between h-full w-[95%] sm-[90%] xl-[80%] mx-auto flex-row-reverse">
                {/*logo*/}
                <div className="flex items-center space-x-2">
                    <h1 className="text-white font-bold text-sm sm:text-base md:text-xl font-titr">پکاملک</h1>
                    <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center
                    justify-center flex-col">
                        <FaHouse/>
                    </div>
                </div>
                {/*    nav links*/}
                <div className="lg:flex items-center space-x-14 text-white hidden">
                    {navLinks.map((item) => (
                        <Link href={item.url} key={item.id}>
                            <p className="font-medium hover:text-yellow-300">{item.label}</p>
                        </Link>
                    ))}
                </div>
                {/* burger menu*/}
                <HiBars3BottomRight onClick={openNav}
                    className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden"/>
                {/*    login button*/}

                <div className="flex items-center space-x-4">
                    <div className="flex items-center cursor-pointer rounded-full text-full space-x-2 text-white hover:text-red-400
                    transition-all duration-200">
                        <p className="font-bold text-xs sm:text-base">ورود / ثبت نام</p>
                        <FaUserCircle className="w-5 h-5"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Nav;