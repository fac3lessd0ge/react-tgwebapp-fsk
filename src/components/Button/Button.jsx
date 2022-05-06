import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ innerText, clickHandler, linkToPath }) => {
    return (
        <Link to={linkToPath}>
            <button onClick={clickHandler}>
                {innerText}
            </button>
        </Link>
        
    );
}
 
export default Button;