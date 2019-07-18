import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PATHS } from '../../constants';
import { toSlug } from '../../utils';

import RandomArt from '../random-art';
import WorkLink from '../work-link';

import './styles.css';

class WorkItem extends Component {
	render() {
    const { title, description, image, category, size } = this.props;
    
		return (
			<div className={`work-list__item padding-x size-${size}`}>
        {
          category == 'Random Art' ?
          <RandomArt
            title={title}
            category={category}
            size={size}
          />
          :
          <WorkLink
            title={title}
            category={category}
            description={description}
            image={image}
            size={size}
          />
        }
			</div>
		);
	}
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default WorkItem;
