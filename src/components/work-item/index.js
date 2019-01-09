import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PATHS } from '../../constants';
import { toSlug } from '../../utils';

import './styles.css';

class WorkItem extends Component {
	state = {
		isOpen: false,
		timeout: null
	};

	componentDidMount() {
		this.setState({
			timeout: setTimeout(() => this.setState({
				isOpen: true
			}), Math.floor(Math.random() * 500))
		});
	}

	componentWillUnmount() {
		this.setState({
			timeout: clearTimeout(this.state.timeout)
		});
	}

	render() {
		const { title, description, image } = this.props;

		return (
			<div className={ 'work-list__item' + (this.state.isOpen ? ' is-open' : '') }>
				<Link to={ PATHS.WORK + '/' + toSlug(title) }>
					<div className={ 'image' }>
						<img src={ image } alt={ title } />
						{/*<img classNamer={ 'static' } src={ '../../../images/static_reverse.gif' } alt={ '' } />*/}
					</div>
					<div className={ 'content' }>
						<h3 dangerouslySetInnerHTML={{ __html: title }}/>
						<p dangerouslySetInnerHTML={{ __html: `${description}` }}/>
					</div>
				</Link>
			</div>
		);
	}
}

WorkItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default WorkItem;
