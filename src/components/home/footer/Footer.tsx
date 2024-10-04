import React from 'react';
import {FaHouse} from "react-icons/fa6";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="pt-20 pb-12 bg-black" dir="rtl">
                <div
                    className="w-[80%] mx-auto items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8
                    border-b-[1.5px] border-white border-opacity-20">
                    <div className="">
                        {/*logo*/}
                        <div className="flex items-center gap-2">
                            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center
                                 justify-center flex-col">
                                <FaHouse/>
                            </div>
                            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl font-titr">پکاملک</h1>
                        </div>
                        <p className="text-gray-300 mt-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            و با استفاده از طراحان گرافیک است</p>
                        <p className=" text-gray-300 mt-4 font-semibold">google@gmail.com</p>
                        <p className="text-gray-300 mt-2 font-semibold">01234567890</p>
                        <div className="flex items-center gap-2 mt-6">
                            <FaFacebookF className="w-5 h-5 text-blue-600"/>
                            <FaTwitter className="w-5 h-5 text-sky-500"/>
                            <FaYoutube className="w-5 h-5 text-red-700"/>
                            <FaInstagram className="w-5 h-5 text-pink-600"/>
                        </div>
                    </div>
                    <div className="md:mx-auto">
                        <h1 className="footer__heading">لورم ایپسوم</h1>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link">لورم </p>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link"> ایپسوم</p>
                    </div>
                    <div className="md:mx-auto">
                        <h1 className="footer__heading">لورم ایپسوم</h1>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link">لورم </p>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link"> ایپسوم</p>
                    </div>
                    <div className="md:mx-auto">
                        <h1 className="footer__heading">لورم ایپسوم</h1>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link">لورم </p>
                        <p className="footer__link">لورم ایپسوم</p>
                        <p className="footer__link"> ایپسوم</p>
                    </div>
                </div>
                <p className="text-center mt-4 text-base text-white opacity-70">کپی رایت 2024</p>
            </div>
        </>
    );
}

export default Footer;