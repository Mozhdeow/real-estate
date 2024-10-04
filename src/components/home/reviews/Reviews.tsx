import React from 'react';
import SectionHeading from "@/components/helper/SectionHeading";
import ReviewSlider from "@/components/home/reviews/ReviewSlider";



function Reviews() {
    return (
        <div className="py-16 bg-[#fef7f6]" dir="rtl">
            <div className="w-[80%] mx-auto">
                <SectionHeading heading="نظرات کاربران"/>
                <div className="mt-14">
                    <ReviewSlider/>
                </div>
            </div>
        </div>
    );
}

export default Reviews;