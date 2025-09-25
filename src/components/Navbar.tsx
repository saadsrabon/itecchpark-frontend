/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";
// import call_icon from "../../assets/Call Icon.png";

import {  useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const toggoleNav = () => {
    setOpen(!open);
  };
  const router = useLocation();
  const CustomLink = ({ href, className, title }:any) => {
    const isActive = router.pathname === href;
    return (
      <Link
        className={` flex semibold  text-[20px] leading-[32px] font-[600]   my-auto justify-center items-center  h-[33px] max-w-48  px-4 py-2  ${className} ${
          isActive
            ? "  rounded-[30px]      bg-[#000000]  flex justify-center items-center   text-white  "
            : "text-black regular"
        } `}
        to={href}
      >
        {title}
      </Link>
    );
  };

  

  return (
    <div className={`relative  lg:px-0 px-4    md:py-1 lg:py-0`}>
      <nav className="flex justify-between max-w-[1240px] md:h-[120px] h-[100px] mx-auto items-center">
        <a href="/" className="logo ">
          <img src={logo} alt="logo" loading="lazy" decoding="async" />
        </a>
        <div
          id="navbar"
          className="lg:felx  justify-center w-[540px] border rounded-[42px] ms-[65px] hidden bg-white bg-opacity-60  backdrop-blur-[36px] navShadow  items-center p-[14px] lg:flex  "
        >
          <CustomLink href={"/"} className={" font-bold"} title={"Home"} />

          <CustomLink
            href={"/services"}
            className={"font-bold"}
            title={"Services"}
          />
          <CustomLink
            href={"/reviews"}
            className={"font-bold "}
            title={"Reviews"}
          />
          <CustomLink href={"/about"} className={"font-bold"} title={"About"} />
          <CustomLink
            href={"/contact"}
            className={"font-bold"}
            title={"Contact"}
          />
        </div>
        <div className="justify-center items-center border-[#000030]    lg:flex hidden w-[181px] h-[55px] border py-4 px-8 rounded-[40px] text-[20px] font-[400] regular cursor-pointer">
          Call a Book
        </div>
        <div className="lg:hidden text-[#6e6a6a] ">
          {open ? (
            <svg
              onClick={toggoleNav}
              data-slot="icon"
              fill="#f90909"
              className={`h-12 w-12 me-3 transform transition origin-center ease-out duration-150 ${
                open && "rotate-180"
              }`}
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          ) : (
            <svg
              onClick={toggoleNav}
              className={`rotate-45 h-9 w-9 transform origin-center transition ease-out ${
                open && "rotate-180"
              }`}
              data-slot="icon"
              fill="#f90909"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          )}
        </div>
      </nav>
      {!open && (
        <div className="absolute z-50 top-0 left-0  bg-[#F04B23] text-white w-full p-5 rounded-xl lg:hidden">
          <svg
            onClick={toggoleNav}
            className={`rotate-45 flex justify-end h-9 float-end w-9 transform origin-center transition duration-150 ease-out ${
              open && "rotate-180"
            }`}
            data-slot="icon"
            fill="#f90909"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            ></path>
          </svg>
          <div className="  flex flex-col justify-center items-center space-y-5  p-28">
            <div onClick={toggoleNav}>
              <CustomLink
                href={"/"}
                className={" font-bold w-[130px]"}
                title={"Home"}
              />
            </div>
            <div onClick={toggoleNav}>
              <CustomLink
                href={"/services"}
                className={"font-bold w-[130px] text-[16px]"}
                title={"Services"}
              />{" "}
            </div>{" "}
            <div onClick={toggoleNav}>
              <CustomLink
                href={"/reviews"}
                className={"font-bold w-[130px] text-[16px]"}
                title={"Reviews"}
              />{" "}
            </div>{" "}
            <div onClick={toggoleNav}>
              <CustomLink
                href={"/about"}
                className={"font-bold w-40"}
                title={"About"}
              />{" "}
            </div>{" "}
            <div onClick={toggoleNav}>
              <CustomLink
                href={"/contact"}
                className={"font-bold w-[130px] text-[16px]"}
                title={"Contact"}
              
              />{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
