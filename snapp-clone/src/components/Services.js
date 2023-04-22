import React from "react";

import classes from "../styles/Services.module.css";

const servicesData = [
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/cab.svg",
    title: "تاکسی اینترنتی",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/bike.svg",
    title: "پیک موتوری",
    description: "حمل و نقل با اسنپ",
  },
  {
    imgsrc: "https://jek.snapp.ir/Redesign-Icons/Pickup-new.png",
    title: "درخواست وانت",
    description: "حمل و نقل با اسنپ",
  },
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/food.svg",
    title: "سفارش غذا آنلاین",
    description: "سفارش غذا و نان و شیرینی با اسنپ",
  },
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/market.svg",
    title: "سوپر مارکت آنلاین",
    description: "تهیه اقلام روزانه با اسنپ",
  },
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/market.svg",
    title: "اسنپ اکسپرس",
    description: "تحویل کمتر از سی دقیقه",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png",
    title: "بلیط پرواز داخلی",
    description: "گردشگری با اسنپ",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png",
    title: "بلیط پرواز خارجی",
    description: "گردشگری با اسنپ",
  },
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/doctor.svg",
    title: "دکتر",
    description: "درمان با اسنپ",
  },
  {
    imgsrc: "https://jek.snapp.ir/Redesign-Icons/hotel.png",
    title: "رزرو هتل",
    description: "گردشگری با اسنپ",
  },
  {
    imgsrc: "https://snapp.ir/assets/images/snapp-services/trip.svg",
    title: "رزرو اقامتگاه",
    description: "گردشگری با اسنپ",
  },
  {
    imgsrc: "https://jek.snapp.ir/Redesign-Icons/new%20Shop.png",
    title: "فروشگاه",
    description: "خرید از فروشگاه های معتبر شهر",
  },
];

const Services = () => {
  return (
    <div className={classes["services-main"]}>
      <h1 className={classes["services-header"]}>
        یک اپلیکیشن برای تمام نیازها
      </h1>
      <div className={classes["services-container"]}>
        {servicesData.map((item, index) => (
          <div className={classes["services-wrapper"]}>
            <img
              className={classes["services-image"]}
              src={item.imgsrc}
              alt=""
            />
            <div className={classes["services-text"]}>
              <h1 className={classes["services-title"]}>{item.title}</h1>
              <p className={classes["services-description"]}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
