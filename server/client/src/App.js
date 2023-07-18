import React, {Fragment} from'react';
import './App.css';

//Components
//import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import ListProgress from './components/ListProgress';
import ListDone from './components/ListDone';

function App() {

  return <Fragment>
      <div class="container">
        <div class="row">
    <div class="col-sm">
      <ListTodo/>
    </div>
    <div class="col-sm">
    <ListProgress/>
    </div>
    <div class="col-sm">
    <ListDone/>
    </div>
  </div>
</div>
  </Fragment>;
}

export default App;
