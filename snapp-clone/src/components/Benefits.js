import React from "react";

import classes from "../styles//Benefits.module.css";

const Benefits = () => {
  const videosrc =
    "https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4";
  return (
    <div className={classes.main}>
      <div>
        <div className={classes["header-wrapper"]}>
          <h1 className={classes.header}>
            در کمتر از ده دقیقه ثبت نام کنید و به ناوگان اسنپ بپیوندید
          </h1>
          <p className={classes.description}>
            بدون نیاز به مراجعه حضوری از طریق این صفحه ثبت نام کنید
          </p>
          <button className={classes.button}>ثبت نام رانندگان</button>
        </div>
        <div className={classes["video-wrapper"]}>
          <video
            className={classes["video-player"]}
            controls={true}
            loop={true}
            muted={true}
            playsInline={true}
          >
            <source src={videosrc} />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
