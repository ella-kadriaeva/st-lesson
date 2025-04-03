import React from 'react'
import Todo from '../Todo/Todo'

const TodoContent = ({todos, onRemove}) => {
    return (
        <div className="todos-content">
            {
                todos && todos.map(item => <Todo
                    key={item.id}
                    id={item.id}
                    completed={item.completed}
                    label={item.label}
                    onRemove={() => onRemove(item.id)}
                />)
            }
        </div>
    )
}

export default TodoContent