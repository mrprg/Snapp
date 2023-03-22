import React from "react";
import '../styles/Services.css'

const servicesData = [
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/cab.svg",
    title: "تاکسی اینترنتی",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/bike.svg",
    title: "پیک موتوری",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/Pickup-new.png",
    title: "درخواست وانت",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/food.svg",
    title: "سفارش غذا آنلاین",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/market.svg",
    title: "سوپر مارکت آنلاین",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/market.svg",
    title: "اسنپ اکسپرس",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png",
    title: "بلیط پرواز داخلی",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png",
    title: "بلیط پرواز خارجی", 
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/doctor.svg",
    title: "دکتر",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/hotel.png",
    title: "رزرو هتل",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://snapp.ir/assets/images/snapp-services/trip.svg",
    title:"رزرو اقامتگاه",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
  {
    imgsrc:
      "https://jek.snapp.ir/Redesign-Icons/new%20Shop.png",
    title: "فروشگاه",
    description: "امکان درخواست آنلاین خودرو با اسنپ",
  },
];

const Services = () => {
  return (
    <div className="services-main">
      <h1 className="services-header">یک اپلیکیشن برای تمام نیازها</h1>
      <div className="services-container">
        {servicesData.map((item, index) => (
          <div className="services-wrapper">
            <img className="services-image" src={item.imgsrc} alt="" />
            <div className="services-text">
              <h1 className="services-title">{item.title}</h1>
              <p className="services-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
