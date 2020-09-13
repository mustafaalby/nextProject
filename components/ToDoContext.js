import React, { useState, createContext } from "react";
export const ToDoContext = createContext();
export const ToDoProvider = (props) => {
  const [Todo, SetToDo] = useState([
    { text: "First", id: 0, isDone: true, filter: "work" },
  ]);
  return (
    <ToDoContext.Provider value={[Todo, SetToDo]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
