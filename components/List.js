import React, { useState, useEffect, useContext } from "react";
import Styles from "../styles/List.module.css";
import Item from "../components/toDoItem";
import { ToDoContext } from "../components/ToDoContext";
const List = (props) => {
  const [Todo, SetToDo] = useContext(ToDoContext);
  const [selectItem, setSelectItem] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setFiltered(Todo);
  }, [Todo]);
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.filter}>
        <select className={Styles.button} value={selectItem} onChange={filter}>
          <option value="">All</option>
          <option value="work">Work</option>
          <option value="school">School</option>
          <option value="daily">Daily Work</option>
        </select>
      </div>
      {filtered.map((temp, index) => (
        <Item
          key={index}
          isDone={temp.isDone}
          id={temp.id}
          filter={temp.filter}
          text={temp.text}
        />
      ))}
    </div>
  );

  function filter(e) {
    let value = e.target.value;
    setSelectItem(value);
    if (value === "") {
      setFiltered(Todo);
    } else {
      setFiltered(Todo.filter((x) => x.filter === value));
    }
  }
};

export default List;
