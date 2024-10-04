import React from 'react';
import SectionHeading from "@/components/helper/SectionHeading";
import {apartmentTypeData} from "@/components/data/data";
import ApartmentCard from "@/components/home/apartment/ApartmentCard";

function Apartment() {
    return (
        <>
            <div className="pt-16 pb-16" dir="rtl">
                <div className="w-[80%] mx-auto">
                    <SectionHeading heading="لورم ایپسوم متن"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                mt-10 md:mt-20 gap-8 items-center">
                        {apartmentTypeData.map((type, i) => (
                            <div key={type.id}
                                 data-aos="zoom-in"
                                 data-aos-delay={`${i * 150}`}
                                 data-aos-anchor-placement="top-center">
                                <ApartmentCard type={type}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Apartment;