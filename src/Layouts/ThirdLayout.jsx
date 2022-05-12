import React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import { useTelegramWebApp } from 'react-telegram-webapp';
import StandartLayout from './StandartLayout';
import Button from '../components/Button/Button';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import StepsContainer from '../components/StepsContainer/StepsContainer';

import axios from 'axios';
import { BASE_URL_SURVEY } from '../URL';

import thumbs from '../thumbs.svg'
import './ThirdLayout.css'


// const style = {
//     display: 'grid',
//     gridTemplateRows: '3rem 3rem',
//     gap: '1rem',
//     placeItems: 'center',
//     marginTop: '3rem',
//     width: '50%'
// }

const thumbStyle = {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    backgroundImage: `url(${thumbs})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const labelStyle = {
    backgroundColor: '#14141400'
}

const labelTextStyle = {
    content: '"(мил.)"'
}

const inputStyle = {
    width: '50vw',
    height: '2px'
}

const ThirdLayout = () => {
    const webApp = useTelegramWebApp();

    const [value, setValue] = React.useState([7, 20])

    const onValueChange = (values) => {
        if (values[0] < values[1]) {
            setValue(values);
        } 
    }

    const clickHandler = (e) => {
        axios.post(BASE_URL_SURVEY, {_auth: webApp.initData ,price_from: value[0], price_to: value[1], page: 3});
    }

    return (
        <StandartLayout>
            {webApp.initData}
            <TextContainer style={{marginBottom: '6vh'}}>
                {'В каком ценовом диапазоне вы ищете квартиру?'.toUpperCase()}
            </TextContainer>
            <TextContainer style={{marginBottom: '6vh', color: '#727272', fontWeight: '300', letterSpacing: '0.05rem'}}>
                {'Выберите ценовую категорию'}
            </TextContainer>
            <br/>
            <TwoThumbInputRange
                className='range' 
                onChange={onValueChange}
                values={value}
                min={0}
                max={30}
                railColor='#727272'
                trackColor='#E84E0E'
                thumbColor='#E84E0E'
                showLabels={true}
                thumbStyle={thumbStyle}
                inputStyle={inputStyle}
                labelStyle={labelStyle}
                labelTextStyle={labelTextStyle}
            />
            <br/>
            <Button clickHandler={clickHandler} innerText={'Подтвердить'} linkToPath='/testreactjs/fourth'/>
            <StepsContainer currentIndex={2}/>
        </StandartLayout>
    );
}
 
export default ThirdLayout;