import * as React from 'react';
import { useTelegramWebApp } from 'react-telegram-webapp';
import './App.css';
import Button from './components/Button';
import { TelegramWebApp } from 'react-telegram-webapp';

const App = () => {
	const [message, setMessage] = React.useState('')

	const webApp = useTelegramWebApp();

	const buttonClickHandler = (e) => {
		console.log(webApp);
		setMessage(webApp.isExpanded.toString())
	}

	return ( 
		<main className='App'>
			<div className='content'>
				<Button innerText={'Press me!'} clickHandler={buttonClickHandler}/>
				{message}
			</div>
		</main>
	);
}
 
export default App;
