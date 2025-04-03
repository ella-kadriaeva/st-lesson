import React from 'react'

const Todo = ({completed, label}) => {
    return (
        <div className="todo" >
            <div>
                <input type="checkbox" />

                <span className={completed ? "completed" : ""}>{label}</span>
            </div>

            <button>X</button>
        </div>
    )
}

export default Todo