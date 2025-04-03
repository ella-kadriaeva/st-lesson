import React, { useState } from 'react'

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
            todos && todos.map(item => (
              <div key={item.id} className="todo" >
                <div>
                  <input type="checkbox" />

                  <span className={item.completed ? "completed" : ""}>{item.label}</span>
                </div>

                <button>X</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App