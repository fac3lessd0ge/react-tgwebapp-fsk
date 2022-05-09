import React from 'react';
import './TextContainer.css';

const TextContainer = ( { children, style, className }) => {
    return (
        <div style={style} className='text-container'>
            <span className={`${className}`} style={{...style}}>
                {children}
            </span>
        </div>
    );
}
 
export default TextContainer;