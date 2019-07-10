import React, { Component } from "react";
// import Todo from "./Todo";
import Greeter from './Greeter';
// import Rating from "./Rating";
import TodoList from "./TodoList";
import AddTodo from './AddTodo';

export default class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      inputText: "newTodo",
      stars: 1,
      todos: [
        { userId: 1, id: 0, title: "laundry", rating: 1, completed: false },
        { userId: 1, id: 1, title: "groceries", rating: 1, completed: false },
        { userId: 1, id: 2, title: "taxes", rating: 1, completed: false }
      ]
    };
    // this.getTodos = this.getTodos.bind(this);
    this.getTasks();
  
    this.changeRating = this.changeRating.bind(this);
  }
  render() {
    return (
      <div>
        {/* <p>{this.state.loggedIn}</p> */} {/* Booleans nicht gerendert */}
        <Greeter loggedIn={this.state.loggedIn} user="Vadzim" />
        {/* <p>
          {this.state.loggedIn === true ? "Hallo Max" : "logen Sie sich ein"}
        </p> */}
        
        
        <TodoList todos={this.state.todos}/>
        <AddTodo handler={this.addTodo}/>
        {/* <div>{this.getTasks()}</div> */}
      </div>
    );
  }
  /* getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => this.setState(
          oldState => {
              let newTodos = oldState.todos.slice();
              newTodos.push(json);
              return { todos: newTodos };
          }))
        //endlose Schleife
       
  } */
  getTasks(num = 2) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then(response => response.json())
      .then(json => {
        //debugger;
        let newTodo = {userId: json.userId, id: this.state.todos.length, title: json.title,rating: 1, completed: json.completed};
        let newTodos = this.state.todos.concat(newTodo);
        this.setState({ todos: newTodos });
        console.log(json);
      });
  }
  addTodo(todoEntry) {
    todoEntry.id = this.state.todos.length;
    let newTodos = this.state.todos.concat(todoEntry);
    this.setState({ todos: newTodos });
  }
/*   addTodo() {    
    let newTodo = {userId: 1, id: this.state.todos.length, title: this.state.inputText, rating: 1, completed: false};
    let newTodos = this.state.todos.concat(newTodo);
    this.setState({ todos: newTodos });
  } */

  changeRating(event) {
    this.setState({stars: event.target.value});
    
    

  }
}
