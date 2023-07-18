const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //get json data

//ROUTES//


//create a todo

//Creating so use POST method
app.post("/todos", async (req, res) => {
    try{
        const { description }  = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todotable(description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});


//get all todos

app.get("/todos", async (req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todotable");
        res.json(allTodos.rows);
    }
    catch(err) {
            console.error(err.message);
    }
});

//get a specific todo

app.get("/todos/:id", async (req, res) => {
    try{
        //console.log(req.params) debug
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todotable WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    }catch(err) {
        console.error(err.message);
    }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const{description} = req.body;
        const updatedTodo = await pool.query(
                "UPDATE todotable SET description = $1 WHERE todo_id = $2", [description, id]
        );

        res.json("Todo was updated successfully");
    }
    catch(err) {
            console.error(err.message);
    }
});

app.put("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const{description} = req.body;
        const progress = await pool.query(
                "UPDATE todotable SET status = $1 WHERE todo_id = $2", [1, id]
        );

        res.json("Todo was updated successfully");
    }
    catch(err) {
            console.error(err.message);
    }
});
//delete a todo


app.delete("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todotable WHERE todo_id = $1", [id]);
        res.json("Todo was deleted successfully");
    }
    catch(err){
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});