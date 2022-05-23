import React from 'react';
import {ReactComponent as Telephone} from '../../Assets/Telephone.svg';
import './TelephoneButton.css'

const TelephoneButton = () => {
    return (
        <div className='telephone-button'>
            <Telephone />
        </div>
    );
}
 
export default TelephoneButton;