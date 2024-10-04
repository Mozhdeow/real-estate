import React from 'react';
import SectionHeading from "@/components/helper/SectionHeading";
import {properties} from "@/components/data/data";
import PropertyCard from "@/components/home/property/PropertyCard";

function Properties() {
    return (
        <>
            <div className="pt-16 pb-16 bg-gray-100" dir="rtl">
                <div className="w-[80%] mx-auto">
                    <SectionHeading heading="مشاهده املاک"/>
                    <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                        {properties.map((property, i) => (
                            <div key={property.id}
                                 data-aos="fade-up"
                                 data-aos-delay={`${i * 150}`}
                                 data-aos-anchor-placement="top-center"
                            >

                                <PropertyCard property={property}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Properties;