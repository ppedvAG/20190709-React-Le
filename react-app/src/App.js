import React from 'react';
// import logo from './logo.svg';
import './App.css';
// Standard-Import
import Helloworld from './Helloworld';
// Benannter Import
// import {Helloworld} from './Helloworld';
import Rating from './Rating';
import TodosComponent from './TodosComponent';
import Greeter from './Greeter';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
{/*     <div className="App">
      <header className="App-header">
        <Greeter loggedIn={true} user="Vadzim" />
        <Helloworld />  
        <Rating stars="4"/>
      </header>
      <section>
        <TodosComponent />
      </section>
    </div> */}
{/*     <Switch>
      <Route exact path="/" component={Greeter} />
      <Route exact path="/todos" component={TodosComponent} />
      <Route exact path="/rating" component={Rating} />
    </Switch> */}
    <nav>
      <ul>
        <li><Link to="/">HELLO</Link></li>
        <li><Link to="/todos">TODOS</Link></li>
        <li><Link to="/rating">ADDTODO</Link></li>
      </ul>
      <Route exact path="/" component={Helloworld} />
      <Route  path="/todos" component={TodosComponent} />
      <Route  path="/rating" component={Rating} />
    </nav>

    </BrowserRouter>
    
  );
}

export default App;
