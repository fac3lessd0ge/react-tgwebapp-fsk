import React from 'react';
import { ReactComponent as Stand } from '../../stand4el.svg';

import './HousingCard.css'

const HousingCard = ({ 
    imgUrl,
    startMark,
    classCategory,
    title,
    metro,
    toMetroTime,
    startingPrice
}) => {
    return (
        <div className='wrapper-card'>
            <div className='upper-categories'>
                <div className='category orange'>
                    {startMark}
                </div>
                <div className='category grey'>
                    {classCategory}
                </div>
            </div>
            <div className='center-img'>
                <img alt='Дом' src={imgUrl}></img>
            </div>
            <div className='lower-info'>
                <div className='title'>{title}</div>
                <div className='location-info'>
                    <div className='metro-info'>
                        <div className='metro-icon'></div>
                        <div className='metro'>
                            {metro}
                        </div>
                    </div>

                    <div className='walk-info'>
                        <Stand />
                        <div className='metro-walk'>
                            {toMetroTime}
                        </div>
                    </div>
                    
                </div>
                <div className='price'>{"От " + String(startingPrice) + " млн.руб."}</div>
            </div>
        </div>
    );
}
 
export default HousingCard;