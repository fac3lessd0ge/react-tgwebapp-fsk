import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Layouts/App';
import { TelegramWebApp } from 'react-telegram-webapp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './fonts/FuturaFuturis/style.css';
import SecondLayout from './Layouts/SecondLayout';
import ThirdLayout from './Layouts/ThirdLayout';
import FourthLayout from './Layouts/FourthLayout';
import FifthLayout from './Layouts/FifthLayout';
import './adaptive.css'
import Feed from './Layouts/Feed';

async function validateHash(hash) {
	const response = {
		ok: true
	};

	return response.ok;
}

const loggedIn = { page : 4 } // [0, 1, 2, 3, 4, 5]

const linksTo = {
	1: '/testreactjs/', 
	2: '/testreactjs/second',
	3: '/testreactjs/third',
	4: '/testreactjs/fourth',
	5: '/testreactjs/fifth'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TelegramWebApp validateHash={validateHash}>
		<BrowserRouter>
			<Routes>
				<Route 
					exact 
					path="/testreactjs/" 
					element={loggedIn.page ? <Navigate replace to={linksTo[loggedIn.page]}/> : <App />} 
				/>
				<Route path='/testreactjs/second' element={ <SecondLayout /> } />
				<Route path='/testreactjs/third' element={<ThirdLayout />} />
				<Route path='/testreactjs/fourth' element={<FourthLayout />} />
				<Route path='/testreactjs/fifth' element={<FifthLayout />} />
				<Route path='/testreactjs/feed' element={<Feed />} />
			</Routes>
		</BrowserRouter>
	</TelegramWebApp>
);
