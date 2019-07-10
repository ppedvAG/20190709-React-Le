import React, { Component } from "react";

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            todoHandler: props.handler
            
        }
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo() {
        let newTodo = {
            userId: 1,            
            title: this.state.inputText, 
            rating: 1, 
            completed: false
        };
        this.state.todoHandler(newTodo);
    }
  render() {
    return (
      <div>
          <h2>NEUE AUFGABE</h2>
        <input
          type="text"
          value={this.state.inputText}
          onChange={event => this.setState({ inputText: event.target.value })}
        />
        <button onClick={this.addTodo}>ADD</button>
      </div>
    );
  }
}
