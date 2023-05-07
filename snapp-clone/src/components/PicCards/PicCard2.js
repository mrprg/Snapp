import React from "react";

import classes from "../PicCards/PicCards123.module.css";

function PicCard2() {
  return (
    <div className={`${classes.wrapper} ${classes.wrapper2}`}>
      <img
        src={`${require("/Project/Snapp/snapp-clone/src/assets/basket.jpg")}`}
        alt=""
      />{" "}
      <div className={classes["pic-text"]}>
        <h1>
          از خرید فوری <br></br> لذت ببرید
        </h1>
        <button>سفارش دهید</button>
      </div>
    </div>
  );
}

export default PicCard2;
