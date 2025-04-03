import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoContent from './components/TodoContent/TodoContent';
import TodoFooter from './components/TodoFooter/TodoFooter';

const Todos = () => {
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

    const handleTodoAdd = (e) => {
        if (e.keyCode === 13) {
            let label = e.target.value;

            setTodos([...todos, { id: uuidv4(), label, completed: false }]);

            e.target.value = "";
        }
    }

    const handleTodoRemove = (todoId) => {
        let filteredTodos = todos.filter(todo => todo.id !== todoId);

        setTodos(filteredTodos)
    }

    return (
        <div className="todos">
            <TodoHeader handleTodoAdd={handleTodoAdd} />
            <TodoContent 
                todos={todos}
                onRemove={handleTodoRemove}
            />
            <TodoFooter />
        </div>
    )
}

export default Todos