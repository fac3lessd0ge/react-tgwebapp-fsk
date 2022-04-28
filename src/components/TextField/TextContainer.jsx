import React from 'react';
import './TextContainer.css';

const TextContainer = ( { children, fontSize = '1.8rem' }) => {
    return (
        <div className='text-container'>
            <span style={{ fontSize: fontSize }}>
                {children}
            </span>
        </div>
    );
}
 
export default TextContainer;