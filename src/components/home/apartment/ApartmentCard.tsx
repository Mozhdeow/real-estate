import React from 'react';
import Image from "next/image";

interface props {
    type:{
        id: number;
        icon: string;
        type: string;
        number: number;
    }

}

function ApartmentCard({type}: props) {
    return (
        <>
            <div className="rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300">
                <Image src={type.icon} alt={type.type} width={50} height={50}/>
                <div className="mt-12">
                    <h1 className="text-lg font-bold">{type.type}</h1>
                    <p className="text-sm mt-2 text-gray-700">{type.number} عدد</p>
                </div>

            </div>

        </>
    );
}

export default ApartmentCard;