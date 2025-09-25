import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import user from "./../assets/helping.png";

const Main: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
      <Link
        to={"https://calendly.com/abchowdhury-m/30min"}
        target="_blank"
        className="fixed top-1/2 z-30 lg:-right-[88px] transform -translate-y-1/2 -right-10  -rotate-90"
      >
        <div
          className="lg:w-[325px] lg:h-[90px] md:w-[270px] w-[145px] md:h-[75px] h-[45px] 
                     rounded-[64px]  lg:gap-4 cursor-pointer gap-1 
                     flex flex-row-reverse justify-between items-center 
                     bg-[#F04B23] md:p-2 p-1"
        >
          <img
            src={user}
            className="lg:w-[78px] md:w-[60px] md:h-[60px] lg:h-[78px] 
                       rounded-full rotate-90 w-[40px] h-[40px]"
            alt="user"
            loading="lazy"
            decoding="async"
          />
          <h1
            className="text-white semibold lg:text-[36px] md:text-[30px] 
                       lg:leading-[43.2px] text-[14px] rotate-180 ms-2"
          >
            Need Help ?
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Main;
