import React from "react";

import classes from "../styles/DownloadApp.module.css";

const data = [
  {
    imgsrc:
      "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/snapp-pwa.png",
  },
  {
    imgsrc:
      "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png",
  },
  {
    imgsrc:
      "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/direct-download-badge.png",
  },
  {
    imgsrc:
      "https://web-cdn.snapp.ir/snappir-marketing/images/misc/iappsbadge.webp",
  },
  {
    imgsrc:
      "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/sibapp-badge-white.png",
  },
];

const DownloadApp = () => {
  return (
    <div className={classes["download-container"]}>
      {data.map((item) => (
        <div className={classes["download-wrapper"]}>
          <img className={classes["download-image"]} src={item.imgsrc} alt="" />
        </div>
      ))}
    </div>
  );
};

export default DownloadApp;
