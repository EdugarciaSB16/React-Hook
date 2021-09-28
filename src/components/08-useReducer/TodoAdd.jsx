import React from 'react';
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );

        reset()
    }

    return (
        <>
            <h4 className="text-center">Agregar Todo</h4>
            <hr />

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description} />
                <div className="d-grid gap-2">
                    <button className="btn btn-primary mt-3 " type="submit">
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};

export default TodoAdd;