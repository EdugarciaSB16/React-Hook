import React from 'react';
import useCounter from '../../hooks/useCounter';

const CounterCustomHook = () => {

    const {state, increment, descrement, reset} = useCounter(100)

    return (
        <>
            <h1>Counter with hooks: {state}</h1>
            <hr />

            <button onClick={ () => increment(2)} className="btn btn-primary"> +1</button>   
            <button onClick={ () => descrement(2)} className="btn btn-primary"> -1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
        </>
    );
};

export default CounterCustomHook;