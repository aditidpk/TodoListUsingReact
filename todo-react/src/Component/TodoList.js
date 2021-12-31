import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    list: [],
    newItem: null,
  };
  addItemToList=()=>{
      let list = this.state.list;
      list.push(this.state.newItem);
      this.setState({list})
      this.state.newItem.value=''
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        What needs to be done:
        <input
          type="text"
          onChange={(e) => this.setState({ newItem:e.target.value })}
          name="name"
        />
        <button onClick={this.addItemToList}>Add</button>
        <h3>
        <br/>Tasks in Todo
        </h3>
        {this.state.list.map((e, index) => {
          return (
            <div key={index}>
              <h5>{e}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
