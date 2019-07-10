import React, { Component } from "react";
import Todo from './Todo';

export default class TodoList extends Component {
    
  render() {
    return (
      <div>
        <h2>{this.props.todos.length} Aufgaben für heute</h2>
        <ul>
          {this.props.todos.map(todo => (
              <Todo todo={todo}  />   
                       
          ))}        
        </ul>
      </div>
    );
  }
}
