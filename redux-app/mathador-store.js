/* import { createStore } from "redux";

const mathador = (state = 1, action) => {
  switch (action.type) {
    case "MAL3":
      return state*3;
    case "MINUS7":
      return state - 7;
    default:
      return state;
  }
};

let mathadorStore = createStore(mathador);

mathadorStore.dispatch({ type: "MAL3" });
// 3
mathadorStore.dispatch({ type: "MAL3" });
// 9
mathadorStore.dispatch({ type: "MINUS7" });
// 2
mathadorStore.dispatch({ type: "MAL3" });
// 6
mathadorStore.dispatch({ type: "MAL3" });
// 18 */
import { createStore } from 'redux'

const counter = (state = 1 /*initial state*/, action) => {
    switch (action.type) {
      case 'MAL 3':
        return state*3;
      case 'MINUS 7':
        return state-7;
      default:
        return state;
    }
  };

let mathadorstore = createStore(counter);

  const Mal = state => mathadorstore.dispatch({type: 'MAL 3', value: state});
  const Minus = state => mathadorstore.dispatch({type: 'MINUS 7', value: state});

  const unsubscribe = mathadorstore.subscribe(() => console.log(mathadorstore.getState()))

Mal();
Mal();
Mal();
Mal();
Mal();

  unsubscribe();
// 11


// mathadorStore.subscribe(() => console.log(mathadorStore.getState()));
