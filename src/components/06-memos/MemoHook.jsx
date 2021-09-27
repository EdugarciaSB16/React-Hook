import React, { useState } from 'react';
import { useMemo } from 'react';
import { procesoPesado } from '../../helpers/helperProcesoMemo';
import useCounter from '../../hooks/useCounter';

const MemoHook = () => {

    const { counter, increment } = useCounter(500)
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter, ])

    return (
        <div>
            <h1>MemoHook: <small>Counter: { counter }</small></h1>

            <p>{ memoProcesoPesado }</p>

            <button onClick={increment} className="btn btn-primary">
                +1
            </button>

            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    );
};

export default MemoHook;