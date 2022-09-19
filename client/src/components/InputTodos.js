import React, { Fragment } from "react";

const InputTodo = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-5">PERN Todo List</h1>
            <form className="d-flex">
                <input type="text" className="form-control"></input>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;