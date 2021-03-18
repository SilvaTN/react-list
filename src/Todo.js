import React, { useState } from 'react'
import { Checkbox } from "@material-ui/core";

export default function Todo({ todo, toggleTodo, selectOnlyThis, updateTodo }) {
    //made change-on-double-click functionality based on this resource: https://flaviocopes.com/react-edit-doubleclick/
    const [newName, setNewName] = useState(todo.name);

    function handleDblClick() {
        setNewName(todo.name);
        selectOnlyThis(todo.id); //iterate through todos and set all selected to false, except this todo.
    }

    const handleEditText = (event) => {
        //An onChange event handler returns a Synthetic Event object which contains useful meta data such as the target input’s id, name, and current value.
        setNewName(event.target.value);
    }

    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    
    return (
        <div style={{  
            whiteSpace: "nowrap",
            overflow: "auto",
            width: "100%",
            fontSize: "20px"}}>
            
            {(todo.selected) ? (
                <input
                    type='text'
                    value={newName}
                    onChange={handleEditText}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === 'Escape') {
                        selectOnlyThis();
                        updateTodo(newName, todo);
                        event.preventDefault(); //prevents a browser reload/refresh??
                        event.stopPropagation(); //Prevents the event from bubbling up the DOM, but does not stop the browsers default behaviour.
                        }
                    }}
                />
            ) : (
                <label>
                    <Checkbox checked={todo.complete} onChange={handleTodoClick} />
                    <span onDoubleClick={handleDblClick}>{todo.name}</span>
                </label>
            )}
        </div>
    )
}