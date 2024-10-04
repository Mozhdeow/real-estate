import React from 'react';
import SectionHeading from "@/components/helper/SectionHeading";
import CitySlider from "@/components/home/city/CitySlider";

function CityProperties() {
    return (
        <>
        <div className="py-16" dir="rtl">
            <div className="w-[80%] mx-auto">
                <SectionHeading heading="مشاهده خانه ها"/>
                <div className="mt-10 md:mt-16">
                    <CitySlider/>
                </div>
            </div>
        </div>
        </>
    );
}

export default CityProperties;