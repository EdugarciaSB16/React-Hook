import React from 'react';

const Small = React.memo(({ value }) => {
    console.log('mevolviallama')
    return (
       <small> { value }</small>
    );
});

export default Small;