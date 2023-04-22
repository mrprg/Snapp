import React, { useState } from "react";

import classes from "../styles/NavMenu.module.css";

const NavMenu = () => {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const data = [
    {
      title: "section1",
      content: "answer is this thing , so you can use it",
    },
  ];

  return (
    <div className={classes["menu-container"]}>
      <div className={classes["menu-items"]}>
        <ul>
          <li>فرصت های شغلی</li>
          <li>بلاگ</li>
          <li>باشگاه رانندگان</li>
          <li>
            ثبت نام راننده اسنب{" "}
            <span className={classes["menu-item1"]}>
              (سواری . موتور و وانت)
            </span>
          </li>
          <li>بنل سازمانی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className={classes.underline}></div>
      <div
        onClick={() => setActiveDropDown(!activeDropDown)}
        className={classes["dropdown-menu"]}
      >
        <h3>ابلیکیشن اسنب</h3>
        <div className={classes["dropdown-menu-icon"]}>
          {activeDropDown ? (
            <svg
              className={classes.svg}
              transform="rotate(180)"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="rgb(0, 209, 112)"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />{" "}
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="rgb(0, 209, 112)"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />{" "}
            </svg>
          )}
        </div>

        <div
          className={`${classes["dropdown-content"]} ${
            activeDropDown ? "active" : "hidden"
          }`}
        >
          <div className="download-items">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/markets/directdownload-icon.png"
              alt="android"
            />
            <p>دانلود برای اندروید</p>
          </div>
          <div className={classes["download-items"]}>
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/markets/cafebazaar.png"
              alt="cafe-bazar"
            />
            <p>دانلود از کافه بازار</p>
          </div>
          <div className={classes["download-items"]}>
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/markets/snapp-pwa.svg"
              alt="webApp"
            />
            <p>وب اپلیکیشن اسنپ</p>
          </div>
          <div className={classes["download-items"]}>
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/markets/iapps.png"
              alt="iapps"
            />
            <p>
              دانلود از آی اپس<span>(20٪ تخفیف ویژه با کد snapp20)</span>
            </p>
          </div>
          <div className={classes["download-items"]}>
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/markets/sibapp.png"
              alt="sibapp"
            />
            <p>دانلود برای اندروید</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
