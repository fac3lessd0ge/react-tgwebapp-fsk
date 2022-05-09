import React from 'react';
import TextContainer from './components/TextField/TextContainer';
import StandartLayout from './StandartLayout';
import Button from './components/Button/Button';
import './SecondLayout.css'
import BorderButton from './components/BorderButton/BorderButton';
import StepsContainer from './components/StepsContainer/StepsContainer';
import './FourthLayout.css';


const style = {
    display: 'grid',
    placeItems: 'center',
    marginTop: '3rem',
    marginBottom: '1vh'
}

const FourthLayout = () => {
    return (
		<StandartLayout>
			<TextContainer>
				{'вам важно, чтобы объект был уже сдан'.toUpperCase()}
			</TextContainer>
			<div className='btn-container' style={style}>
				<BorderButton className={'default'}>ОБЪЕКТ ДОЛЖЕН БЫТЬ СДАН</BorderButton>
				<BorderButton className={'default'}>ОБЪЕКТ СДАЁТСЯ В ЭТОМ ГОДУ</BorderButton>
				<BorderButton className={'default'}>ОБЪЕКТ СДАЁТСЯ В СЛЕДУЮЩЕМ ГОДУ</BorderButton>
				<BorderButton className={'default'}>ОБЪЕКТ СДАЁТСЯ В ТЕЧЕНИЕ НЕСКОЛЬКИХ ЛЕТ</BorderButton>
				<BorderButton className={'default'}>СРОК СДАЧИ НЕ ВАЖЕН</BorderButton>
			</div>
            <Button innerText={'ВЫБРАТЬ'} linkToPath="/testreactjs/fifth" />
			<StepsContainer currentIndex={3}/>
		</StandartLayout>
	);
}
 
export default FourthLayout;