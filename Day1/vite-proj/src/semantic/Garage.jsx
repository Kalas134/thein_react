import React from 'react';
import { createRoot } from 'react-dom/client';

function Car() {
    return (
        <h2>저는 차입니다</h2>
    );
}

function Garage(props) {
    return (
        <div>
            <h2>어떤 차가 있나요?</h2>
            <Car/>
        </div>
    );
}


export default Garage;