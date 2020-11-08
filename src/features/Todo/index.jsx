import React from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {

    const todoList = [
        {id: 1, title: "Eat"},
        {id: 2, title: "Code"},
        {id: 3, title: "Sleep"}
    ]

    return (
        <div className="todoFeature">
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;