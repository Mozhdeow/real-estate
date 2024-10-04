import React from 'react';
import SectionHeading from "@/components/helper/SectionHeading";
import {buildings} from "@/components/data/data";
import BuildingFeatureCard from "@/components/home/BuildingFeature/BuildingFeatureCard";

function BuildingFeature() {
    return (
        <>
            <div className="py-16 bg-gray-100" dir="rtl">
                <div className="w-[80%] mx-auto">
                    <SectionHeading heading="ویژگی های املاک"/>
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {buildings.map((building,i) => (
                            <div key={building.id}
                                 data-aos="fade-left"
                                 data-aos-delay={`${i * 150}`}
                                 data-aos-anchor-placement="top-center"
                            >
                                <BuildingFeatureCard building={building}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuildingFeature;