import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {

    const initTodoList = [
        {id: 1, title: "Eat", status: "new"},
        {id: 2, title: "Code", status: "completed"},
        {id: 3, title: "Sleep", status: "new"},
    ]

    const [todoList, setTodoList] = useState(initTodoList)

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

    return (
        <div className="todoFeature">
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;