import React, {Fragment} from'react';
import './App.css';

//Components
//import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import ListProgress from './components/ListProgress';
import ListDone from './components/ListDone';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ListTodo />
          </div>
          <div className="col-sm">
            <ListProgress />
          </div>
          <div className="col-sm">
            <ListDone />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
