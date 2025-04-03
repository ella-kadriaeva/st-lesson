import React from 'react'
import "./TodoHeader.scss";

const TodoHeader = ({handleTodoAdd}) => {
    return (
        <div className="todos-header">
            <input
                type="text"
                placeholder='What needs to be done?'
                onKeyUp={handleTodoAdd}
            />
        </div>
    )
}

export default TodoHeader