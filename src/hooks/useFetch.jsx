import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        fetch( url )
            .then( res => res.json())
            .then( data => {
                setState({
                    loading:false,
                    error: null,
                    data
                })
            })
    }, [url])

    console.log(state)

    return state

};

export default useFetch;