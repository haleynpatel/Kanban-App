import React, {Fragment} from'react';
import './App.css';

//Components
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {

  return <Fragment>
      <div className = "container">
        <InputTodo/>
      </div>
      <div class="container">
        <div class="row">
    <div class="col-sm">
      <ListTodo/>
    </div>
    <div class="col-sm">
    <ListTodo/>
    </div>
    <div class="col-sm">
    <ListTodo/>
    </div>
  </div>
</div>
  </Fragment>;
}

export default App;
