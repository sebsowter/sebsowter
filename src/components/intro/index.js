import React from 'react';
import Header from '../../containers/header';

import './styles.scss';

export const Intro = () => {
	return (
		<div className={'intro box'}>
			<div className={'col-padding'}>
				<Header />
				<h1>Seb Eynott</h1>
				<h2>JavaScript / React / WebGL</h2>
				<div className={'body-text'}>
					<p>Freelance JavaScript developer, creative and indie gamer.</p>
				</div>
			</div>
		</div>
	);
}

export default Intro;
