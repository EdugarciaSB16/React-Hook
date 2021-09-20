import React, { useState } from 'react';
import MultipleCustomHook from '../03-exampleHooks/MultipleCustomHook'

const ExampleUseRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1 style={{ color: 'blue' }}>UseRef</h1>
            <hr />

            {
                show && <MultipleCustomHook />
            }

            <button
                className="btn btn-outline-secondary mt5"
                onClick={() => { setShow(!show) }}>
                Show / Hide
            </button>

        </div>
    );
};

export default ExampleUseRef;