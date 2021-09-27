import React, { useState } from 'react';
import { useCallback } from 'react';
import ShowCallback from './ShowCallback';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [ setCounter ])

    return (
        <div>
            <h1>UseCallBack Hook: {counter}</h1>
            <hr />

            <ShowCallback increment={increment}/>
        </div>
    );
};

export default CallbackHook;