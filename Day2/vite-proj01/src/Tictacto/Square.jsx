import React from 'react';

function Square({ value, onSquareClick }) {
    return (
        <>
            <div className='board-row'>
                <button className='square'></button>
                <button className='square'></button>
                <button className='square'></button>
            </div>
            <div>
                <button className='square'></button>
                <button className='square'></button>
                <button className='square'></button>
            </div>
            <div>
                <button className='square'></button>
                <button className='square'></button>
                <button className='square'></button>
            </div>
        </>
    );

}

export default Square;