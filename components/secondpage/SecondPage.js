import React from "react";
import CardComp from "./partials/CardComp";

function SecondPage() {
  const cardData = [
    {
      title: "الشرعية",
      text: "حريصون كل الحرص على توفير أدوات استثمارية متوافقة مع الضوابط الشرعية المقررة، والتي تتضمن المعايير المعتبرة التي تقرها أحكام الشريعة الإسلامية، لذلك فإننا نقوم بإخضاع بيانات جميع الشركات والأصول المستهدفة بشكل دوري ومنتظم على تلك المعايير للتأكد من توافقها مع ضوابط الشريعة الإسلامية.",
      img: "assets/54.png",
    },
    {
      title: "الشفافية",
      text: "بفضل نظامنا المتطور والفعّال، ستحظى بالوقت الكافي للاستمتاع بحياتك اليومية، بينما يدار حسابك بشكل احترافي وآمن ومتوازن وبشكل احترافي، كما يمكنك الاطلاع على أداء استثمارك والأصول المملوكة بشكل مباشر بالإضافة إلى مراجعة التقارير الدورية لاستثمارك وتاريخ الأداء الكلي والجزئي لمحفظتك.",
      img: "assets/1041.png",
    },
    {
      title: "الأمان",
      text: "يمثل الأمان الأولوية القصوى عندما يتعلق الأمر بالاستثمار، نحن ندرك ذلك تماماً ونأخذه على محمل الجد، نعمل في فندبكس لضمان بيئة استثمار آمنة وموثوقة لعملائنا، فيما يتعلق باستثماراتهم أو حتى بياناتهم الخاصة، مع تواجد الدعم المباشر من خدمة العملاء لتقديم الدعم والمساعدة عندما يستلزم الأمر.",
      img: "assets/57.png",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full h-full pt-40 pb-64 lg:pt-0 gap-14">
      <div className="text-4xl font-bold text-center lg:text-5xl">مبادئنا</div>
      <div className="flex flex-col gap-5 md:gap-3 px-4 md:flex-row sm:w-[20%] md:w-[20%] md:flex-wrap lg:flex-nowrap lg:w-[66%]">
        {cardData.map((data, index) => (
          <CardComp
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

export default SecondPage;
