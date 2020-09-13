import Header from "../components/Header";
import { ToDoProvider } from "../components/ToDoContext";
import List from "../components/List";
import ItemInput from "../components/ItemInput";
import React, { Component } from "react";
class HomePage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />

        {/*} <div>
          <Input change={this.onTextChange} />
          <button onClick={this.onItemAdd}>+</button>
    </div>{*/}

        <ToDoProvider>
          <ItemInput />
          <List />
        </ToDoProvider>
      </div>
    );
  }
}

export default HomePage;
