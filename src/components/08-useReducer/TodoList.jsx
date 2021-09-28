import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <h4 className="text-center">Lista Todo</h4>
            <hr />
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, i) => (
                        <TodoListItem todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} i={i} key={todo.id} />
                    ))
                }
            </ul>
        </>
    );
};

export default TodoList;