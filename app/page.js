"use client";
import Fifthpage from "@/components/fifthpage/Fifthpage";
import FirstPage from "@/components/firstpage/FirstPage";
import Footer from "@/components/footer/Footer";
import FourthPage from "@/components/fourthpage/FourthPage";
import Navbar from "@/components/navbar/NavBar";
import Menu from "@/components/navbar/partials/Menu";
import SecondPage from "@/components/secondpage/SecondPage";
import SixthPage from "@/components/sixthpage/SixthPage";
import ThirdPage from "@/components/thirdpage/ThirdPage";
import React, { useRef, useState } from "react";

function Home() {
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);
  const fourthPageRef = useRef(null);
  const [showMenu, SetShowMenu] = useState(false);
  const scrollToSecondPage = () => {
    secondPageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const scrollToFourthPage = () => {
    fourthPageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToThirdPage = () => {
    thirdPageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="h-[100vh]  ">
      {showMenu ? (
        <div className={` h-full w-full `}>
          <Menu
            scrollToSecondPage={scrollToSecondPage}
            scrollToThirdPage={scrollToThirdPage}
            scrollToFourthPage={scrollToFourthPage}
            SetShowMenu={SetShowMenu}
          />
        </div>
      ) : (
        <>
          <div>
            <Navbar
              scrollToSecondPage={scrollToSecondPage}
              scrollToThirdPage={scrollToThirdPage}
              scrollToFourthPage={scrollToFourthPage}
              SetShowMenu={SetShowMenu}
            />
          </div>
          <div className="mt-[90px]">
            <FirstPage />
          </div>
          <div ref={secondPageRef}>
            <SecondPage />
          </div>
          <div ref={thirdPageRef}>
            <ThirdPage />
          </div>
          <div ref={fourthPageRef}>
            <FourthPage />
          </div>
          <div>
            <SixthPage />
          </div>
          <div>
            <Fifthpage />
          </div>

          <div>
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
