import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';

import img1 from '../fakeAPIImage1.png';
import img2 from '../fakeAPIImage2.png';

const fakeAPICall = {
    1: {
        imgUrl : img1,
        UpperCategories: {
            startMark: 'Скоро ввод',
            class: 'Бизнес-класс'
        },
        title : 'Режиссёр',
        locationDetails: {
            metro: 'ВДНХ',
            toMetroTime: '20 минут',
        },
        startingPrice : 21.6
    },
    2: {
        imgUrl : img2,
        UpperCategories: {
            startMark: 'Скоро ввод',
            class: 'Бизнес-класс'
        },
        title : 'Режиссёр',
        locationDetails: {
            metro: 'ВДНХ',
            toMetroTime: '20 минут',
        },
        startingPrice : 21.6
    },
    3: {
        imgUrl : img1,
        UpperCategories: {
            startMark: 'Скоро ввод',
            class: 'Бизнес-класс'
        },
        title : 'Режиссёр',
        locationDetails: {
            metro: 'ВДНХ',
            toMetroTime: '20 минут',
        },
        startingPrice : 21.6
    },
    4: {
        imgUrl : img1,
        UpperCategories: {
            startMark: 'Скоро ввод',
            class: 'Бизнес-класс'
        },
        title : 'Режиссёр',
        locationDetails: {
            metro: 'ВДНХ',
            toMetroTime: '20 минут',
        },
        startingPrice : 21.6
    }
}

const Feed = () => {



    return (
        <div>
            {Object.keys(fakeAPICall).map((element, index) => { 
                const info = fakeAPICall[Number(element)];
                console.log(info.imgUrl);

                return <HousingCard 
                    key={index}
                    imgUrl={info.imgUrl}
                    startMark={info.UpperCategories.startMark}
                    classCategory={info.UpperCategories.class}
                    title={info.title}
                    metro={info.locationDetails.metro}
                    toMetroTime={info.locationDetails.toMetroTime}
                    startingPrice={info.startingPrice}
                />
            })}
        </div>
    );
}
 
export default Feed;