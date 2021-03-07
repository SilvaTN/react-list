import React from 'react'
import { Checkbox, InputLabel, Grid } from "@material-ui/core";

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    
    return (
        <div style={{  
            whiteSpace: "nowrap",
            overflow: "auto",
            width: "100%",
            fontSize: "20px"}}>
            <label>
                <Checkbox checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}