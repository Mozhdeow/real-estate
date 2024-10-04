import React from 'react';
import Image from "next/image";
import {MdElectricBolt} from "react-icons/md";
import {FaBath, FaBed, FaSquare} from "react-icons/fa";
import {BiLinkExternal} from "react-icons/bi";
import {BsHeart, BsPlusSquare} from "react-icons/bs";

interface props {
    property: {
        id: number;
        propertyName: string;
        location: string;
        bedrooms: number;
        bathrooms: number;
        size: number;
        price: number;
        imageUrl: string;
    }
}

function PropertyCard({property}: props) {
    return (
        <>
            <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg">
                <div className="relative">
                    <Image src={property.imageUrl} alt={property.propertyName} width={300} height={300}
                           className="w-full object-cover group-hover:scale-110 transition-all duration-300"/>
                    <h1 className="px-6 absolute bottom-4 text-sm bg-black text-white rounded-lg">
                        <span className="text-base font-bold">{property.price} تومان</span>
                    </h1>
                    <div className="flex items-center space-x-1 px-6 absolute top-4 right-4 py-2 text-sm bg-rose-600 w-fit
                    text-white rounded-md font-bold">
                        <MdElectricBolt/>
                        <span>ویژگی ها</span>
                    </div>
                </div>
                <div className="p-5">
                    <h1 className="mt-4 group-hover:border-b-gray-900 text-gray-900 font-bold text-lg">{property.propertyName}</h1>
                    <p className="text-sm text-gray-500 mt-2">آدرس: {property.location}</p>
                    <div className="flex items-center mt-6 justify-between w-full lg:w-[80%]">
                        <div className="flex items-center gap-2 ">
                            <FaBed className="text-red-500"/>
                            <p className="text-xs text-gray-600">{property.bedrooms} اتاق</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBath className="text-red-500"/>
                            <p className="text-xs text-gray-600">{property.bathrooms} حمام</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaSquare className="text-red-500"/>
                            <p className="text-xs text-gray-600">{property.size} متر</p>
                        </div>
                    </div>
                    <div className="w-full h-[1.2px] mb-4 bg-gray-500 opacity-15 my-4"></div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-xs text-gray-600">اجاره</h1>
                        <div className="flex items-center gap-3 text-gray-500">
                            <BiLinkExternal/>
                            <BsPlusSquare/>
                            <BsHeart/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default PropertyCard;