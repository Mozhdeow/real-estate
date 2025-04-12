'use client'

import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import {cities} from "@/components/data/data";
import CityCard from "@/components/home/city/CityCard";
import Carousel from "react-multi-carousel";

// const responsive = {
//     tablet: {
//         breakpoint: {max: 1324, min: 764},
//         items: 3,
//         slidesToSlide: 1,
//     },
//     mobile: {
//         breakpoint: {max: 764, min: 0},
//         items: 1,
//         slidesToSlide: 1,
//     }
// };

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function CitySlider() {
    return (
        <div>
            <Carousel arrows={true}
                      autoPlay={true}
                      autoPlaySpeed={5000}
                      infinite
                      responsive={responsive}
            >
                {cities.map((city) => (
                    <div key={city.id}>

                        <CityCard city={city}/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CitySlider;