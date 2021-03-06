import React from 'react';
import useForm from '../../hooks/useForm';
import Message from './ClearUffect';

const FormCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormCustomHook</h1>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary">
                    Save
                </button>

                {(name === '123') && <Message />}

            </div>
        </form>
    );
};

export default FormCustomHook;