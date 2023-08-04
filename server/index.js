const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES //

//create a backlog item
app.post("/todos", async (req, res) => {
    try{
        const { description }  = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todotable(description, status) VALUES($1, 0) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});

//create progress item
app.post("/progress", async (req, res) => {
    try{
        const { description }  = req.body;
        const newTodo = await pool.query(
            //1 represents in progress
            "INSERT INTO todotable(description, status) VALUES($1, 1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});

//create done item
app.post("/done", async (req, res) => {
    try{
        const { description }  = req.body;
        const newTodo = await pool.query(
            //2 represents done
            "INSERT INTO todotable(description, status) VALUES($1, 2) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});

//get backlog items
app.get("/todos", async (req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todotable WHERE STATUS = 0");
        res.json(allTodos.rows);
    }
    catch(err) {
            console.error(err.message);
    }
});

//get progress items
app.get("/progress", async (req, res) => {
    try{
        // retrieve all todo items that are in progress
        const allTodos = await pool.query("SELECT * FROM todotable WHERE STATUS = 1");
        res.json(allTodos.rows);
    }
    catch(err) {
            console.error(err.message);
    }
});

//get done items
app.get("/done", async (req, res) => {
    try{
        //retrieve all todo items that are done
        const allTodos = await pool.query("SELECT * FROM todotable WHERE STATUS = 2");
        res.json(allTodos.rows);
    }
    catch(err) {
            console.error(err.message);
    }
});

//get a specific todo item
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

//update a todo item
app.put("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const{description} = req.body;
        const updatedTodo = await pool.query(
                "UPDATE todotable SET description = $1 WHERE todo_id = $2", [description, id]
        );

        res.json("Item was updated successfully");
    }
    catch(err) {
            console.error(err.message);
    }
});

//update a backlog item to progress
app.put("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const{description} = req.body;
        const progress = await pool.query(
                "UPDATE todotable SET status = $1 WHERE todo_id = $2", [1, id]
        );

        res.json("Item was updated successfully");
    }
    catch(err) {
            console.error(err.message);
    }
});

//delete a todo item
app.delete("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todotable WHERE todo_id = $1", [id]);
        res.json("Item was deleted successfully");
    }
    catch(err){
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});