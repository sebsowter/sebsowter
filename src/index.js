import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App';

import './css/styles.css';


render(
	<Provider store={ createStore(reducers) }>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
