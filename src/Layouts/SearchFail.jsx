import React from 'react';
import TextContainer from '../components/TextField/TextContainer';
import BorderButton from '../components/BorderButton/BorderButton';

import { ReactComponent as Back } from '../Arrow_1.svg';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

const SearchFail = () => {

    return (
		<div style={{ display: 'grid', height: '100vh', placeItems: 'center' }}>
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
				<Link to={'/testreactjs/quiz'}>
					<BorderButton
						style={{
							height: '50px',
							width: '375px',
							maxWidth: '375px',
							padding: '0px',
							border: '1px solid white',
							fontSize: '18px'
						}}
						className={'default'}
					>
						{<Back />} НАЗАД К ПОДБОРУ КВАРТИР
					</BorderButton>
				</Link>
			</div>
		</div>
	);
}
 
export default SearchFail;