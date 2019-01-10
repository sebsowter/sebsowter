import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectWorkItems } from '../../selectors';
import WorkItem from '../work-item';

import './styles.css';

export const WorkList = ({ items }) => 
	<div className="work-list">
		{
			items.map((item, index) => 
				<WorkItem
					key={index}
					title={item.name}
					description={item.description}
					image={item.image}
				/>
			)
		}
	</div>

WorkList.propTypes = {
    items: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	items: selectWorkItems(state)
});

export default connect(mapStateToProps)(WorkList);
