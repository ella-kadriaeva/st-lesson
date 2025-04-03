import React from 'react'
import "./Todo.scss"

const Todo = ({ completed, label, onRemove }) => {
    return (
        <div className="todo" >
            <div>
                <input type="checkbox" />

                <span className={completed ? "completed" : ""}>{label}</span>
            </div>

            <button onClick={onRemove}>X</button>
        </div>
    )
}

export default Todo