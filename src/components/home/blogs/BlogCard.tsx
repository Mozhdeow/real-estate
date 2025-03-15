import React from 'react';
import Image from "next/image";
import {BiCalendar, BiMessage} from "react-icons/bi";
import {BsArrowLeft} from "react-icons/bs";

interface props {
    blog: {
        id: number
        date: string
        comment: string
        title: string
        shortDescription: string
        image: string
    }
}

function BlogCard({blog}: props) {
    return (
        <div className="bg-white rounded-md overflow-hidden" dir="rtl">
            <div>
                <Image src={blog.image} alt={blog.title} width={300} height={300} className="w-full"/>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BiCalendar className="text-red-500"/>
                            <span className="text-sm text-gray-700">{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiMessage className="text-red-500"/>
                            <span className="text-sm text-gray-700">{blog.comment}</span>
                        </div>
                    </div>
                    <h1 className="mt-6 font-bold hover:text-red-600 mb-2 text-base">{blog.title}</h1>
                    <p className="text-gray-500 text-sm">{blog.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-2 hover:text-red-500 cursor-pointer">
                        <span className="font-bold text-sm">ادامه مطلب</span>
                        <BsArrowLeft/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;