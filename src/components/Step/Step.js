import React from 'react';
import './Step.css'

const Step = ({ current }) => {
    return ( 
        <div className={`step${current ? ' current' : ''}`}>
        </div>
    );
}
 
export default Step;