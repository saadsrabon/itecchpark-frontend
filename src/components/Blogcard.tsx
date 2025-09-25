import React from "react";
import arrow from "../assets/arrow1.png"
interface BlogCardProps {
  blog: {
    image: string;
    title: string;
    content: string;
  };
  onClick: () => void;
}

const Blogcard: React.FC<BlogCardProps> = ({ blog, onClick }) => {


  return (
    <div
      className={`p-[18px] md:p-[24px] rounded-[40px] flex flex-col  gap-5 lg:justify-start lg:items-center bg-[#F04B23] h-auto md:h-[731px] md:w-[585px]`}
    >
      {/* Blog Image */}
      <img
        src={blog.image}
        className="w-full h-auto md:h-[320px] md:w-[537px] ] rounded-lg object-cover"
        alt={blog.title}
      />

      {/* Blog Title and Content */}
      <div className="flex justify-start items-start flex-col  md:mt-[32px] mt-[24px]">
        <h1 className="text-[26px] leading-[30px] md:text-[36px] text-white  md:leading-[46.2px] semibold mb-[4px]">
          {blog.title}
        </h1>
        {/* Blog Content with Read More/Read Less */}
        <p className="text-[14px] leading-[20.2px] regular md:text-[20px] md:leading-[30px] mt-3 lg:mt-4 text-white">
          {blog.content.slice(0, 150)}...
        </p>

        {/* Toggle Button for Read More/Read Less */}
        <button
          onClick={onClick}
          className="py-3 px-6 w-[150px] md:w-[230px] mt-[28px] md:mt-[48px]  bg-[#000030] rounded-[40px] flex justify-center items-center opensans font-[600] md:text-[20px] md:leading-[27.24px] text-white shadow text-[12px] gap-2 "
        >
         Read More
          <img className="md:w-[36px]  md:h-[36px] w-6 h-6" src={arrow} alt="arrow" loading="lazy" decoding="async" />
        </button>
      </div>
    </div>
  );
};

export default Blogcard;
