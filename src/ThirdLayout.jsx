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

const ThirdLayout = () => {
    return (
        <StandartLayout>
            <TextContainer>
                {'В каком ценовом диапазоне вы ищете квартиру?'.toUpperCase()}
            </TextContainer>
            <Button innerText={'Подтвердить'} linkToPath=''/>
            
        </StandartLayout>
    );
}
 
export default ThirdLayout;