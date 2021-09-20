import React, { useLayoutEffect, useRef} from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './LayoutEffect.css'

const UseLayoutEffect = () => {

    const { counter, increment } = useCounter()
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { quote } = !!data && data[0]
    const pTag = useRef()

    useLayoutEffect( () => {
        //Sacar dimensiones del <p></p>
        pTag.current.getBoundingClientRect()

    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p className="mb-4" ref={pTag}> {quote} </p>
            </blockquote>
            <button
                className="btn btn-primary  text-end"
                onClick={increment}>
                Next quote
            </button>
        </div>
    );
};

export default UseLayoutEffect;