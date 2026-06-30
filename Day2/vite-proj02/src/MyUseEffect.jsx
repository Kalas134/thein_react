import React, {useState, useEffect} from 'react';

    //  useEffect(() => { }); 계속 렌더링
    //  useEffect(() => { }, []); 한번만 렌더링
    // cnt 업데이트 되면 rendering
    // useEffect(() => { }, [cnt]);

function MyUseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    );
}

export default MyUseEffect;