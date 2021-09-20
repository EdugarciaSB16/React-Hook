import React from 'react';
import { useRef } from 'react';

const FocusScreen = () => {

    const inputRef = useRef()

    const handleChange = (e) => {
       inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Name" />

            <button
                className="btn btn-outline-primary"
                onClick={handleChange}>
                Focus
            </button>

        </div>
    );
};

export default FocusScreen;