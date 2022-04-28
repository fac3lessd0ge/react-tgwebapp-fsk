import * as React from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';
import './App.css';
import Button from './components/Button';
import GradientEllipse from './components/GradientEllipse/GradientEllipse';
import RoundButton from './components/RoundButton/RoundButton';
import TextContainer from './components/TextField/TextContainer';

const App = () => {
	const [message, setMessage] = React.useState('')

	const webApp = useTelegramWebApp();

	const buttonClickHandler = (e) => {
		console.log(webApp);
		webApp.sendData(message);
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
						<RoundButton>{element}</RoundButton>
					))}
				</div>
				<Button
					innerText={'ВЫБРАТЬ'}
					clickHandler={buttonClickHandler}
				/>
				{message}
				<GradientEllipse />
			</div>
		</main>
	);
}
 
export default App;
