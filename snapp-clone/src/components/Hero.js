import React, { Fragment, useState, useReducer, useEffect } from "react";

import classes from "../styles/Hero.module.css";

function numberReducer(state, action) {
  if (action.type === "NUMBER-INPUT") {
    return { value: action.val, isValid: action.val.trim().length === 11 };
  }

  return { value: "", isValid: false };
}

const Hero = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: numberIsValid } = numberState;

  function submitHandler(e) {
    e.target.value.preventDefault();

    return;
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(numberIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [numberIsValid]);

  function numberChangeHandler(e) {
    dispatchNumber({ type: "NUMBER-INPUT", val: e.target.value });
  }

  return (
    <Fragment>
      <div className={classes["main-hero"]}>
        <img
          src="https://www.gemtiaz.com/wp-content/uploads/2019/07/Driver-app-1.jpg"
          alt=""
        />
        <div className={classes["box-hero"]}>
          <div className={classes["text-hero"]}>
            <h1>
              تجربه ی زندگی راحت تر، سریع تر و <br /> !به صرفه تر با سوپر
              اپلیکیشن اسنپ
            </h1>
            <p>
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط
              سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
              سوپراپلیکیشن اسنپ انجام دهید
            </p>
          </div>
          <form
            onSubmit={submitHandler}
            className={`${classes["form-hero"]} ${
              numberState.isValid === false ? classes.invalid : ""
            } `}
          >
            <input
              value={numberState.value}
              onChange={numberChangeHandler}
              type="number"
              id="number"
              // min="11"
              // max="11"
              // length="11"
              placeholder="09xxxxx6789                     :شماره همراه "
            />
            <button htmlFor="number" disabled={!formIsValid} type="submit">
              ارسال لینک
            </button>
          </form>
          <button className={classes["button-hero"]} type="button">
            ورود به اپلیکیشن اسنپ
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
