import React from "react";

import classes from "../styles/Boards.module.css";

import Card from "./UI/Card";

const boardsData = [
  {
    imgsrc: `${require("../assets/180x100-income.png")}`,
    title: `درآمد تضمینی + پاداش ماهانه و هفتگی`,
    description: `با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در
    لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش
    دهید.`,
  },
  {
    imgsrc: `${require("../assets/180x100-hour.png")}`,
    title: `ساعت کاری دلخواه`,
    description: `فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را
            در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی
            کنید.`,
  },
  {
    imgsrc: `${require("../assets/180x100-benefits.png")}`,
    title: `مزایا و خدمات باشگاه رانندگان`,
    description: `در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله
            خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند
            شوید.`,
  },
  {
    imgsrc: `${require("../assets/180x100-carfix.png")}`,
    title: `کارفیکس`,
    description: `باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای
    سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده
    است.`,
  },
];

function Boards() {
  return (
    <div className={classes["board-main"]}>
      <div className={classes["board-container"]}>
        {boardsData.map((item, index) => (
          <Card className={classes["board-wrapper"]}>
            <img className={classes["board-image"]} src={item.imgsrc} alt="" />
            <div className={classes["board-text"]}>
              <h1 className={classes["board-title"]}>{item.title}</h1>
              <p className={classes["board-description"]}>{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Boards;
