import React from 'react';
import './basic.css';

const name =' 홍길동'
const isLogedIn = true
const items = ['사과', '바나나', '체리'];

function BasicCap(props) {
    return (
        <div className="container">
            <h1>안녕? {name} </h1>
            {/*삼항연산자: 조건부 렌더링*/}
            <p>{isLogedIn ? '로그인 상태입니다.' : '로그아웃 상태입니다.'}</p>
            <p style={{color:'red', fontSize:'30px'}}>스타일을 그대로 사용하기</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ul>
                {
                    // map(값, 인덱스)
                    items.map(
                        (item, index) => (
                        <li key={item}>{item}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default BasicCap;