import React from 'react';
import Car from "./Car"
import Car2 from './Car2';

let x = 4

function Garage(props) {
    return (
        <div>
            <p>나는 차고</p>

            <Car brand="Ford"/>
            <Car brand="BMW"/>
            <Car brand="르노"/>
            <Car brand="기아"/>
            <br/>
            <Car2 wheel={3} year={1999} brand="Ford" model="Mustang" color="red"/>
            <Car2 wheel={x} year={1999} brand="BMW" model="B222" color="yellow"/>
            <Car2 wheel={x} year={1998} brand="BMW" model="B222" color="lime"/>
            <Car2 wheel={x} year={1998} brand="BMW" model="B222" color="skyblue"/>
        </div>
    );
}

export default Garage;