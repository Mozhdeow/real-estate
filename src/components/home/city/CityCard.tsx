import React from 'react';
import Image from "next/image";

interface props {
    city: {
        id: number;
        image: string;
        cityName: string;
        numberOfProperties: number;
    }
}

function CityCard({city}: props) {
    return (
        <div className="relative rounded-lg overflow-hidden m-2" dir="rtl">
            <Image src={city.image} alt={city.cityName} width={700} height={700}
                   className="rounded-lg w-full h-[450px] object-cover"/>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute p-4 top-4 text-right">
                <h1 className="text-lg font-semibold text-white">{city.cityName}</h1>
                <p className="text-gray-200"> تعداد املاک {city.numberOfProperties}</p>
            </div>
        </div>
    );
}

export default CityCard;