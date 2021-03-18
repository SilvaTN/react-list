import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, selectOnlyThis, deselectTodo, updateTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} selectOnlyThis={selectOnlyThis} updateTodo={updateTodo} />
        })
    )
}