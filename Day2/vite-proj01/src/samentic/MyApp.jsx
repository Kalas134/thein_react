import React, { useState } from 'react';
import MyButton from './MyButton';

function MyApp(props) {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>컴퍼넌트</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    );
}

export default MyApp;