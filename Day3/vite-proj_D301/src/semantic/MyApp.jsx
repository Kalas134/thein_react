import react, { useState, useRef, useEffect } from 'react';

// useState 상태 저장
// useRef 값 기억
// useEffect 렌더링 후 실행

function MyApp(props) {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <h1>MyApp1</h1>
            <p>Type in the input field:</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

export default MyApp;