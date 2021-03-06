import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHook = () => {

    const { counter, increment } = useCounter()
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (

                        <blockquote className="blockquote text-end">
                            <p className="mb-4"> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>
                            <button
                                className="btn btn-primary  text-end"
                                onClick={ increment }>
                                Next quote
                            </button>
                        </blockquote>
                    )
            }
        </div>
    );
};

export default MultipleCustomHook;