'use client'

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {cities} from "@/components/data/data";
import CityCard from "@/components/home/city/CityCard";

const responsive = {
    tablet: {
        breakpoint: {max: 1324, min: 764},
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: {max: 764, min: 0},
        items: 1,
        slidesToSlide: 1,
    }
};

function CitySlider() {
    return (
        <div>
            <Carousel arrows={true}
                      autoPlay={true}
                      autoPlaySpeed={5000}
                      infinite
                      responsive={responsive}>
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