import React, { Component } from "react";
import Rating from './Rating';
import './Todo.css'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo/* ,
            userId: this.props.userId,
            id: this.props.id,
            title: this.props.title,
            rating: this.props.rating,
            completed: this.props.completed */


        }
        this.changeRating = this.changeRating.bind(this);            
    }
    changeRating(event) {
        let a = event.target.value;
        if (a > 0 && a < 6) {
          let todo = this.state.todo;
          todo.rating = a;
          this.setState({ todo });
        }
    }
    render () {
        return (
            <li>
                <span className="title">{this.state.todo.title}</span>
            <Rating stars={this.state.todo.rating} />
            <input
                type="number"
                min="1"
                max="5"
                value={this.state.todo.rating}
                onChange={this.changeRating}
              />
            </li>
            
        );
    }
}