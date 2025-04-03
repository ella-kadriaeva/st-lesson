import React from 'react'
import "./TodoHeader.scss";

const TodoHeader = ({handleTodoAdd, handleCheckedAll, changeSearch}) => {
    return (
        <div className="todos-header">
            <div>
                <input type="checkbox" onChange={(e) => handleCheckedAll(e)}/>
            </div>
            <input
                type="text"
                placeholder='What needs to be done?'
                onKeyUp={handleTodoAdd}
                onChange={changeSearch}
            />
        </div>
    )
}

export default TodoHeader