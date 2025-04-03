import React, { useState } from 'react'
import Todo from './components/Todo/Todo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      label: "Lorem, ipsum dolor.",
      completed: false
    },
    {
      id: "2",
      label: "Lorem ipsum dolor sit.",
      completed: true
    },
    {
      id: "3",
      label: "Lorem ipsum dolor sit.",
      completed: false
    },
    {
      id: "4",
      label: "Lorem ipsum dolor sit.",
      completed: true
    }
  ]);

  return (
    <div className='container'>
      <h2 className='title'>todos</h2>
      <div className="todos">
        <div className="todos-header">
          <input type="text" placeholder='What needs to be done?'/>
        </div>

        <div className="todos-content">
          {
            todos && todos.map(item => <Todo 
              key={item.id} 
              completed={item.completed} 
              label={item.label} 
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default App