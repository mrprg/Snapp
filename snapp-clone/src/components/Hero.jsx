import React from "react";
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero-main">
      <img
        className="hero-image"
        src="https://www.gemtiaz.com/wp-content/uploads/2019/07/Driver-app-1.jpg"
        alt=""
      />
      <div className="hero-text">
        <h1 className="hero-header">
        تجربه ی زندگی راحت تر، سریع تر و به صرفه تر با سوپر اپلیکیشن اسنپ!
        </h1>
        <p className="hero-desc">
          از درخواست خودرو گرفته تا سفارش غذا، خرید
          سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و
          روانشناسی، رزرو هتل و... را میتوانید با
          سوپراپلیکیشن اسنپ انجام دهید.
        </p>
        <form action="">
          <label className="hero-label" htmlFor="">
            <input className="hero-input" type="text" placeholder="09xxxxx6789" />
            <button className="hero-link-button">ارسال لینک</button>
          </label>
        </form>
        <div className="hero-login-container">
        <button className="hero-login-button">ورود به اپلیکیشن اسنپ</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
