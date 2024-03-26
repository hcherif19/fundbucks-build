import React from "react";
import Accordion from "./partials/Accordion";

function Mihfadha({ data }) {
  const {
    title,
    content,
    text,
    nawaad,
    souhoubet,
    moutawastaaed,
    inhiraf,
    nisbatkhatar,
  } = data;
  return (
    <div className="lg:w-[65%] rounded-xl border">
      <div className="flex flex-col p-6 border-b ">
        <p className="text-base font-bold text-right">{title}</p>
        <p className="text-[#0174B4] text-right font-light text-base">
          {content}
        </p>
      </div>
      <div className="flex flex-row items-end p-6 lg:flex-col">
        <div className="flex flex-col-reverse w-full gap-4 p-6 border lg:gap-0 lg:flex-row rounded-xl lg:justify-between">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="lg:w-2/3 ">
              <Accordion nawaad={nawaad} souhoubet={souhoubet} />
            </div>
            <div className="flex items-center justify-end gap-2 lg:w-2/3">
              <div className="text-base text-right">{moutawastaaed}%</div>
              <div className="text-[#22C55E] text-right text-sm">
                متوسط العائد
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:w-2/3">
              <div className="flex flex-row-reverse h-2 bg-gray-200 rounded-full ">
                <div
                  className={`bg-[#0EA5E9] h-2 rounded-full `}
                  style={{ width: `${inhiraf}%` }}
                >
                  <div className="-translate-y-5 text-[#737987] text-sm">
                    {inhiraf}%
                  </div>
                </div>
              </div>
              <div className="text-[#0EA5E9] text-right text-xs">
                الإنحراف المعياري{" "}
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:w-2/3">
              <div className="flex gap-2">
                <div className="flex w-1/4 h-2 bg-gray-200 rounded-full "></div>
                <div className="flex w-1/4 h-2 bg-[#3B82F6] rounded-full"></div>
                <div className="flex w-1/4 bg-[#3B82F6] rounded-full"></div>
                <div className="flex w-1/4 bg-[#3B82F6] rounded-full"></div>
              </div>
              <div className="text-[#3B82F6] text-right text-xs flex  justify-between">
                <p>3/4</p>
                <p>نسبة المخاطر</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex-col items-center hidden lg:flex">
              <div className="w-[1px] h-20 bg-gray-200"></div>
              <div className="mt-2 text-center">بيانات المحفظة</div>
              <div className="w-[1px] h-20 mt-2 bg-gray-200"></div>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <div className="w-1/4 bg-gray-200 border-t "></div>
              <div className="px-2 text-center">بيانات المحفظة</div>
              <div className="w-1/4 bg-gray-200 border-t "></div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:flex lg:justify-end">
            <div className="text-right lg:w-2/3 text-justify"dir="rtl" >{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mihfadha;
