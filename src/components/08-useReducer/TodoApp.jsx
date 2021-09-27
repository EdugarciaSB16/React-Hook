import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}]

const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState)

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <h4 className="text-center">Lista Todo</h4>
                    <hr />
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li id={todo.id} className="list-group-item">
                                    <p>{i + 1}. {todo.desc}</p>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4 className="text-center">Agregar Todo</h4>
                    <hr />

                    <form action="">

                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off" />
                        <div class="d-grid gap-2">
                            <button className="btn btn-primary mt-3 ">
                                Add
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default TodoApp;