import React from 'react';
import './TextContainer.css';

const TextContainer = ( { children, fontSize = '1.8rem', style }) => {
    return (
        <div style={style} className='text-container'>
            <span style={{...style, fontSize: fontSize }}>
                {children}
            </span>
        </div>
    );
}
 
export default TextContainer;