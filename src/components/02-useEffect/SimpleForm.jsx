import React, { useState, useEffect } from 'react';
import Message from './ClearUffect';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const {name, email} = formState

    useEffect(() => {
        console.log('Cambio el name')
    }, [name])
    
    useEffect(() => {
        console.log('Cambio el email')
    }, [email])

    const handleChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }

    return (
        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                autoComplete='off'
                value={name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleChange}
            />

            { (name === '123') && <Message/>}

        </div>
    );
};

export default SimpleForm;