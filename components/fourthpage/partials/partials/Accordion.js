import React, { useState } from "react";

const Accordion = ({ nawaad, souhoubet }) => {
  const items = [
    {
      title: "نوع العائد",
      content: nawaad,
      img: "assets/arrowback.svg",
    },
    {
      title: "السحوبات",
      content: souhoubet,
      img: "assets/arrowuponsquare.svg",
    },
  ];

  // Initialize all accordion items to be open by default
  const initialOpenIndexes = Array.from({ length: items.length }, (_, i) => i);
  const [openIndexes, setOpenIndexes] = useState(initialOpenIndexes);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="flex items-center justify-between p-1 bg-blue-50 hover:bg-[#E0F2FE] cursor-pointer rounded-full"
            onClick={() => toggleAccordion(index)}
          >
            <svg
              className="w-6 h-6 text-gray-700 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0174B7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  openIndexes.includes(index)
                    ? "M20 12H4"
                    : "M12 6v6m0 0v6m0-6h6m-6 0H6"
                }
              />
            </svg>
            <span className="text-sm text-[#0174B7] flex gap-2 items-center">
              {item.title}
              <img src={item.img} className="w-5" alt="itemimage" />
            </span>
          </div>
          {openIndexes.includes(index) && (
            <div className="p-4 text-[#737987] text-right font-light text-base bg-white ">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
