"use client";
import React from "react";
import Image from "next/image";

const Navbar = ({
  scrollToSecondPage,
  scrollToThirdPage,
  scrollToFourthPage,
  SetShowMenu,
}) => {
  return (
    <header className=" w-full  z-[999] fixed  h-[90px] px-4 border-b  shadow-sm top-0 flex justify-center backdrop-blur-md bg-white/70 ">
      <nav className="flex items-center justify-between w-full h-full lg:w-[66%] ">
        {/* left side */}
        <div className="hidden lg:block">
          <button className="flex items-center gap-2 px-3 py-2 text-sm   text-white hover:bg-[#1F2937] bg-[#111827] rounded-3xl">
            <img
              src="assets/flechIconnav.svg"
              alt="flechicon"
              className="w-5 rotate-180"
            />
            <p>تواصل معنا</p>
          </button>
        </div>
        {/* middle */}
        <div className="lg:flex lg:items-center lg:gap-8 lg:pl-28 text-[#0174B7] font-bold text-lg hidden">
          <p onClick={scrollToFourthPage} className="hover:cursor-pointer">
            محافظنا
          </p>
          <p onClick={scrollToThirdPage} className="hover:cursor-pointer">
            خدماتنا
          </p>
          <p onClick={scrollToSecondPage} className="hover:cursor-pointer">
            {" "}
            مبادئنا
          </p>
        </div>
        {/* right side */}
        <div className="flex items-center justify-between w-full lg:w-fit">
          <div className="px-3 lg:hidden">
            <img
              src="assets/menuIcon.svg"
              alt="menu"
              className="w-4 "
              onClick={SetShowMenu}
            />
          </div>
          <div className="flex gap-2 ">
            <p className="text-5xl font-bold">فندبكس</p>
            <img src="assets/logoF.jpg" alt="logof" className="w-12 h-10 " />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
