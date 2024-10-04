'use client'
import React, {useEffect} from 'react';
import Hero from "@/components/home/hero/Hero";
import Apartment from "@/components/home/apartment/Apartment";
import Properties from "@/components/home/property/Properties";
import CityProperties from "@/components/home/city/CityProperties";
import BuildingFeature from "@/components/home/BuildingFeature/BuildingFeature";
import Reviews from "@/components/home/reviews/Reviews";
import Blog from "@/components/home/blogs/Blog";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

    useEffect(() => {
        const initAos = async () => {
            await import('aos')
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        }
        initAos();
    }, [])

    return (
        <div className="overflow-hidden">
            <Hero/>
            <Apartment/>
            <Properties/>
            <CityProperties/>
            <BuildingFeature/>
            <Reviews/>
            <Blog/>
        </div>
    );
};

export default Home;
