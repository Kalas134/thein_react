import React from 'react';
import './basic.css';
// <Car2 brand="Ford" model="Mustang" color="red"/>

function Car2(props) {
    return (
        <div>
            <h2 className={props.color}>저는 {props.year}에 출고된 {props.color} 색상의 {props.model}모델이고 브랜드는 {props.brand}입니다.</h2>
            <h2> 바퀴는 {props.wheel}개로 {props.wheel == 4 ? '정상' : '비정상'} 입니다.</h2>
        </div>
    );
}

export default Car2;