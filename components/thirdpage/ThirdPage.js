import React from "react";
import TextWithImage from "./partials/TextWithImage";

function ThirdPage() {
  const cardData = [
    {
      title: "يمكنك الاعتماد علينا",
      text: "لن تحتاج للمتابعة اللصيقة، فبمجرد تفعيل حسابك مع فندبكس، سيتم ربطه بنظام فندبكس المتطور بحسب محفظتك المختارة، يقوم فريق الإدارة باللازم، متخصصون في التحليل والاقتصاد والإدارة والمخاطر الاستثمارية، يولون استثمارك أولوية قصوى، ويعملون لتحقيق النتائج المثلى، أنت تستحق أن ترتاح، كل ماتحتاجه هو المرور على حسابك حينما يسمح وقتك الثمين للاطلاع على أدق التفاصيل التي توفرها المنصة من تطور لأداء استثمارك وتفاصيله.",
      image: "assets/pic1.webp", // Replace 'image-url-1.jpg' with the actual URL of the image
    },
    {
      title: "تنوع واتزان",
      text: "نقدم لك مجموعة متنوعة من الخيارات التي تساعدك على تحديد نوع المحفظة المناسبة لأهدافك الاستثمارية، بحسب العوائد المتوقعة ومدة الاستثمار ونسبة المخاطر المحتملة، فريق الإدارة المتخصص يعمل على تحديد الأصول المناسبة لكل محفظة بما يتوافق مع نوعها ويحدد نسب الاستثمار بكل دقة واحترافية لتحقيق التوازن المنشود مما يضمن تحقيق أعلى قدر من العوائد الربحية بأقل مخاطر استثمارية ممكنة.",
      image: "assets/pic2.webp", // Replace 'image-url-2.jpg' with the actual URL of the image
    },
    {
      title: "إدارة فعّالة",
      text: "فريقنا المتخصص كل في مجاله التحليل، الاقتصاد، الإدارة والمخاطر الاستثمارية، يعتبرون كل محفظة مشروعا مستقلاً، ويولونها الإهتمام الامثل لتحقيق أهدافها خلال الزمن المحدد، من خلال خيارات واسعة من الأصول المتنوعة مثل الأسهم والصكوك والصناديق والعملة والسلع والطاقة، وخلق التوازن الآمن المنشود بحسب ارتباط حركة تلك الاصول ببعضها وتأثيرها طردياً كان أو سلبياً.",
      image: "assets/pic3.webp", // Replace 'image-url-3.jpg' with the actual URL of the image
    },
  ];
  return (
    <div className="flex items-center justify-center w-full pt-32 ">
      <div className="flex flex-col w-full p-3 text-right gap-36 lg:gap-9 lg:w-[66%]">
        {" "}
        {cardData.map((data, index) => (
          <TextWithImage
            key={index}
            title={data.title}
            text={data.text}
            image={data.image}
            swap={index === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default ThirdPage;
