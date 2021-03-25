import React, { useState } from 'react'
import { Checkbox, Input } from "@material-ui/core";

//followed this tutorial for maintaining recommended controlled components: https://reactjs.org/docs/forms.html#controlled-components
export default function Todo({ todo, toggleTodo, selectOnlyThis, updateTodo }) {
    //made change-on-double-click functionality based on this resource: https://flaviocopes.com/react-edit-doubleclick/
    const [newName, setNewName] = useState({value: todo.name});

    function handleDblClick() {
        // setNewName({value: todo.name});
        selectOnlyThis(todo.id); //iterate through todos and set all selected to false, except this todo.
    }

    const handleEditText = (event) => {
        //An onChange event handler returns a Synthetic Event object which contains useful meta data such as the target input’s id, name, and current value.
        setNewName({value: event.target.value});
    }

    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    const opac = "0.1";
    return (
        <div style={{  
            whiteSpace: "nowrap",
            overflow: "auto",
            width: "100%",
            fontSize: "20px"}}
            className={todo.complete ? 'faded' : null}
        >
            <label>
                <Checkbox 
                    style={{width: "10%", marginBottom: "4px"}} checked={todo.complete} 
                    onChange={handleTodoClick} 
                    color="default"
                />
                <Input
                    style={{width: "80%", fontSize: "20px"}}
                    readOnly={!todo.selected}
                    onDoubleClick={handleDblClick}
                    type='text'
                    disableUnderline={!todo.selected}
                    value={newName.value}
                    onChange={handleEditText}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === 'Escape') {
                        selectOnlyThis();
                        updateTodo(newName.value, todo);
                        event.preventDefault(); //prevents a browser reload/refresh??
                        event.stopPropagation(); //Prevents the event from bubbling up the DOM, but does not stop the browsers default behaviour.
                        }
                    }}
                />
            </label>
            
        </div>
    )
}