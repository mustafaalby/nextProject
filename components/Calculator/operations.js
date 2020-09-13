import React, { useState } from "react";
import Style from "../../styles/CalculatorButtons.module.css";

function Operations() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto",
        margin: "auto",
        width: "50%",
      }}
    >
      <button className={Style.button}>*</button>
      <button className={Style.button}>/</button>
      <button className={Style.button}>+</button>
      <button className={Style.button}>-</button>
    </div>
  );
}
export default Operations;
