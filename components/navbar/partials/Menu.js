import React from "react";

function Menu({
  scrollToSecondPage,
  scrollToThirdPage,
  scrollToFourthPage,
  SetShowMenu,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between p-4 h-[90px]  border-b ">
        <div
          onClick={() => {
            SetShowMenu(false);
          }}
          className="font-sans text-3xl"
        >
          x
        </div>
        <div className="flex gap-2 ">
          <p className="text-5xl font-bold">فندبكس</p>
          <img src="assets/logoF.jpg" alt="logof" className="w-12 h-10 " />
        </div>
      </div>
      <div>
        <div className="  gap-2 flex flex-col w-full text-right px-6 text-[#0174B7] font-bold  text-lg ">
          <p
            onClick={() => {
              SetShowMenu(false);
              scrollToFourthPage;
            }}
          >
            محافظنا
          </p>
          <p
            onClick={() => {
              SetShowMenu(false);
              scrollToThirdPage;
            }}
          >
            خدماتنا
          </p>
          <p
            onClick={() => {
              SetShowMenu(false);
              scrollToSecondPage;
            }}
          >
            مبادئنا
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
