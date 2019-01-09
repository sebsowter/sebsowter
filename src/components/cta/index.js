import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CTA extends Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };
    
	render() {
		const { className, link, text } = this.props;
		const classN = "cta cta--" + className;

		return (
			<div className={classN}>
				<Link to={link}>{text}</Link>
			</div>
		);
	}
}

export default CTA;
