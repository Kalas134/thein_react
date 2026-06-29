import React from 'react';
import './section.css'

// color="red"
function Car1(props) {
    return (
        <div>
            <h2 class={props.color}>나는 {props.color} 스포츠카</h2>
        </div>
    );
}

export default Car1;