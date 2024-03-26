import React from "react";

function CardC({ title, text, img }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2  px-4 py-6 bg-[#F9F9FA] rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:w-[31%] lg:w-[32%] w-full  ">
      <p className="text-[#737987] text-center  ">{text}</p>
      <div className="flex flex-row items-center w-full gap-2 ">
        {img && <img src={img} alt="icon" className="w-8 rounded-full" />}
        <p className="text-[#111827] font-bold ">{`"${title}"`}</p>
      </div>
    </div>
  );
}

export default CardC;
