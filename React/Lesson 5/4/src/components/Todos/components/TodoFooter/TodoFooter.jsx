import React from 'react'
import "./TodoFooter.scss"

const TodoFooter = ({countNotCompletedTodo}) => {
  return (
    <footer className='footer'>
        <p>{countNotCompletedTodo} items left!</p>
    </footer>
  )
}

export default TodoFooter