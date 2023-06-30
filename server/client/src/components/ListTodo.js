import React, { Fragment , useEffect, useState} from 'react';
import EditTodo from './EditTodo';
//useEffect makes request to RESTful API

const ListTodo = () => {
    const[todos, setTodos] = useState([]);

    //Delete function
    const deleteTodo = async id => {
        try{
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE',
        });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        }
        catch(error){
            console.error(error.message);
        }
    }


    const getTodos = async () => {
        try{
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            
            setTodos(jsonData);
        }
        catch(error){
            console.error(error);
        }
    }
    
    useEffect(() => {
        getTodos();
    }, []);

    return <Fragment>
    <table class="table-sm mt-5 text-center">
    <thead>
      <tr>
        <th scope = "col">Backlog</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr key = {todo.todo_id}>
            <td>{todo.description}</td>
            <td>
                <EditTodo todo = {todo}/>
            </td>
            <td><button className = "btn" onClick={()=> deleteTodo(todo.todo_id)}>❌</button></td>
        </tr>
        ))}
    </tbody>
  </table></Fragment>;
};

export default ListTodo;