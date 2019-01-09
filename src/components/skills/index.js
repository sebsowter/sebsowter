import React from 'react';

import './styles.css';

export const Skills = () => 
	<div className="skills">
		<div className="skills__inner">
			<h2>Skills</h2>
			<div className="skills__table">
				<div className="skills__left">
					<div className="skills__header">
						<h4>Development</h4>
					</div>
					<div className="skills__row">
						<div className="skills__col">
							<ul>
								<li>JavaScript ES5/ES6 OOP</li>
								<li>React, Redux</li>
								<li>Node.js, Babel, Express, Electron</li>
								<li>Webpack, Grunt, Gulp</li>
								<li>PHP, MySQL, WordPress, AEM</li>
							</ul>
						</div>
						<div className="skills__col">
							<ul>
								<li>HTML5</li>
								<li>CSS, SCSS, BEM</li>
								<li>Greensock, Box2D</li>
								<li>Canvas, WebGL, Three.js, PIXI.js, Phaser</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="skills__right">
					<div className="skills__header">
						<h4>Creative</h4>
					</div>
					<div className="skills__row">
						<div className="skills__col">
							<ul>
								<li>2D and 3D Design, Motion Design</li>
								<li>Photoshop, Illustrator, After Effects</li>
								<li>Sketch</li>
								<li>Blender</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

export default Skills;
