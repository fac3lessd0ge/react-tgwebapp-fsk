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
import Quiz from './Layouts/Quiz';
import PhonePage from './PhonePage';

async function validateHash(hash) {
	const response = {
		ok: true
	};

	return response.ok;
}
/*global Telegram*/
const initData = Telegram.WebApp.initData;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TelegramWebApp validateHash={validateHash}>
		<InitDataProvider initialValue={initData}>
			<BrowserRouter>
				<Routes>
					<Route path="/testreactjs" element={<Redirect />} />
					<Route path='/testreactjs/quiz' element={<Quiz />} />
					<Route path="/testreactjs/feed" element={<Feed />} />
					<Route path="/testreactjs/phone" element={<PhonePage />} />
					{/* <Route path="/testreactjs/first" element={<App />} /> */}
					{/* <Route
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
					/> */}
				</Routes>
			</BrowserRouter>
		</InitDataProvider>
	</TelegramWebApp>
);
