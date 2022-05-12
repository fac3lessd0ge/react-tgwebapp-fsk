import React from 'react';
import './BorderButton.css';



const BorderButton = ({className, style, children, clickHandler}) => {

    return (
        <button onClick={clickHandler} style={style} className={className}>
            <span style={{fontSize:'1.1rem'}}>{children}</span>
        </button>
    );
}
 
export default BorderButton;