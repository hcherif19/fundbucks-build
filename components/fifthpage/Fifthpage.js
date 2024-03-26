import React from "react";
import CardC from "./partials/CardC";

function Fifthpage() {
  const cardData = [
    {
      title: "خيارات متعددة وآمنة",
      text: "نظام متطور لإدارة الحسابات من خلال أنواع المحافظ الاستثمارية المتعددة التي توفرها فندبكس بحسب رغبتك واحتياجاتك",
      img: "https://i.pravatar.cc/120?img=1",
    },
    {
      title: "مستقبل أكثر اماناً",
      text: "مع خدمات فندبكس الاستثمارية أصبح تخطيطك للمستقبل أكثر وضوحاً وتحقيقك لأهدافك المالية أقرب بكثير من المتوقع",
      img: "https://i.pravatar.cc/120?img=2",
    },
    {
      title: "أرباح وعوائد مجزية",
      text: "يمكنك الاعتماد على فندبكس في تحقيق أرباحاً شهرية مجزية قد تفوق راتبك الذي تتقاضاه من وظيفتك دون جهد المتابعة للاخبار أو ترقب تقلبات الأسواق",
      img: "https://i.pravatar.cc/120?img=3",
    },
    {
      title: "أرباح وعوائد مجزية",
      text: "يمكنك الاعتماد على فندبكس في تحقيق أرباحاً شهرية مجزية قد تفوق راتبك الذي تتقاضاه من وظيفتك دون جهد المتابعة للاخبار أو ترقب تقلبات الأسواق",
      img: "https://i.pravatar.cc/120?img=4",
    },
    {
      title: "أرباح وعوائد مجزية",
      text: "يمكنك الاعتماد على فندبكس في تحقيق أرباحاً شهرية مجزية قد تفوق راتبك الذي تتقاضاه من وظيفتك دون جهد المتابعة للاخبار أو ترقب تقلبات الأسواق",
      img: "https://i.pravatar.cc/120?img=5",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full h-full pb-64 gap-14 ">
      <div className="gap-2">
        <div className="text-base text-center lg:text-lg text-[#0174B7]">
          ماذا يقول عملاؤنا
        </div>
        <div className="text-4xl font-bold text-center lg:text-5xl">
          شاركنا نجاحنا
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-3 px-4 md:flex-row md:w-full md:flex-wrap lg:flex-wrap lg:w-[66%] ">
        {cardData.map((data, index) => (
          <CardC
            key={index}
            title={data.title}
            text={data.text}
            img={data?.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Fifthpage;
