import React from "react";
import '../styles/SuperApp.css'
const SuperApp = () => {
  return (
    <div className="superapp-main">
      <div className="superapp-top">
        <img
        className="top-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbh2yKeL5sV9WfBuGKi594c-jtrV4sqHkYA&usqp=CAU"
          alt=""
        />
        <div className="top-wrapper">
          <h1 className="top-header">سوپر اپ اسنپ; پاسخی به تمام نیاز ها</h1>
          <p className="top-desc">
            اسنپ اولین تاکسی ترددی بعد از پنج سال فعالیت در
            حوزه ی تردد شهری به یک سوپر اپ با خدمات متنوع
            تبدیل شده است. سوپر اپ اسنپ راه حل جدید جدید و
            ساده است که با استفاده از آن تنها با یک اپلیکیشن
            میتوانید علاوه بر درخواست خودرد و موتور وانت از
            خدمات متعددی از جمله سفارش غذا پزشک و مشاور
            آنلاین خرید از سوپر مارکت و ... بهره مند شوید
          </p>
        </div>
      </div>
      <div className="superapp-below">
        <div className="below-wrapper">
            <img className="below-image" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png" alt="" />
            <h1 className="below-header">آسان</h1>
            <p className="below-desc">این یک متن آزمایشی است </p>
        </div>
        <div className="below-wrapper">
            <img className="below-image" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png" alt="" />
            <h1 className="below-header">آسان</h1>
            <p className="below-desc">این یک متن آزمایشی است </p>
        </div>
        <div className="below-wrapper">
            <img className="below-image" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png" alt="" />
            <h1 className="below-header">آسان</h1>
            <p className="below-desc">این یک متن آزمایشی است </p>
        </div>
      </div>
    </div>
  );
};

export default SuperApp;
