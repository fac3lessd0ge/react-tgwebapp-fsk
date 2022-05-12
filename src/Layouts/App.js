import * as React from 'react';
// import { useTelegramWebApp } from 'react-telegram-webapp';
import './App.css';
import Button from '../components/Button/Button';
import GradientEllipse from '../components/GradientEllipse/GradientEllipse';
import RoundButton from '../components/RoundButton/RoundButton';
import StepsContainer from '../components/StepsContainer/StepsContainer';
import TextContainer from '../components/TextField/TextContainer';
import axios from 'axios';
import { BASE_URL } from '../URL';

const App = () => {

	const [message, setMessage] = React.useState('')

	const [rooms, setRooms] = React.useState([])

	// const webApp = useTelegramWebApp();

	const buttonClickHandler = (e) => {
		axios.post(BASE_URL, {rooms: String(rooms.join('')), page: 1});
	}

	const roomChoiceHandler = (room, isActive) => {
		if (isActive) {
			setRooms(() => [...rooms, room])
		}
		else {
			setRooms(() => rooms.filter((element) => element !== room))
		}
	}

	return (
		<main className="App">
			<div
				className="content"
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
			>
				<TextContainer>
					СКОЛЬКО КОМНАТ ДОЛЖНО БЫТЬ В <br /> КВАРТИРЕ?
				</TextContainer>
				<div className="grid-wrapper">
					{['С', 1, 2, 3, 4, 5].map((element) => (
						<RoundButton key={element} choiceHandler={roomChoiceHandler}>{element}</RoundButton>
					))}
				</div>
				<Button
					innerText={'ВЫБРАТЬ'}
					clickHandler={buttonClickHandler}
					linkToPath={'/testreactjs/second'}
				/>
				{message}
				<StepsContainer currentIndex={0}/>
				<GradientEllipse />
			</div>
		</main>
	);
}
 
export default App;
