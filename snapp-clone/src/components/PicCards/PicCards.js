import React, { Fragment } from "react";

import classes from "../PicCards/PicCards.module.css";

import PicCard1 from "./PicCard1";
import PicCard2 from "./PicCard2";
import PicCard3 from "./PicCard3";

function PicCards() {
  return (
    <Fragment>
      <div className={classes["main-pic"]}>
        <div className={classes["pic"]}>
          <PicCard1 className={classes.pic1}></PicCard1>
          <PicCard2 className={classes.pic2}></PicCard2>
          <PicCard3 className={classes.pic3}></PicCard3>
        </div>
      </div>
    </Fragment>
  );
}

export default PicCards;
