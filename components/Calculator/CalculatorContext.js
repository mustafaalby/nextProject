import React, { useState, createContext } from "react";
export const CalcuContext = createContext();
export const CalcuProvider = (props) => {
  const [prevOutput, setPrevOutput] = useState("");
  const [CurrentOutput, setCurrentOutput] = useState("");
  return (
    <CalcuContext.Provider
      value={{
        prev: [prevOutput, setPrevOutput],
        current: [CurrentOutput, setCurrentOutput],
      }}
    >
      {props.children}
    </CalcuContext.Provider>
  );
};
