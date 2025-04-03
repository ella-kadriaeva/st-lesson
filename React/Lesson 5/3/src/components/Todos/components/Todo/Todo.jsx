import React, { useState } from 'react'
import "./Todo.scss"

const Todo = ({ completed, label, onRemove, id, onChecked, onSave }) => {
    const [inputValue, setInputValue] = useState(label);
    const [isEditing, setIsEditing] = useState(false);

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const cancelEditing = () => {
        setIsEditing(!isEditing);
        setInputValue(label);
    }

    const saveEditing = () => {
        setIsEditing(!isEditing);
        onSave(id, inputValue);
    }

    return (
        <div className="todo" >
            <label htmlFor={id}>
                <input type="checkbox" id={id} checked={completed} onChange={onChecked} />

                {
                    !isEditing
                        ? <span className={completed ? "completed" : ""}>{label}</span>
                        : <input type="text" value={inputValue} onChange={onChangeInput} />
                }

            </label>

            {
                isEditing
                    ? (
                        <div>
                            <button onClick={saveEditing}>Save</button>
                            <button onClick={cancelEditing}>Cancel</button>
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