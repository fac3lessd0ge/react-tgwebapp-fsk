import React from 'react';
import Step from '../Step/Step';
import './StepsContainer.css'

const StepsContainer = ({ currentIndex }) => {
    return (
        <div className='step-container'>
            {[1, 2, 3, 4].map((elem, index) => {
                return <Step key={index} current={currentIndex === index}/>
            })}
        </div>
    );
}
 
export default StepsContainer;