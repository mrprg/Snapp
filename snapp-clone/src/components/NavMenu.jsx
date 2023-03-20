import React from "react";
import "../styles/NavMenu.css";

const NavMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-items">
        <ul>
          <li>فرصت های شغلی</li>
          <li>بلاگ</li>
          <li>باشگاه رانندگان</li>
          <li>
            ثبت نام راننده اسنب{" "}
            <span className="menu-item1">
              (سواری . موتور و وانت)
            </span>
          </li>
          <li>بنل سازمانی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className="underline"></div>
      <div className="dropdown-menu">
        <h3>ابلیکیشن اسنب</h3>
        <div className="dropdown-menu-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="rgb(0, 209, 112)"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16">
            {" "}
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />{" "}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
