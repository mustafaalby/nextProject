import React, { useContext, useState } from "react";
import Style from "../styles/List.module.css";
import { ToDoContext } from "../components/ToDoContext";
function toDoItem(props) {
  const [ToDo, SetToDo] = useContext(ToDoContext);
  return (
    <div className={Style.grid}>
      {props.isDone === false ? (
        <p className={Style.Done} id={props.id} onClick={updateItem}>
          {props.text}
        </p>
      ) : (
        <p id={props.id} onClick={updateItem} className={Style.NotDone}>
          {props.text}
        </p>
      )}
      <p>{props.filter}</p>
      <button
        className={Style.button}
        name="a"
        id={props.id}
        onClick={deleteItem}
      >
        {" "}
        -
      </button>
    </div>
  );
  function deleteItem(e) {
    e.preventDefault();
    let id = e.target.id;
    SetToDo(ToDo.filter((item) => item.id != id));
  }
  function updateItem(e) {
    e.preventDefault();
    let id = e.target.id;
    let tempArray = [...ToDo];
    tempArray[id].isDone = !tempArray[id].isDone;
    SetToDo(tempArray);
  }
}
export default toDoItem;
