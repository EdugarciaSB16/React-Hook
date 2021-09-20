import React from 'react';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHook = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    console.log(state)
    return (
        <div>
            <h1>Custom Hook!!!</h1>
        </div>
    );
};

export default MultipleCustomHook;