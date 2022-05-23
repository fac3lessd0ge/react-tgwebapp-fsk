import React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import BorderButton from '../components/BorderButton/BorderButton';
import TelephoneButton from '../components/TelephoneButton/TelephoneButton';

import { ReactComponent as Back } from '../Assets/Arrow_1.svg';
import { Link } from 'react-router-dom';

const SearchFail = () => {

    return (
		<div style={{ position: 'relative', backgroundColor: '#1c1c1e' }}>
			<div
				style={{
					display: 'grid',
					position: 'relative',
					height: '100vh',
					placeItems: 'center'
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						gap: '25px'
					}}
				>
					<TextContainer
						style={{
							color: '#fff',
							fontWeight: '300',
							fontSize: '26px'
						}}
					>
						{' '}
						По вашему запросу не нашлось подходящих объектов.{' '}
					</TextContainer>

					<TextContainer
						style={{
							marginTop: '8%',
							color: '#fff',
							fontSize: '26px'
						}}
					>
						{' '}
						Измените критерии поиска и попробуйте снова.{' '}
					</TextContainer>

					<BorderButton
						style={{
							height: '50px',
							padding: '0 3%',
							maxWidth: '95%',
							border: '1px solid white',
							fontSize: '18px'
						}}
						className={'default'}
					>
						<Link
							style={{ display: 'border-box', width: '95%' }}
							to={'/react-tgwebapp-fsk/quiz'}
						>
							{<Back />} НАЗАД К ПОДБОРУ КВАРТИР
						</Link>
					</BorderButton>
				</div>
			</div>
			{/* <TelephoneButton /> */}
		</div>
	);
}
 
export default SearchFail;