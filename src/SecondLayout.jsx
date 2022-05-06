import React from 'react';
import TextContainer from './components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from './components/Button/Button';
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
    return (
        <StandartLayout>
            <TextContainer>
                {'Будет ли использовано ипотечное финансирование?'.toUpperCase()}
            </TextContainer>
            <div style={style}>
            <Button className='medium' innerText={'Да'} linkToPath='/testreactjs/third'/>
            <Button className='medium' innerText={'Нет'} linkToPath='/testreactjs/third'/>
            </div>
            
        </StandartLayout>
    );
}
 
export default SecondLayout;