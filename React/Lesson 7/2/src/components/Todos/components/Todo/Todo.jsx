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

    const saveEditingEnter = (e) => {
       if(e.keyCode === 13){
            setIsEditing(!isEditing);
            onSave(id, inputValue);
       }
    }

    return (
        <div className="todo" >
            <label htmlFor={id}>
                <input type="checkbox" id={id} checked={completed} onChange={onChecked} />

                {
                    !isEditing
                        ? <span className={completed ? "completed" : ""}>{label}</span>
                        : <input type="text" value={inputValue} onChange={onChangeInput} onKeyUp={saveEditingEnter} className='todo-input'/>
                }

            </label>

            {
                isEditing
                    ? (
                        <div className='todo-actions'>
                            <button className='btn' onClick={saveEditing}>Save</button>
                            <button className='btn' onClick={cancelEditing}>Cancel</button>
                        </div>
                    )
                    : (
                        <div className='todo-actions'>
                            <button className='btn' onClick={() => setIsEditing(!isEditing)}>Edit</button>
                            <button className='btn' onClick={onRemove}>X</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Todo