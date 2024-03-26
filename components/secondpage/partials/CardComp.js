import React from "react";

function CardComp({ title, text, img }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2  px-4 py-6 bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:w-[49%] lg:w-1/3 ">
      {img && <img src={img} alt="icon" className="pb-3 w-20" />}
      <p className="text-[#111827] font-bold ">{title}</p>
      <p className="text-[#737987] text-right rtl text-justify font-light text-sm" dir="rtl">{text}</p>
    </div>
  );
}

export default CardComp;
