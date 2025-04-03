import React from 'react'
import "./TodoFooter.scss"

const TodoFooter = ({ countNotCompletedTodo, filterLabels, onChangeFilter }) => {
  return (
    <footer className='footer'>
      <p>{countNotCompletedTodo} items left!</p>

      <div className='filters'>
        <ul>
          {
            filterLabels && filterLabels.map(filter => (
              <li
                key={filter.id}
                className={filter.active ? "active" : ""}
                onClick={() => onChangeFilter(filter.id)}>{filter.label}</li>
            ))
          }
        </ul>
      </div>
    </footer>
  )
}

export default TodoFooter