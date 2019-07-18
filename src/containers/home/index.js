import React from 'react';
import Hero from '../../components/hero';
import WorkList from '../../components/work-list';

export const Home = () =>
	<div className="page page--home">
		<div className="wrapper">
			<WorkList/>
		</div>
	</div>

export default Home;
