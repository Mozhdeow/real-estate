import React from 'react';
import SectionHeading from "@/components/helper/SectionHeading";
import BlogCard from "@/components/home/blogs/BlogCard";
import {blogs} from "@/components/data/data";

function Blog() {
    return (
        <>
            <div className="py-16 bg-[#fef7f6]" dir="rtl">
                <div className="w-[80%] mx-auto">
                    <SectionHeading heading=" بلاگ"/>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
                        {blogs.map((blog,i) => (
                            <div key={blog.id}
                                 data-aos="zoom-out"
                                 data-aos-delay={`${i * 150}`}
                                 data-aos-anchor-placement="top-center"
                            >
                                <BlogCard blog={blog}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;