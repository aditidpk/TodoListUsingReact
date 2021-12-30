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
  }
  render() {
    return (
      <div>
        Enter item:
        <input
          type="text"
          onChange={(e) => this.setState({ newItem:e.target.value })}
          name="name"
        />
        <button onClick={this.addItemToList}>Add item</button>
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
