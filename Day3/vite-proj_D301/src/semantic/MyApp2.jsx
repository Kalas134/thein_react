import React, {useRef} from 'react';

function MyApp2() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };
    
    return (
        <>
            <h1>MyApp2</h1>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default MyApp2;