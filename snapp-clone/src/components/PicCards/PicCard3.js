import React from "react";

import classes from "../PicCards/PicCards123.module.css";

function PicCard3() {
  return (
    <div className={`${classes.wrapper} ${classes.wrapper3}`}>
      <img
        src={`${require("/Project/Snapp/snapp-clone/src/assets/snapp-club.jpg")}`}
        alt=""
      />{" "}
      <div className={classes["pic-text"]}>
        <h1>
          تخفیف های <br></br> شگفت انگیز در <br></br>
          انتظار شماست
        </h1>
        <button>ورود به اسنپ کلاب</button>
      </div>
    </div>
  );
}

export default PicCard3;
