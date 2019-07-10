import { createStore } from 'redux'; 

let state = {
    todos: [
      {description: 'laundry', completed: false, id: 0},
      {description: 'groceries', completed: true, id: 1},
      {description: 'taxes', completed: false, id: 2}
    ],
    filterText: ''
  }
let actionADD = {
     type: 'ADD_TODO', 
     description: 'Build my first redux app'
}  