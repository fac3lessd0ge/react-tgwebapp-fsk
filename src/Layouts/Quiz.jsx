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
    content: '"(мил.)"',
	fontSize: '15px'
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
		value: 'Сдан',
		date: ''
	},
	{
		id: '3',
		value: '4 квартал 2022',
		date: '2022-10-01'
	},
	{
		id: '4',
		value: '2 квартал 2023',
		date: '2023-04-01'
	},
	{
		id: '5',
		value: '4 квартал 2023',
		date: '2023-10-01'
	},
    {
        id: '6',
        value: '2 квартал 2024',
		date: '2024-04-01'
    },
    {
        id: '7',
        value: '3 квартал 2024',
		date: '2024-07-01'
    },
	{
        id: '8',
        value: '2025 год',
		date: '2025-01-01'
    },
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
			'Сдан': 1,
			'4 квартал 2022': 2,
			'2 квартал 2023': 3,
			'4 квартал 2023': 4,
			'2 квартал 2024': 5,
			'3 квартал 2024': 6,
			'2025 год': 7
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
					paddingTop: '20px',
					letterSpacing: '0.1rem'
				}}
			>
				ФИЛЬТРОВАТЬ
			</TextContainer>
			<div
				style={{height: '202px', marginTop: '40px', display: 'grid', placeItems: 'center', gridTemplateRows: '70px 100px', gap: '0'}}
				className="quiz-element quiz-price-wrapper"
			>
				<TextContainer
					style={{
						fontSize: '24px',
						color: '#727272',
						fontWeight: '300',
						letterSpacing: '0',
						margin: '40px 0% 15px 0%'
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
				<span className="minmax left">{'5 (мл.)'}</span>
				<span className="minmax right">{'80 (мл.)'}</span>
			</div>
			<div
				style={{ height: '279px', gap: '32px' }}
				className="quiz-element quiz-rooms-wrapper"
			>
				<TextContainer
					style={{
						fontSize: '24px',
						color: '#727272',
						fontWeight: '300',
						marginTop: '30px',
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
				}}>Заселение до: <span style={{letterSpacing: '0'}} className='white'>{data[target].value}</span></TextContainer>
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
			<Button style={{fontSize: '18px', width: '240px'}} clickHandler={buttonClickHandler} innerText={'ПОДОБРАТЬ'} linkToPath="/react-tgwebapp-fsk/quiz/" />
		</div>
	);
}
 
export default Quiz;