import React from 'react';

interface props{
    heading:string
}

function SectionHeading({heading}:props) {
    return (
        <>
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">{heading}</h1>
            <p className="text-sm text-gray-700">لورم ایپسوم متن ساختگی با تولید سادگی </p>
        </div>
        </>
    );
}

export default SectionHeading;