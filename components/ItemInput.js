import React, { useState, useContext } from "react";
import Style from "../styles/ItemInput.module.css";
import { ToDoContext } from "../components/ToDoContext";
const ItemInput = (props) => {
  const [text, setText] = useState("");
  const [selectItem, setSelectItem] = useState("work");
  const [ToDo, SetToDo] = useContext(ToDoContext);
  return (
    <div className={Style.mainDiv}>
      <form className={Style.grid} onSubmit={submit}>
        <input
          className={Style.Input}
          type="text"
          onChange={onTextChange}
        ></input>
        <button className={Style.button} type="submit">
          +
        </button>
        <select
          className={Style.button}
          value={selectItem}
          onChange={(e) => {
            setSelectItem(e.target.value);            
          }}
        >
          <option value="work">Work</option>
          <option value="school">School</option>
          <option value="daily">Daily Work</option>
        </select>
      </form>
    </div>
  );
  function onTextChange(e) {
    setText(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    SetToDo((prev) => [
      ...prev,
      { text: text, isDone: false, id: prev.length, filter: selectItem },
    ]);
    
  }
};
export default ItemInput;
