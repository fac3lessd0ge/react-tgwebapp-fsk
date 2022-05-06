import React from 'react';
import TextContainer from './components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from './components/Button/Button';


const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    width: '50%'
}

const SecondLayout = () => {
    return (
        <StandartLayout>
            <TextContainer>
                {'Будет ли использовано ипотечное финансирование?'.toUpperCase()}
            </TextContainer>
            <div style={style}>
            <Button innerText={'Да'}linkToPath=''/>
            <Button innerText={'Нет'} linkToPath=''/>
            </div>
            
        </StandartLayout>
    );
}
 
export default SecondLayout;