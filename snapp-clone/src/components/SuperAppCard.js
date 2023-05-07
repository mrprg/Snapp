import React from "react";

import classes from "../styles/SuperAppCard.module.css";

const boardsData = [
  {
    imgsrc: `${require("../assets/wallet.png")}`,
    title: `به صرفه`,
    description: `
    سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند
     تا بهترین خدمات را با قیمتی منطقی دریافت کنید.
`,
  },
  {
    imgsrc: `${require("../assets/rocket.png")}`,
    title: `سریع`,
    description: `
    قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. 
    سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
`,
  },
  {
    imgsrc: `${require("../assets/hand.png")}`,
    title: `آسان`,
    description: `
    برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است 
    وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
`,
  },
];

function Boards() {
  return (
    // <div className={classes["board-main"]}>
    <div className={classes["board-container"]}>
      {boardsData.map((item, index) => (
        <div className={classes["board-wrapper"]}>
          <div className={classes["board-image"]}>
            <img src={item.imgsrc} alt="" />
          </div>
          <div className={classes["board-text"]}>
            <h1 className={classes["board-title"]}>{item.title}</h1>
            <p className={classes["board-description"]}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Boards;
