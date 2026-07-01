import React, { useState } from 'react';

const Button = React.memo(({ onClick, text }) => {
    alert(`Child ${text} button rendered`);
    return <button onClick={onClick}>{text}</button>;
});
// UN(없는) uesCallback: 매번 렌더링 마다 새로 렌더링 생성
function MyWithOutCallback() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick1 = () => {
        setCount1(count1 +  1);
    };
    const handleClick2 = () => {
        setCount2(count2 + 1);
    };

    alert("Parent rendered");
    return (
        <div>
            <h2>Without useCallback:</h2>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
        </div>
    );
}

export default MyWithOutCallback;