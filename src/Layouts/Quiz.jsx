import React from 'react';
import Button from '../components/Button/Button';
import TextContainer from '../components/TextField/TextContainer';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import RoundButton from '../components/RoundButton/RoundButton';
import WheelPicker from 'react-simple-wheel-picker';

import './Quiz.css'

import thumbs from '../thumbs.svg'

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
    width: '80vw',
    height: '2px'
}


const data = [
    {
        id: '1',
        value: 'Не имеет значения'
    },
    {
        id: '2',
        value: '2 квартал 2022'
    },
    {
        id: '3',
        value: '3 квартал 2022'
    },
    {
        id: '4',
        value: '4 квартал 2022'
    },
    {
        id: '5',
        value: '1 квартал 2023'
    }
];

const Quiz = () => {

    const [value, setValue] = React.useState([7, 20])

    const onValueChange = (values) => {
        if (values[0] < values[1] && values[1] - values[0] >= 10) {
            setValue(values);
        } 
    }

	const [target, setTarget] = React.useState(data[0])

	const handleOnChange = target => {
        setTarget(target);
    };

	const [rooms, setRooms] = React.useState([])

	const roomChoiceHandler = (room, isActive) => {
		if (isActive) {
			setRooms(() => [...rooms, room])
		}
		else {
			setRooms(() => rooms.filter((element) => element !== room))
		}
	}

    return (
		<div className="quiz-wrapper">
			<TextContainer
				style={{
					color: '#fff',
					fontSize: '30px',
					margin: '0',
					paddingTop: '20px'
				}}
			>
				ВАШИ ПРЕДПОЧТЕНИЯ
			</TextContainer>
			<div
				style={{marginTop: '40px' }}
				className="quiz-element quiz-price-wrapper"
			>
				<TextContainer
					style={{
						fontSize: '24px',
						color: '#727272',
						fontWeight: '300',
						letterSpacing: '0',
						margin: '5% 0% 5% 0%'
					}}
				>
					Стоимость недвижимости:
				</TextContainer>
				<TwoThumbInputRange
					className="range"
					onChange={onValueChange}
					values={value}
					min={5}
					max={80}
					railColor="#727272"
					trackColor="#E84E0E"
					thumbColor="#E84E0E"
					showLabels={true}
					thumbStyle={thumbStyle}
					inputStyle={inputStyle}
					labelStyle={labelStyle}
					labelTextStyle={labelTextStyle}
				/>
			</div>
			<div
				style={{ height: '250px', gap: '40px' }}
				className="quiz-element quiz-rooms-wrapper"
			>
				<TextContainer
					style={{
						fontSize: '24px',
						color: '#727272',
						fontWeight: '300',
						marginTop: '5%',
						letterSpacing: '0'
					}}
				>
					Кол-во комнат:
				</TextContainer>
				<div className="grid-wrapper">
					{['C', 1, 2, 3, 4, 5].map((element) => (
						<RoundButton
							key={element}
							choiceHandler={roomChoiceHandler}
						>
							{element}
						</RoundButton>
					))}
				</div>
			</div>
			<div
				style={{ height: '200px', gap: '10px' }}
				className="quiz-element quiz-date-wrapper"
			>
				<TextContainer style={{
					fontSize: '22px',
					color: '#727272',
					fontWeight: '300',
					marginTop: '5%',
					letterSpacing: '0'
				}}>Заселение до: <span className='white'>{target.value}</span></TextContainer>
				<div style={{height: '100px', fontSize: '20px', margin: 'auto'}}>
					<WheelPicker
						data={data}
						onChange={handleOnChange}
						height={100}
						width={220}
						titleText="Заселение до"
						itemHeight={30}
						selectedID={data[0].id}
						color="#727272"
						activeColor="#E84E0E"
						backgroundColor="#1C1C1E"
						shadowColor="#"
						required={false}
					/>
				</div>
			</div>
			<Button innerText={'Подобрать'} linkToPath="/testreactjs/feed" />
		</div>
	);
}
 
export default Quiz;