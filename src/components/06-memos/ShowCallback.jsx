import React from 'react';

const ShowCallback = React.memo(({ increment }) => {

    console.log('me volvi a generar');

    return (
        <button className="btn btn-primary" onClick={ () => increment(5)}>
            Increment
        </button>
    );
});

export default ShowCallback;