import * as React from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';
import './App.css';
import Button from '../components/Button/Button';
import GradientEllipse from '../components/GradientEllipse/GradientEllipse';
import RoundButton from '../components/RoundButton/RoundButton';
import StepsContainer from '../components/StepsContainer/StepsContainer';
import TextContainer from '../components/TextField/TextContainer';
import axios from 'axios';

const App = () => {

	async function postData(url = '', data = {}) {
		// Default options are marked with *
		const response = await fetch(url, {
		  method: 'POST', // *GET, POST, PUT, DELETE, etc.
		  mode: 'cors', // no-cors, *cors, same-origin // *default, no-cache, reload, force-cache, only-if-cached
		  credentials: 'same-origin', // include, *same-origin, omit
		  headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		  },
		  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		  body: JSON.stringify(data) // body data type must match "Content-Type" header
		});
		return response.json(); // parses JSON response into native JavaScript objects
	}

	const [message, setMessage] = React.useState('')

	const [rooms, setRooms] = React.useState([])

	const webApp = useTelegramWebApp();

	const buttonClickHandler = (e) => {
		console.log(webApp);
		axios.post('https://88a7-128-68-33-16.ngrok.io/api/survey', {rooms: rooms});
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
