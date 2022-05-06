import React from 'react';
import TextContainer from './components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from './components/Button/Button';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import thumbs from './thumbs.svg'
import './ThirdLayout.css'


const style = {
    display: 'grid',
    gridTemplateRows: '3rem 3rem',
    gap: '1rem',
    placeItems: 'center',
    marginTop: '3rem',
    width: '50%'
}

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
    const [value, setValue] = React.useState([7, 20])

    const onValueChange = (values) => {
        setValue(values);
    }

    return (
        <StandartLayout>
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
            <Button innerText={'Подтвердить'} linkToPath=''/>
            
        </StandartLayout>
    );
}
 
export default ThirdLayout;