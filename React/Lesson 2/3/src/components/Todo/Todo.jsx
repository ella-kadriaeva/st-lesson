import React from 'react'

const Todo = ({title, completed}) => {
  return (
    <li className={completed ? "completed" : ""}>{title}</li>
  )
}

export default Todo