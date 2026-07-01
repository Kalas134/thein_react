import { useState, useEffect } from 'react';

function MyJSONPlaceHolder(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <>
        <p>여기부터 불러온 데이터</p>
            { data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
            })}
        
        <p>여기까지 불러온 데이터</p>
        </>
    );
}

export default MyJSONPlaceHolder;