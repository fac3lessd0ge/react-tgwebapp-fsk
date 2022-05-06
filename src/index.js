import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TelegramWebApp } from 'react-telegram-webapp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './fonts/FuturaFuturis/style.css';
import SecondLayout from './Secons';

async function validateHash(hash) {
	const response = {
		ok: true
	};

	return response.ok;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TelegramWebApp validateHash={validateHash}>
		<BrowserRouter>
			<Routes>
				<Route path="/testreactjs/" element={<App />} />
				<Route path='/testreactjs/second' element={ <SecondLayout /> } />
			</Routes>
		</BrowserRouter>
	</TelegramWebApp>
);
