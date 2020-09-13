import Item from "./toDoItem";
import React from "react";
function List(props) {
  const list = props.list.map((prod, index) => (
    <Item key={index} text={prod} />
  ));
  //console.log(list);
  return <div>{list}</div>;
}

export default List;
