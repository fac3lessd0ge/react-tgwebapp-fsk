import * as React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from '../components/Button/Button';
import PhoneInput from 'react-phone-number-input/input';
import StepsContainer from '../components/StepsContainer/StepsContainer';
import { InitDataContext } from '../InitDataProvider';


import axios from 'axios';
import { BASE_URL_SURVEY } from '../URL';


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

    const { initData } = React.useContext(InitDataContext);

    const [phoneNumber, setPhoneNumber] = React.useState()

    const clickHandler = (e) => {
        axios.post(BASE_URL_SURVEY, {_auth: initData ,number: String(phoneNumber), page: 5});
    } 

    return (
		<StandartLayout>
            {initData}
			<TextContainer className="adaptive">
				{'На основе ваших ответов мы подобрали несколько вариантов подходящих квартир.'.toUpperCase()}
			</TextContainer>
            <TextContainer className="adaptive" style={{margin:'6% 2% 0 2%', fontWeight: '300', letterSpacing: '0.05rem'}}>
                {'Пожалуйста, оставьте свой номер телефона, чтобы мы могли с вами связаться для конусльтации.'}
            </TextContainer>
            <PhoneInput
                
                style={inputStyle}
                placeholder='+7 (___)-___-__-__'
                country="RU"
                international
                withCountryCallingCode
                value={phoneNumber}
                onChange={setPhoneNumber} />
            <Button clickHandler={clickHandler} innerText={'ВЫБРАТЬ'} linkToPath="/testreactjs/feed" />
            <StepsContainer currentIndex={4}/>
		</StandartLayout>
	);
}
 
export default FifthLayout;