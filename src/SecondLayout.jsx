import React from 'react';
import TextContainer from './components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from './components/Button/Button';


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
            <Button innerText={'Да'}linkToPath='/testreactjs/third'/>
            <Button innerText={'Нет'} linkToPath='/testreactjs/third'/>
            </div>
            
        </StandartLayout>
    );
}
 
export default SecondLayout;