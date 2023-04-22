import React from "react";
import "../styles/Benefits.css";

const Benefits = () => {
  const videosrc =
    "https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4";
  return (
    <div className="main">
      <div>
        <div className="header-wrapper">
          <h1 className="header">
            در کمتر از ده دقیقه ثبت نام کنید و به ناوگان
            اسنپ بپیوندید
          </h1>
          <p className="description">
            بدون نیاز به مراجعه حضوری از طریق این صفحه ثبت
            نام کنید
          </p>
          <button className="button">
            ثبت نام رانندگان
          </button>
        </div>
        <div className="video-wrapper">
          <video
            className="video-player"
            controls={true}
            loop={true}
            muted={true}
            playsInline={true}>
            <source src={videosrc} />
          </video>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-hour.png" alt="image" />
          <p>این یک متن آزماشی است</p>
        </div>
        <div className="card">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png" alt="image" />
          <p>این یک متن آزمایشی است</p>
        </div>
        <div className="card">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-benefits.png" alt="image" />
          <p>این یک متن آزمایشی است </p>
        </div>
        <div className="card">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-benefits.png" alt="" />
          <p>این یک متن آزماشیی است </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
