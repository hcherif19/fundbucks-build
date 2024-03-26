import React from "react";

const TextWithImage = ({ title, text, image, swap }) => {
  return (
    <div
      className={`flex flex-col gap-10 lg:items-center  lg:flex-row ${
        swap ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-6">
        <p className="text-3xl font-bold ">{title}</p>
        <p className="text-[#737987]  font-light text-base leading-9">{text}</p>
      </div>
      <div className="overflow-hidden rounded-md">
        <img src={image} alt={title} className="w-full h-auto lg:w-[1000px] " />
      </div>
    </div>
  );
};
export default TextWithImage;
