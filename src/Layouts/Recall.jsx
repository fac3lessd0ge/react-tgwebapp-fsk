import React from 'react';
import Button from '../components/Button/Button';
import PhoneInput from 'react-phone-number-input/input';

const inputStyle = {
    marginTop: '1.5rem',
    outline: 'none',
    width: '50vw',
    maxWidth: '300px',
    height: '50px',
	fontSize: '18px',
    paddingLeft: '0.5rem',
    backgroundColor: '#141414',
    color: '#fff',
    borderRadius: '50px',
    textAlign: 'center',
    border: '2px solid #3F3F40'

}

const Reacll = ({ phrase }) => {

	const [phoneNumber, setPhoneNumber] = React.useState();

	return (
		<div style={{ position: 'relative', backgroundColor: '#1c1c1e' }}>
			<div
				style={{
					display: 'grid',
					position: 'relative',
					height: '100vh',
					placeItems: 'center',
					backgroundColor: '#000'
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						gap: '25px'
					}}
				>
					<div style={{textAlign: 'center', maxWidth: '90%'}}>
						<span>Оставьте ваш номер телефона </span>
						<span style={{
							fontWeight: '300',

						}}> и { phrase }</span>
					</div>

					<PhoneInput
						style={inputStyle}
						placeholder="+7 (___)-___-__-__"
						country="RU"
						international
						withCountryCallingCode
						value={phoneNumber}
						onChange={setPhoneNumber}
					/>

					<div>
						<Button linkToPath={''} innerText="Отправить" />
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Reacll;