import * as React from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';
import './App.css';
import Button from '../components/Button/Button';
import GradientEllipse from '../components/GradientEllipse/GradientEllipse';
import RoundButton from '../components/RoundButton/RoundButton';
import StepsContainer from '../components/StepsContainer/StepsContainer';
import TextContainer from '../components/TextField/TextContainer';
import axios from 'axios';
import { BASE_URL_SURVEY } from '../URL';

const App = () => {

	const [rooms, setRooms] = React.useState([])

	const webApp = useTelegramWebApp();

	const buttonClickHandler = (e) => {
		axios.post(BASE_URL_SURVEY, {_auth: webApp.initData ,rooms: String(rooms.join('')), page: 1});
	}

	const roomChoiceHandler = (room, isActive) => {
		if (isActive) {
			setRooms(() => [...rooms, room])
		}
		else {
			setRooms(() => rooms.filter((element) => element !== room))
		}
	}

	React.useEffect(()=> {console.log(rooms);}, [rooms])

	return (
		<main className="App">
			<div>
			{webApp.initData}
			</div>
			
			<div
				className="content"
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
				<StepsContainer currentIndex={0}/>
				<GradientEllipse />
			</div>
		</main>
	);
}
 
export default App;