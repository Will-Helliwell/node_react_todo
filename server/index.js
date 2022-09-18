const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js');

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES

// Create a single to-do
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",
            [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

// Get all to-dos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT todo_id, description FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.log(error);
    }
});

// Get a single to-do
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT todo_id, description FROM todo WHERE todo_id = $1",
            [id]);
        res.json(todo.rows);
    } catch (err) {
        console.log(err);
    }
});

// Update a to-do
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const todo = pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated!");
    } catch (err) {
        console.log(err);
    }
});

// Delete a to-do
app.delete("/todos/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const deletedTodo = pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (error) {
        console.error(error.message)
    }
});


const port_number = 5000;
app.listen(port_number, () => {
    console.log(`server has started on port ${port_number}`);
});