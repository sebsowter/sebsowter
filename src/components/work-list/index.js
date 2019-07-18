import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectWorkItems } from '../../selectors';
import WorkItem from '../work-item';

import './styles.css';

const items = [
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: 'https://user-images.githubusercontent.com/7384630/55728490-1205fb00-5a0c-11e9-9fca-67641df3549b.jpg',
    category: 'GitHub',
    size: '2'
  },
  {
    title: 'JavaScript Audio Visualizer',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: './audio.png',
    category: 'GitHub',
    size: '2'
  },
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: './lynk.jpg',
    category: 'Work Archive',
    size: '3'
  },
  {
    title: '',
    name: '',
    description: '',
    image: '',
    category: 'Random Art',
    size: '2'
  },
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: 'http://www.sebeynott.com/archive/wp-content/uploads/2017/11/tamasha_thumb.jpg',
    category: 'GitHub Repository',
    size: '2'
  },
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: 'http://www.sebeynott.com/archive/wp-content/uploads/2017/10/solar_system_2.jpg',
    category: '',
    size: '2'
  },
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: 'http://www.sebeynott.com/archive/wp-content/uploads/2018/05/gilead_exhibition-3.jpg',
    category: ''
  },
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: 'http://www.sebeynott.com/archive/wp-content/uploads/2014/04/hazard_house.jpg',
    category: 'GitHub Repository',
    size: '2',
    cta: {
      label: 'Read more',
      url: ''
    }
  },
  {
    title: 'Phaser 3 Webpack Boilerplate',
    name: 'phaser-3',
    description: `Get up and running with Phaser 3 using JavaScript ES6.
      This Webpack setup takes care of your code bundling and local development server.`,
    image: 'http://www.sebeynott.com/archive/wp-content/uploads/2018/05/ericsson_thumb2.jpg',
    category: '',
    size: '2'
  },
  {
    title: '',
    name: '',
    description: '',
    image: '',
    category: 'Random Art',
    size: '2'
  }
];

export const WorkList = ({ items }) => 
	<div className="work-list">
		{
			items.map((item, index) => 
				<WorkItem
					key={index}
					title={item.title}
					category={item.category}
					description={item.description}
					image={item.image}
					size={item.size}
				/>
			)
		}
	</div>

WorkList.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	items: items
});

export default connect(mapStateToProps)(WorkList);
