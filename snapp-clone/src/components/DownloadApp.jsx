import React from "react";
import "../styles/DownloadApp.css";
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
    <div className="download-container">
      {data.map((item) => (
        <div className="download-wrapper">
          <img className="download-image" src={item.imgsrc} />
        </div>
      ))}
    </div>
  );
};

export default DownloadApp;
