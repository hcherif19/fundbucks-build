import React from "react";

function FirstPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="block mb-4 md:hidden ">
        <img src="assets/chairman.png" className="w-full" alt="chairman" />
      </div>
      <div className="flex flex-col items-center justify-center h-[60vh]  gap-8 square-bg  ">
        <div className="px-5 font-bold rounded-full bg-border-pink">
          مستثمركَ
        </div>
        <div>
          <p className="font-bold text-center lg:text-7xl text-5xl text-[#111827]">
            شرعية | متوازنة | آمنة
          </p>
        </div>
        <div>
          <p className="font-light  text-[#4B5563] text-center">
            منصة الاستثمار المُثلى لتحقيق أهدافك الاستثمارية
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <button className="p-2 bg-[#3B82F6] rounded-full justify-center px-4 cursor-pointer flex gap-2 items-center text-white">
            <p>تحميل من أبل ستور</p>
            <img src="assets/appleicon.svg" alt="googleplay" className="w-5" />
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 font-sans text-black bg-gray-100 rounded-full cursor-pointer ">
            <p>تحميل من بلاي ستور</p>
            <img src="assets/googleplay.svg" alt="googleplay" className="w-5" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 lg:gap-48 pt-28">
        <img src="assets/amazone.svg" alt="amazone" className="w-10" />
        <img src="assets/caterpiller.svg" alt="caterpiller" className="w-10" />
        <img src="assets/tesla.svg" alt="tesla" className="w-10" />
        <img src="assets/nike.svg" alt="nike" className="w-10" />
        <img src="assets/cisco.svg" alt="cisco" className="w-10" />
      </div>
    </div>
  );
}

export default FirstPage;
