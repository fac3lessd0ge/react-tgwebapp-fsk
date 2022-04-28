import * as React from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';
import './App.css';
import Button from './components/Button';
import { TelegramWebApp } from 'react-telegram-webapp';
import GradientEllipse from './components/GradientEllipse/GradientEllipse';

const App = () => {
	const [message, setMessage] = React.useState('')

	const webApp = useTelegramWebApp();

	const buttonClickHandler = (e) => {
		console.log(webApp);
		webApp.sendData(message);
	}

	return ( 
		<main className='App'>
			<div className='content' value={message} onChange={(e) => {setMessage(e.target.value)} }>
				<input placeholder='Введите имя' />
				<Button innerText={'Press me!'} clickHandler={buttonClickHandler}/>
				{message}
				<GradientEllipse />
			</div>
		</main>
	);
}
 
export default App;
