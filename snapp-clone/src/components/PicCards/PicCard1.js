import React from "react";

import classes from "../PicCards/PicCards123.module.css";

function PicCard1() {
  return (
    <div className={`${classes.wrapper} ${classes.wrapper1}`}>
      <img
        src={`${require("/Project/Snapp/snapp-clone/src/assets/fastfood.jpg")}`}
        alt=""
      />
      <div className={classes["pic-text"]}>
        <h1>
          سفارش غذا <br></br>از بهترین <br></br> رستوران ها
        </h1>
        <button>سفارش دهید</button>
      </div>
    </div>
  );
}

export default PicCard1;
