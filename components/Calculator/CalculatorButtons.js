import React, { useState, useContext } from "react";
import Style from "../../styles/CalculatorButtons.module.css";
import { CalcuContext } from "./CalculatorContext";
const CalculatorButtons = (props) => {
  const { prev, current } = useContext(CalcuContext);
  const [prevOutput, setPrevOutput] = prev;
  const [currentOutput, setCurrentOutput] = current;
  const [operation, setOperation] = useState("");
  return (
    <div className={Style.Main}>
      <button onClick={onClear} className={Style.twoGrid}>
        AC
      </button>
      <button onClick={onDelete} className={Style.button}>
        Del
      </button>
      <button onClick={onOperation} className={Style.button}>
        /
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        1
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        2
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        3
      </button>
      <button onClick={onOperation} className={Style.button}>
        *
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        4
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        5
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        6
      </button>
      <button onClick={onOperation} className={Style.button}>
        +
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        7
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        8
      </button>
      <button onClick={onNumericInput} className={Style.button}>
        9
      </button>
      <button onClick={onOperation} className={Style.button}>
        -
      </button>

      <button onClick={onNumericInput} className={Style.twoGrid}>
        0
      </button>
      <button onClick={equals} className={Style.twoGrid}>
        =
      </button>
    </div>
  );
  function onNumericInput(e) {
    let temp = e.target.innerText;
    setCurrentOutput(currentOutput + temp);
  }
  function onClear(e) {
    setPrevOutput("");
    setCurrentOutput("");
  }
  function onDelete(e) {
    let temp = currentOutput;
    temp = temp.toString().slice(0, -1);
    setCurrentOutput(temp);
  }
  function onOperation(e) {
    let oper = e.target.innerText;
    setCurrentOutput("");
    setOperation(oper);
    setPrevOutput(currentOutput);
  }
  function equals() {
    let prev = parseFloat(prevOutput);
    let cur = parseFloat(currentOutput);

    switch (operation) {
      case "/":
        {
          setCurrentOutput(prev / cur);
          setPrevOutput("");
        }
        break;
      case "*":
        {
          setCurrentOutput(prev * cur);
          setPrevOutput("");
        }
        break;
      case "+":
        {
          setCurrentOutput(prev + cur);
          setPrevOutput("");
        }
        break;
      case "-":
        {
          setCurrentOutput(prev - cur);
          setPrevOutput("");
        }
        break;
      default:
        {
        }
        break;
    }
  }
};
export default CalculatorButtons;
