import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {

    const initTodoList = [
        {id: 1, title: "Eat", status: "new"},
        {id: 2, title: "Code", status: "completed"},
        {id: 3, title: "Sleep", status: "new"},
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx);

        //clone current array to new one
        const newTodoList = [...todoList];

        // toggle
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };

        // update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

    return (
        <div className="todoFeature">
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;