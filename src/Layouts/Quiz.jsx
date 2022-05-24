import React from 'react';
import Button from '../components/Button/Button';
import TextContainer from '../components/TextField/TextContainer';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import RoundButton from '../components/RoundButton/RoundButton';
import WheelPicker from 'react-simple-wheel-picker';
import { InitDataContext } from '../InitDataProvider';
import { BASE_URL_SURVEY, BASE_URL_SURVEY_END } from '../URL';

import './Quiz.css'

import thumbs from '../Assets/thumbs.svg'
import axios from 'axios';

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
        value: 'Не имеет значения',
		date: '3021-01-01'
    },
    {
        id: '2',
        value: '2 квартал 2022',
		date: '2022-04-01'
    },
    {
        id: '3',
        value: '3 квартал 2022',
		date: '2022-07-01'
    },
    {
        id: '4',
        value: '4 квартал 2022',
		date: '2022-10-01'
    },
    {
        id: '5',
        value: '1 квартал 2023',
		date: '2023-01-01'
    }
];

const Quiz = () => {

	const { initData } = React.useContext(InitDataContext);

    const [value, setValue] = React.useState([7, 20])

    const onValueChange = (values) => {
        if (values[0] < values[1] && values[1] - values[0] >= 10) {
            setValue(values);
        } 
    }

	const [target, setTarget] = React.useState(0)

	const handleOnChange = target => {
		console.log(target);

		const targetMap = {
			'Не имеет значения': 0,
			'2 квартал 2022': 1,
			'3 квартал 2022': 2,
			'4 квартал 2022': 3,
			'1 квартал 2023': 4
		}

        setTarget(targetMap[target.value]);
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

	const buttonClickHandler = () => {
		const postBody = {
			_auth: initData,
			rooms: String(rooms.join('')),
			price_from: value[0],
			price_to: value[1],
			delivery_date: data[target].date //в каком виде передаётся дата?
		}


		axios.post(BASE_URL_SURVEY, postBody)
			.then(res => {
				console.log('Отправил!');

				axios.post(BASE_URL_SURVEY_END, {
					_auth: initData
				}).then(res => Telegram.WebApp.close())
				/* global Telegram */
				
			})
			.catch(err => console.log(postBody));	
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
						margin: '15px 0% 15px 0%'
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
						marginTop: '10px',
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
				}}>Заселение до: <span className='white'>{data[target].value}</span></TextContainer>
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
			<Button clickHandler={buttonClickHandler} innerText={'Подобрать'} linkToPath="/react-tgwebapp-fsk/feed" />
		</div>
	);
}
 
export default Quiz;