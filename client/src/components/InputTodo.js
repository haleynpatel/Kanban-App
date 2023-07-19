import React, {Fragment, useState} from 'react';

const InputTodo = ({progress, done}) => {

    const[description, setDescription] = useState(''); //description is the state, setDescription sets the state and useState is a default value
    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            if(progress){
                const body = {description};
                const response = await fetch("http://localhost:5000/progress", {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(body)
                });
                window.location = "/";
            }
            else if(done){
                const body = {description};
                const response = await fetch("http://localhost:5000/done", {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(body)
                });
                window.location = "/";
            }
            else{
                const body = {description};
                const response = await fetch("http://localhost:5000/todos", {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(body)
                });
                window.location = "/";
            }
        }
        catch(error){
            console.log(error.message);
        }
    }

    return(
        <>
        <form className = "d-flex mt-5" onSubmit={onSubmitForm}>
             <input type="text" className="form-control" value = {description} onChange = {e => setDescription(e.target.value)}/>
             <button className = "btn btn-success">Add</button>
        </form>
        </>
    )
}

export default InputTodo;