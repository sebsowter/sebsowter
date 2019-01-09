import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './loader.scss';

class Loader extends Component {
    static propTypes = {
        loaded: PropTypes.bool.isRequired
    };
    
	render() {
		const { loaded } = this.props;
		const className = "loader " + (loaded ? "loader--loaded" : "loader--loading");

		return (
			<div className={className}>
			</div>
		);
	}
}

export default Loader;
