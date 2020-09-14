import React, { useState, useContext } from "react";
import Style from "../../styles/CalculatorButtons.module.css";
import { CalcuContext } from "./CalculatorContext";
function Output() {
  const { prev, current } = useContext(CalcuContext);
  const [prevOutput, setPrevOutput] = prev;
  const [CurrentOutput, setCurrentOutput] = current;
  return (
    <div>
      <div className={Style.Output}>
        <div className={Style.previoutOutput}>{prevOutput}</div>
        <div className={Style.currentOutput}>{CurrentOutput}</div>
      </div>
    </div>
  );
}
export default Output;
