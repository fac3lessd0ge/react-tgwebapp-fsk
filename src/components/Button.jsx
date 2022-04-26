import React from 'react';
import './Button.css';

const Button = ({ innerText, clickHandler}) => {
    return (
        <button onClick={clickHandler}>
            {innerText}
        </button>
    );
}
 
export default Button;