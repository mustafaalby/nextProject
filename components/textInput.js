import React from "react";
function Input(props) {
  return (
    <div>
      <input placeholder="Work to do..." onChange={props.change} type="text"></input>
    </div>
  );
}
export default Input;
