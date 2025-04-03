import React from 'react'
import Todo from '../Todo/Todo'

const TodoContent = ({todos, onRemove, onChecked, onSave}) => {
    return (
        <div className="todos-content">
            {
                todos && todos.map(item => <Todo
                    key={item.id}
                    id={item.id}
                    completed={item.completed}
                    label={item.label}
                    onRemove={() => onRemove(item.id)}
                    onChecked={() => onChecked(item.id)}
                    onSave={onSave}
                />)
            }
        </div>
    )
}

export default TodoContent