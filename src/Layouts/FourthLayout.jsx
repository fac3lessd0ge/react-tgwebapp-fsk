import React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import { useTelegramWebApp } from 'react-telegram-webapp';
import StandartLayout from './StandartLayout';
import Button from '../components/Button/Button';
import './SecondLayout.css'
import BorderButton from '../components/BorderButton/BorderButton';
import StepsContainer from '../components/StepsContainer/StepsContainer';

import axios from 'axios';
import { BASE_URL_SURVEY } from '../URL';


import './FourthLayout.css';


const style = {
    display: 'grid',
    placeItems: 'center',
    marginTop: '3vh',
    marginBottom: '1vh'
}

const FourthLayout = () => {

	const webApp = useTelegramWebApp();

	const [current, setCurrent] = React.useState(1);

	const strings = [
		'ОБЪЕКТ ДОЛЖЕН БЫТЬ СДАН',
		'ОБЪЕКТ СДАЁТСЯ В ЭТОМ ГОДУ',
		'ОБЪЕКТ СДАЁТСЯ В СЛЕДУЮЩЕМ ГОДУ',
		'ОБЪЕКТ СДАЁТСЯ В ТЕЧЕНИЕ НЕСКОЛЬКИХ ЛЕТ',
		'СРОК СДАЧИ НЕ ВАЖЕН'
	]

	const clickHandlerVariant = (num) => {
		setCurrent(num)
	}

	const variants = ['already', 'current_year', 'next_year', 'some_years', 'important']

	const clickHandlerPost = (e) => {
		axios.post(BASE_URL_SURVEY, {_auth: webApp.initData ,delivery_date: variants[current], page: 4});
	}


    return (
		<StandartLayout>
			<TextContainer>
				{'вам важно, чтобы объект был уже сдан'.toUpperCase()}
			</TextContainer>
			<div className='btn-container' style={style}>
				{strings.map((element, index) => {
					return (
					<div 
						key={index} 
						className='wrp'
						onClick={(e) => {clickHandlerVariant(index)}}
					>
						<BorderButton
						key={index}
						className={current === index ? 'default chosen' : 'default'}
					>
						{element}
					</BorderButton>
					</div>
					
				)})}
			</div>
            <Button clickHandler={clickHandlerPost} innerText={'ВЫБРАТЬ'} linkToPath="/testreactjs/fifth" />
			<StepsContainer currentIndex={3}/>
		</StandartLayout>
	);
}
 
export default FourthLayout;