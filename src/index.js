import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Layouts/App';
import { TelegramWebApp } from 'react-telegram-webapp';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './fonts/FuturaFuturis/style.css';
import SecondLayout from './Layouts/SecondLayout';
import ThirdLayout from './Layouts/ThirdLayout';
import FourthLayout from './Layouts/FourthLayout';
import FifthLayout from './Layouts/FifthLayout';


import './adaptive.css'
import Feed from './Layouts/Feed';
import Redirect from './Redirect';
import InitDataProvider from './InitDataProvider';

async function validateHash(hash) {
	const response = {
		ok: true
	};

	return response.ok;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TelegramWebApp validateHash={validateHash}>
		<InitDataProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/testreactjs" element={<Redirect />} />
					<Route path="/testreactjs/first" element={<App />} />
					<Route
						path="/testreactjs/second"
						element={<SecondLayout />}
					/>
					<Route
						path="/testreactjs/third"
						element={<ThirdLayout />}
					/>
					<Route
						path="/testreactjs/fourth"
						element={<FourthLayout />}
					/>
					<Route
						path="/testreactjs/fifth"
						element={<FifthLayout />}
					/>
					<Route path="/testreactjs/feed" element={<Feed />} />
				</Routes>
			</BrowserRouter>
		</InitDataProvider>
	</TelegramWebApp>
);
