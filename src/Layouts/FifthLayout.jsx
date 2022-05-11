import React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from '../components/Button/Button';
import PhoneInput from 'react-phone-number-input/input';
import StepsContainer from '../components/StepsContainer/StepsContainer';


// const style = {
//     marginBottom: '3rem'
// }

const inputStyle = {
    marginTop: '1.5rem',
    outline: 'none',
    width: '50vw',
    maxWidth: '300px',
    height: '2rem',
    paddingLeft: '0.5rem',
    backgroundColor: '#141414',
    color: '#fff',
    borderRadius: '50px',
    textAlign: 'center',
    border: '1px solid #3F3F40'

}

const FifthLayout = () => {

    const [phoneNumber, setPhoneNumber] = React.useState()

    return (
		<StandartLayout>
			<TextContainer className="adaptive">
				{'На основе ваших ответов мы подобрали несколько вариантов подходящих квартир.'.toUpperCase()}
			</TextContainer>
            <TextContainer className="adaptive" style={{margin:'6% 2% 0 2%', fontWeight: '300', letterSpacing: '0.05rem'}}>
                {'Пожалуйста, оставьте свой номер телефона, чтобы мы могли с вами связаться для конусльтации.'}
            </TextContainer>
            <PhoneInput
                style={inputStyle}
                placeHolder='+7 (___)-___-__-__'
                country="RU"
                international
                withCountryCallingCode
                value={phoneNumber}
                onChange={setPhoneNumber} />
            <Button innerText={'ВЫБРАТЬ'} linkToPath="/testreactjs/feed" />
            <StepsContainer currentIndex={4}/>
		</StandartLayout>
	);
}
 
export default FifthLayout;