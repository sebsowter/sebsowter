import React from 'react';
import Hero from '../../components/hero';
import WorkList from '../../components/work-list';

export const Home = () =>
	<div className="page page--home">
		<div className="wrapper">
      <p className="intro">This Webpack setup takes care of your code bundling and local development server</p>
			<WorkList/>
		</div>
	</div>

export default Home;
