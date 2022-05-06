import React from 'react';
import TextContainer from './components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from './components/Button/Button';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import thumbs from './thumbs.svg'


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
            <TextContainer>
                {'В каком ценовом диапазоне вы ищете квартиру?'.toUpperCase()}
            </TextContainer>
            <br/>
            <div 
                style={
                    {
                        width: '50%',
                        height: '10rem',
                        background: 'url(thumbs.svg)'
                    }
                }
            >

            </div>
            <TwoThumbInputRange 
                onChange={onValueChange}
                values={value}
                min={0}
                max={50}
                railColor='#727272'
                trackColor='#E84E0E'
                thumbColor='#E84E0E'
                showLabels={true}
                thumbStyle={thumbStyle}
                inputStyle={inputStyle}
                labelStyle={labelStyle}
            />
            <br/>
            <Button innerText={'Подтвердить'} linkToPath=''/>
            
        </StandartLayout>
    );
}
 
export default ThirdLayout;