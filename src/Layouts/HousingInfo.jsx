import React from 'react';
import Button from '../components/Button/Button';
import PhotoCarousel from '../components/PhotoCarousel/PhotoCarousel';
import { ReactComponent as Location } from '../Location.svg';
import { ReactComponent as Chel } from '../stand4el.svg';
import { ReactComponent as SrokSdachi } from '../SrokSda4i.svg';
import { ReactComponent as Calendar } from '../Calendar.svg';
import { ReactComponent as Panelki } from '../Panelki.svg';
import { ReactComponent as SmallerPanelki } from '../SmallerPanelki.svg';
import { ReactComponent as Otdelka } from '../Otdelka.svg';
import { ReactComponent as Kvartirka } from '../Kvartirka.svg';
import { ReactComponent as Back } from '../Arrow_1.svg';


import './HousingInfo.css';




const HousingInfo = () => {
    return (
		<div>
			<PhotoCarousel />

			<div className="main-info" style={{ backgroundColor: '#1C1C1E' }}>
				<div
					className="housing-title"
					style={{
						fontSize: '32px',
						paddingLeft: '17px',
						paddingTop: '17px',
						marginBottom: '50px'
					}}
				>
					Sydney City
				</div>

				<div
					className="housing-geo-info"
					style={{ paddingLeft: '17px', paddingBottom: '50px' }}
				>
					<div
						className="housing-adress-info"
						style={{ marginBottom: '20px' }}
					>
						<Location /> Адрес: Москва, ул. Шеногина, вл. 2{' '}
					</div>
					<div className="housing-adress-info metro">
						Звенигородская (1234) <Chel /> 2 минуты
					</div>
				</div>
			</div>

			<div className="trade-in-section">
				<span
					style={{
						fontSize: '26px',
						fontWeight: '400',
						maxWidth: '92%',
						display: 'block',
						margin: 'auto',
						marginTop: '30px'
					}}
				>
					Новостройка в Trade-in
				</span>
				<br />
				<span
					style={{
						fontSize: '20px',
						fontWeight: '300',
						maxWidth: '92%',
						display: 'block',
						margin: 'auto'
					}}
				>
					Выгодно обменяйте Вашу квартиру на новую. Получите онлайн
					оценку вашей квартиры и подбор новой с минимальной разницей
					в цене или без доплаты.
				</span>
				<div
					style={{
						minWidth: '100%',
						display: 'grid',
						placeItems: 'center',
						marginTop: '30px',
						marginBottom: '5px'
					}}
				>
					<Button
						style={{
							backgroundColor: '#fff',
							color: 'black',
							minWidth: '80vw',
							margin: '20px auto'
						}}
						innerText={'ОЦЕНИТЬ СВОЮ КВАРТИРУ'}
						linkToPath={''}
					/>
				</div>
			</div>

			<div className="main-info" style={{ backgroundColor: '#1C1C1E' }}>
				<div
					className="housing-title"
					style={{
						fontSize: '26px',
						paddingLeft: '17px',
						paddingTop: '17px',
						marginBottom: '20px'
					}}
				>
					О проекте
				</div>

				<div
					style={{
						fontWeight: '300',
						fontSize: '18px',
						paddingLeft: '17px',
						lineHeight: '21.5px',
						marginBottom: '24px',
						maxWidth: '90vw'
					}}
				>
					Новый проект бизнес-класса на ул. Шеногина. Первый жилой
					квартал в концепции Well-being в Москве, квартал, который
					заботится о Вашем благополучии. Уникальное сочетание
					центрального расположения, близости к воде, собственной
					самодостаточной инфраструктуры, начиная от своего детского
					сада и школы от ведущих операторов столицы и заканчивая
					торговым центром и кинотеатром.
				</div>

				<div
					className="sections-info"
					style={{
						paddingBottom: '30px'
					}}
				>
					<div className="section-info">
						<SrokSdachi
							style={{
								paddingLeft: '40px',
								paddingRight: '22px'
							}}
						/>
						<div>
							<span className="static pale"> Срок сдачи: </span>
							<span className="static"> 1кв. 2023 </span>
						</div>
					</div>
					<div className="section-info">
						<Panelki
							style={{
								paddingLeft: '40px',
								paddingRight: '21px'
							}}
						/>
						<div>
							<span className="static pale"> Корпуса: </span>
							<span className="static"> 13 </span>
						</div>
					</div>
					<div className="section-info">
						<SmallerPanelki
							style={{
								paddingLeft: '42px',
								paddingRight: '21px'
							}}
						/>
						<div>
							<span className="static pale"> Этажность </span>
							<span className="static"> 1-44 </span>
						</div>
					</div>
					<div className="section-info">
						<Calendar
							style={{
								paddingLeft: '42px',
								paddingRight: '24px'
							}}
						/>
						<div>
							<span className="static pale"> Метраж: </span>
							<span className="static"> 32-145м. </span>
						</div>
					</div>
					<div className="section-info">
						<Otdelka
							style={{
								paddingLeft: '44px',
								paddingRight: '25px'
							}}
						/>
						<div>
							<span className="static pale"> Отделка: </span>
							<span className="static"> Без отделки </span>
						</div>
					</div>
				</div>
			</div>

			<div className="search-results-counter">
				<div>
					<div
						style={{
							fontWeight: '400',
							fontSize: '24px',
							textAlign: 'center',
							marginTop: '20px',
							marginBottom: '20px'
						}}
					>
						Под ваши критерии найдено:{' '}
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '18px',
							fontWeight: '300',
							fontSize: '26px',
							color: '#E84E0E'
						}}
					>
						{' '}
						<Kvartirka /> 24 квартиры
					</div>
				</div>

				<Button
					style={{
						minWidth: '80vw',
						margin: '20px auto'
					}}
					innerText={'ПОЛУЧИТЬ СПИСОК КВАРТИР'}
					linkToPath={''}
				/>
			</div>
            
            <div style={{display: 'grid', placeItems: 'center'}}> 
            <Button
					style={{
						minWidth: '90vw',
                        color: '#fff',
                        backgroundColor: '#000',
                        margin: '0 auto',
                        border: '1px solid #fff'
					}}
					innerText={<><Back /> Вернуться к подбору квартир</>}
					linkToPath={'/testreactjs/quiz'}
				/>
            </div>
			
		</div>
	);
}
 
export default HousingInfo;