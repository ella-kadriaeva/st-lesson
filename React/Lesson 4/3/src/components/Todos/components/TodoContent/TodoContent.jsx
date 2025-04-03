import React from 'react'
import Todo from '../Todo/Todo'

const TodoContent = ({todos, onRemove}) => {
    return (
        <div className="todos-content">
            {
                todos && todos.map(item => <Todo
                    key={item.id}
                    completed={item.completed}
                    label={item.label}
                    onRemove={onRemove}
                />)
            }
        </div>
    )
}

export default TodoContent