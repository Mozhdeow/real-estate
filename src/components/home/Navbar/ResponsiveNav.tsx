'use client'

import React, {useState} from 'react';
import Nav from "@/components/home/Navbar/Nav";
import MobileNav from "@/components/home/Navbar/MobileNav";

function ResponsiveNav() {

    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () => setShowNav(true)
    const closeNavHandler = () => setShowNav(false)

    return (
        <div>
            <Nav openNav={openNavHandler}/>
            <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
        </div>
    );
}

export default ResponsiveNav;