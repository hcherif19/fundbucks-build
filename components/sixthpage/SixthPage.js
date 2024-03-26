import React, { useState } from "react";

const BlurableImage = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center w-full pb-32">
      <div
        className={`w-[90%] lg:w-[55%] pt-32 ${
          isBlurred ? "blur-sm" : ""
        } lg:h-[450px] bg-cover bg-center    h-[300px] rounded-3xl transition-all duration-300`}
        style={{
          backgroundImage: "url('assets/pic4.webp')",
          position: "relative",
        }}
        onMouseEnter={() => setIsBlurred(true)}
        onMouseLeave={() => setIsBlurred(false)}
      >
        {isBlurred && (
          <div className="absolute inset-0 bg-[#7A317A] bg-opacity-50"></div>
        )}
      </div>
      {isBlurred && (
        <div className="absolute inset-0 flex justify-center w-full pointer-events-none">
          <div className="flex flex-col gap-16 py-6 text-2xl font-bold text-white lg:text-4xl lg:gap-16 animate-slideRight">
            <div className="text-center ">
              <p>FundBucks فندبكس</p>
            </div>
            <div className="flex flex-col items-center gap-2 lg:gap-16">
              <p>ننشئ إستراتيجية استثمار</p>
              <p>متوازنة – شرعية – آمنة</p>
              <p>تتناسب مع تطلعاتك</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlurableImage;
