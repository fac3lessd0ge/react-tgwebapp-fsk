import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ innerText, clickHandler, linkToPath, className, style }) => {
    return (
        <Link style={{display:'block', marginBottom:'2.5rem'}} to={linkToPath}>
            <button style={style} className={className} onClick={clickHandler}>
                {innerText}
            </button>
        </Link>
        
    );
}
 
export default Button;