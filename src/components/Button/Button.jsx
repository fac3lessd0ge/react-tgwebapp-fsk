import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ innerText, clickHandler, linkToPath, className }) => {
    return (
        <Link style={{display:'block', marginBottom:'2.5rem'}} to={linkToPath}>
            <button className={className} onClick={clickHandler}>
                {innerText}
            </button>
        </Link>
        
    );
}
 
export default Button;