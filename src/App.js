import * as React from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {
	const [message, setMessage] = React.useState('')

	const buttonClickHandler = (e) => {
		console.log(e);
		setMessage("Pressed!")
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
