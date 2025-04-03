import React, { useState } from 'react'
import "./Todo.scss"

const Todo = ({ completed, label, onRemove, id, onChecked, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="todo" >
            <label htmlFor={id}>
                <input type="checkbox" id={id} checked={completed} onChange={onChecked} />

                {
                    !isEditing
                        ? <span className={completed ? "completed" : ""}>{label}</span>
                        : <input type="text" value={label} />
                }

            </label>

            {
                isEditing
                    ? (
                        <div>
                            <button>Save</button>
                            <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                        </div>
                    )
                    : (
                        <div>
                            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                            <button onClick={onRemove}>X</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Todo