import React, { useEffect, useState } from 'react'
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

    const [filterLabels, setFilterLabels] = useState([
        {
            id: "1",
            label: "All",
            active: true
        },
        {
            id: "2",
            label: "Active",
            active: false
        },
        {
            id: "3",
            label: "Completed",
            active: false
        }
    ]);

    const [activeFilter, setActiveFilter] = useState("All");

    const [search, setSearch] = useState("");

    const [filteredSearchTodos, setFilteredSearchTodos] = useState([])

    const handleTodoAdd = (e) => {
        if (e.keyCode === 13) {
            let label = e.target.value;

            setTodos([...todos, { id: uuidv4(), label, completed: false }]);

            e.target.value = "";

            setSearch("")
        }
    }

    const handleTodoRemove = (todoId) => {
        let filteredTodos = todos.filter(todo => todo.id !== todoId);

        setTodos(filteredTodos)
    }

    const handleChangeChecked = (todoId) => {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
    }

    const handleSaveLabel = (todoId, label) => {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, label } : todo))
    }

    const onChangeFilter = (filterId) => {
        setFilterLabels(filterLabels.map(filter => ({...filter, active: filter.id === filterId })))
    }

    const handlerChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    const handleCheckedAll = (e) => {
        setTodos(todos.map(todo => ({...todo, completed: e.target.checked})))
    }

    useEffect(()=>{
        setActiveFilter(filterLabels.find(item => item.active).label)
    },[filterLabels])

    useEffect(()=>{
        setFilteredSearchTodos(todos.filter(todo => todo.label.toLowerCase().includes(search.toLowerCase())))
    },[search, todos])

    const countNotCompletedTodo = todos.filter(todo => !todo.completed).length

    let data = search.length > 0 ? filteredSearchTodos : todos;

    const filteredTodos = data.filter(todo => {
        if(activeFilter === "Active") return !todo.completed
        if(activeFilter === "Completed") return todo.completed
        return true;
    })

    return (
        <div className="todos">
            <TodoHeader 
                handleTodoAdd={handleTodoAdd} 
                handleCheckedAll={handleCheckedAll} 
                changeSearch={handlerChangeSearch}
            />
            <TodoContent
                todos={filteredTodos}
                onRemove={handleTodoRemove}
                onChecked={handleChangeChecked}
                onSave={handleSaveLabel}
            />
            <TodoFooter 
                countNotCompletedTodo={countNotCompletedTodo}
                filterLabels={filterLabels}
                onChangeFilter={onChangeFilter}
                clearCompleted={clearCompleted}
            />
        </div>
    )
}

export default Todos