import React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from '../components/Button/Button';
import StepsContainer from '../components/StepsContainer/StepsContainer';
import { InitDataContext } from '../InitDataProvider';

import axios from 'axios';
import { BASE_URL_SURVEY } from '../URL';

import './SecondLayout.css'


const style = {
    display: 'grid',
    gridTemplateRows: '3rem 3rem',
    gap: '1rem',
    placeItems: 'center',
    marginTop: '3rem',
    width: '50%'
}

const SecondLayout = () => {

    const { initData } = React.useContext(InitDataContext);

    const clickHandlerYes = (e) => {
        axios.post(BASE_URL_SURVEY, {_auth: initData ,financing: 'yes', page: 2});
    }

    const clickHandlerNo = (e) => {
        axios.post(BASE_URL_SURVEY, {_auth: initData ,financing: 'no', page: 2});
    }

    return (
        <StandartLayout>
            <TextContainer>
                {'Будет ли использовано ипотечное финансирование?'.toUpperCase()}
            </TextContainer>
            <div style={style}>
                <Button className='medium' clickHandler={clickHandlerYes} innerText={'Да'} linkToPath='/testreactjs/third'/>
                <Button className='medium' clickHandler={clickHandlerNo} innerText={'Нет'} linkToPath='/testreactjs/third'/>
            </div>
            <StepsContainer currentIndex={1}/>
        </StandartLayout>
    );
}
 
export default SecondLayout;