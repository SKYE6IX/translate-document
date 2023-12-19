import Card from "./card/card";
import Languages from "./languages/language";
import serviceImageOne from "./asset/service-image-1.png";
import serviceImageTwo from "./asset/service-image-2.png";
import serviceImageThree from "./asset/service-image-3.png";
import serviceImageFour from "./asset/service-image-4.png";
import "./service.scss";

const serviceList = [
  {
    title: "Перевод личных документов",
    image_src: serviceImageOne,
    lists: [
      "перевод паспорта",
      "перевод загранпаспорта",
      "Перевод диплома",
      "перевод медицинских справок",
      "Перевод трудовой книжки",
      "Услуги медицинского перевода",
      "Перевод военного билета",
    ],
  },
  {
    title: "Перевод коммерческих документов",
    image_src: serviceImageTwo,
    lists: [
      "Услуги финансового перевода",
      "Услуги технического перевода",
      "Перевод проектной документации",
      "Перевод таможенных документов",
    ],
  },
  {
    title: "Перевод юридических документов",
    image_src: serviceImageThree,
    lists: [
      "Перевод о рождении",
      "Перевод о браке",
      "Перевод о расторжении брака",
      "Перевод  о смерти и т.п.",
      "Перевод пенсионного удостоверения",
      "Перевод водительских прав иностранного государства",
    ],
  },
  {
    title: "Нотариальный",
    image_src: serviceImageFour,
    lists: ["Нотариальный перевод личных и корпоративных документов"],
  },
];

export default function Service() {
  return (
    <div className="service">
      <h2 className="service__title">
        Наши <span>услуги</span>
      </h2>
      <div className="service__lists">
        <Card serviceList={serviceList} />
      </div>
      <div className="service__languages">
        <Languages />
      </div>
    </div>
  );
}
