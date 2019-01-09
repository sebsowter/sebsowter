import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectWorkItems, selectWorkLoaded } from '../../selectors';
import { toSlug } from '../../utils';
import { PATHS } from '../../constants';

import './styles.css';

class Work extends Component {
	state = {
		item: null
	};

	componentWillMount() {
		if (this.props.loaded) {
			const { location, items } = this.props;
	    	
	    	this.setItem(location, items);
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.loaded !== this.props.loaded && newProps.loaded) {
			const { location, items } = newProps;
	    	
	    	this.setItem(location, items);
		}
	}

	setItem = (location, items) => {
    	const slug = toSlug(location.pathname.replace(PATHS.WORK + '/', ''));

	    for (var i = 0; i < items.length; i++) {
	        const item = items[i];

	        if (toSlug(item.name) === slug) {
	        	this.setState({
	        		item: item
	        	});
	        }
	    }
	}

	getImages = (item) => {
		let images = [];
		let i = 1;

		while (i < 7) {
			if (item['image' + i]) {
				images.push({
					url: item['image' + i],
					caption: item['image' + i + '_caption']
				});

				i++;
			} else {
				i = 7;
			}
		}

		return images;
	}

	render() {
		const { item } = this.state;
		const images = item ? this.getImages(item) : [];

		return (
			<div className={ 'page page--work' }>
				<div className={ 'wrapper' }>
					{
						item &&
						<div className={ 'work' }>
							<div className={ 'work__content' }>
								<div className={ 'padding-horizontal' }>
									<div className={ 'work__title' }>
										<h1 dangerouslySetInnerHTML={{ __html: item.name }}/>
										<p dangerouslySetInnerHTML={{ __html: item.description }}/>
									</div>
									<div className={ 'work__body' } dangerouslySetInnerHTML={{ __html: item.html }}/>
									<div className={ 'work__details' }>
										<ul>
											{
												item.client &&
												<li>
													<h6>{ 'Client:' }</h6>
													<p>{ item.client }</p>
												</li>
											}
											{
												item.agency &&
												<li>
													<h6>{ 'Agency:' }</h6>
													<p>{ item.agency }</p>
												</li>
											}
											{
												item.role &&
												<li>
													<h6>{ 'Role:' }</h6>
													<p>{ item.role }</p>
												</li>
											}
											{
												item.technologies &&
												<li>
													<h6>{ 'Tech:' }</h6>
													<p>{ item.technologies }</p>
												</li>
											}
										</ul>
									</div>
									{
										item.cta_url &&
										<div className={ 'work__launch' }>
											<a href={ item.cta_url } target="_blank">Launch</a>
										</div>
									}
									<div className={ 'work__back' }>
										<Link to={ PATHS.HOME }/>
									</div>
								</div>
							</div>
							<div className={ 'work-images' }>
								<div className={ 'padding-horizontal' }>
									{
										images.map((image, index) => 
											<div key={index} className={ 'work-images__item' }>
												<div className={ 'work-images__item__image' }>
													<a href={image.url}>
														<img src={image.url} alt={image.caption ? image.caption : item.name + ' Image 1' }/>
													</a>
												</div>
												{
													image.caption &&
													<div className={ 'work-images__item__caption' }>
														<p dangerouslySetInnerHTML={{__html: image.caption}}/>
													</div>
												}
											</div>
										)
									}
								</div>
							</div>
						</div>
					}
				</div>
			</div>
		);
	}
}

Work.propTypes = {
    items: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => (
    {
        items: selectWorkItems(state),
        loaded: selectWorkLoaded(state)
    }
);

export default connect(mapStateToProps)(Work);
