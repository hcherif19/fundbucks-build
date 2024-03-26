import React from "react";

function Footer() {
  return (
    <footer className="bg-[#F5F5F5] lg:px-16 lg:py-6 " dir="rtl">
      <div className="px-[16px] py-[6px] w-full    lg:justify-center lg:w-full lg:px-52 ">
        <div className="flex flex-col w-full gap-6 py-12 lg:flex-row lg:justify-center">
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:w-1/3 lg:items-start">
          <div className="flex gap-2 ">
            <img src="assets/logoF.jpg" alt="logof" className="w-12 h-10 " />
            <p className="text-4xl font-bold">فندبكس</p>
            
          </div>
            <div>
              <p className="text-[#00416b] lg:text-start lg:max-w-[370px]  ">
                فريق من الخبراء المتخصصين ذوي خبرة طويلة في مجال الاستثمار
                لمساعدتك في اختيار المحفظة الاستثمارية الأنسب لك ولأهدافك
                المالية من خلال العديد من المحافظ الاستثمارية المختلفة.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 text-[#00416b]  ">
              <div className="flex items-center gap-2">
                <img src="emailIcon.svg" alt="emailIcon" />{" "}
                <p>info@FundBucks.com</p>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="px-1 text-center ">
                  <img src="whatsappIcon.svg" className="w-6" alt="whatsicon" />
                </div>
                <p>966114311112</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="mapIcon.svg" className="w-8" alt="mapicon" />
                <p>FundBucks</p>
              </div>
            </div>
          </div>

          <div className="flex text-[#00416b] lg:w-1/3 ">
            <div className="flex flex-col w-1/2 gap-6 ">
              <p className="text-lg font-bold text-center lg:text-start">
                التطبيق
              </p>
              <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center gap-3">
                  <img
                    src="flechIcon.svg"
                    alt="flechicon"
                    className="w-4 rotate-0"
                  />
                  <p>متجر أبل</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="flechIcon.svg"
                    alt="flechicon"
                    className="w-4 rotate-0"
                  />
                  <p>متجر قوقل</p>
                </div>
                {/* <div className="flex items-center gap-3">
                  <img
                    src="flechIcon.svg"
                    alt="flechicon"
                    className="w-4 rotate-0"
                  />
                  <p>news</p>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-6 ">
              <p className="text-lg font-bold text-center lg:text-start">
                الأقسام
              </p>
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-3">
                  <img
                    src="flechIcon.svg"
                    alt="flechicon"
                    className="w-4 rotate-0"
                  />
                  <p>مبادئنا</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="flechIcon.svg"
                    alt="flechicon"
                    className="w-4 rotate-0"
                  />
                  <p>محافظنا</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="flechIcon.svg"
                    alt="flechicon"
                    className="w-4 rotate-0"
                  />
                  <p>سياسة الخصوصية</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/3 ">
            <div className=" bg-[#00416B] flex gap-2 items-center justify-center lg:items-start lg:px-5 lg:w-[370px] rounded-lg flex-col py-4 text-white font-medium text-lg">
              <p className="font-bold">اشترك فى النشرة الاخبارية</p>

              <div className="w-[90%] lg:w-full relative">
                <input className="w-full h-10 pl-4 pr-10 text-black rounded-lg"></input>
                <img
                  src="emailinputicon.svg"
                  alt="inputemail"
                  className="absolute inset-y-0 right-0 w-5 my-auto mr-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-6 lg:items-start">
              <p className="text-lg font-bold  text-[#00416b]">تواصل معنا</p>
              <div className="flex gap-3">
                <img src="twittericon.svg" alt="icon" />
                <img src="linkedinicon.svg" alt="icon" />
                <img src="instaicon.svg" alt="icon" />
                <img src="emailIcon.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-2 pt-6 mt-3 border-t-2 lg:flex-row lg:justify-between">
          <p>all copyrights reserved @ FundBucks 2024</p>
          {/* <img src="assets/pay.png" alt="pay" className="w-60" /> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
