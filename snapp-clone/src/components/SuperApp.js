import React, { Fragment } from "react";

import SuperAppCard from "./SuperAppCard";

import classes from "../styles/SuperApp.module.css";

function SuperApp() {
  return (
    <Fragment>
      <div className={classes["main-app"]}>
        <div className={classes["app-wrapper"]}>
          <div className={classes["app-img"]}>
            <img
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/super-app.jpg"
              alt=""
            />
          </div>
          <div className={classes["app-text"]}>
            <h1>سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h1>
            <p>
              اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
              تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
              راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
              می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
              جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
              فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
              هتل، پرداخت قبض و خرید شارژ استفاده کنید.
            </p>
          </div>
        </div>
        <div className={classes["app-card"]}>
          <SuperAppCard className={classes["card"]} />
        </div>
      </div>
    </Fragment>
  );
}

export default SuperApp;

// import React from "react";

// import classes from "../styles/SuperApp.module.css";

// const SuperApp = () => {
//   return (
//     <div className={classes["superapp-main"]}>
//       <div className={classes["superapp-top"]}>
//         <img
//           className={classes["top-image"]}
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbh2yKeL5sV9WfBuGKi594c-jtrV4sqHkYA&usqp=CAU"
//           alt=""
//         />
//         <div className={classes["top-wrapper"]}>
//           <h1 className={classes["top-header"]}>
//             سوپر اپ اسنپ; پاسخی به تمام نیاز ها
//           </h1>
//           <p className={classes["top-desc"]}>
//             اسنپ اولین تاکسی ترددی بعد از پنج سال فعالیت در حوزه ی تردد شهری به
//             یک سوپر اپ با خدمات متنوع تبدیل شده است. سوپر اپ اسنپ راه حل جدید
//             جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن میتوانید
//             علاوه بر درخواست خودرد و موتور وانت از خدمات متعددی از جمله سفارش
//             غذا پزشک و مشاور آنلاین خرید از سوپر مارکت و ... بهره مند شوید
//           </p>
//         </div>
//       </div>
//       <div className={classes["superapp-below"]}>
//         <div className={classes["below-wrapper"]}>
//           <img
//             className={classes["below-image"]}
//             src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png"
//             alt=""
//           />
//           <h1 className={classes["below-header"]}>آسان</h1>
//           <p className={classes["below-desc"]}>این یک متن آزمایشی است </p>
//         </div>
//         <div className={classes["below-wrapper"]}>
//           <img
//             className={classes["below-image"]}
//             src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png"
//             alt=""
//           />
//           <h1 className={classes["below-header"]}>آسان</h1>
//           <p className={classes["below-desc"]}>این یک متن آزمایشی است </p>
//         </div>
//         <div className={classes["below-wrapper"]}>
//           <img
//             className={classes["below-image"]}
//             src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png"
//             alt=""
//           />
//           <h1 className={classes["below-header"]}>آسان</h1>
//           <p className={classes["below-desc"]}>این یک متن آزمایشی است </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuperApp;
