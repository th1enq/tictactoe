import React from 'react';

const Cell = ({ value, onClick}) => {
    const valueClassName = (value === 'X') ? 'is-x' : (value === 'O') ? 'is-o' : '';
    return (
        <div className={`game-cell ${valueClassName}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;
