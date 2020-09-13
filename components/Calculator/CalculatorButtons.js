import React, { useState } from "react";
import Style from "../../styles/CalculatorButtons.module.css";
function CalculatorButtons() {
  return (
    <div className={Style.Main}>
      <button onClick={(e) => console.log(e.target.innerText    )} className={Style.button}>
        1
      </button>
      <button className={Style.button}>2</button>
      <button className={Style.button}>3</button>
      <button className={Style.button}>*</button>
      <button className={Style.button}>4</button>
      <button className={Style.button}>5</button>
      <button className={Style.button}>6</button>
      <button className={Style.button}>/</button>
      <button className={Style.button}>7</button>
      <button className={Style.button}>8</button>
      <button className={Style.button}>9</button>
      <button className={Style.button}>+</button>
      <button className={Style.button}>Clear</button>
      <button className={Style.button}>0</button>
      <button className={Style.button}>=</button>
      <button className={Style.button}>-</button>
    </div>
  );
}
export default CalculatorButtons;
