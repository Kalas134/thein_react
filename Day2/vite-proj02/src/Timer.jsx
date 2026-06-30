import react, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer(props) {
    const [count, setCount] = useState(0);

    //  useEffect(() => { }); 계속 렌더링
    //  useEffect(() => { }, []); 한번만 렌더링
    
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1);
        }, 1000);
    });
    return (
        <div>
            <h1>1초 마다 {count}카운트 반영</h1>
        </div>
    );
}

export default Timer;