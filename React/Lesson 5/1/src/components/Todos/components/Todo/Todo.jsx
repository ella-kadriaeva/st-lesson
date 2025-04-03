import React from 'react'
import "./Todo.scss"

const Todo = ({ completed, label, onRemove, id }) => {
    return (
        <div className="todo" >
            <label htmlFor={id}>
                <input type="checkbox" id={id}/>
                <span className={completed ? "completed" : ""}>{label}</span>
            </label>


            <button onClick={onRemove}>X</button>
        </div>
    )
}

export default Todo