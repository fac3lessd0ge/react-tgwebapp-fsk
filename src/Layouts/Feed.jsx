import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';

import { useTelegramWebApp } from 'react-telegram-webapp';

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
    const [response, setResponse] = React.useState([])

    const webApp = useTelegramWebApp();

    React.useEffect(() => {
        axios.get(BASE_URL_FEED, {
            _auth: webApp.initData
        }).then((res) => {
            const dat = res.data;
            setResponse(dat);
        })
    }, [])


    return (
        <div>
            {response.map((element, index) => {
                console.log(element);

                return <HousingCard 
                    key={index}
                    imgUrl={element[2].split('\\')[2]}
                    startMark={'не пришло из бд'}
                    classCategory={'не пришло из бд'}
                    title={element[0]}
                    metro={element[3]}
                    toMetroTime={'не пришло из бд'}
                    startingPrice={element[5]}
                />
            })}
        </div>
    );
}
 
export default Feed;