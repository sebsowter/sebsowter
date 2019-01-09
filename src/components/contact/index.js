import React from 'react';

import './styles.css';

export const Contact = () => 
	<div className="contact">
		<div className="wrapper">
			<h2>Contact</h2>
			<ul>
				<li>
					<a href="http://github.com/sebsowter">
						<span>GitHub</span>
					</a>
				</li>
				<li>
					<a href="http://linkedin.com/sebsowter">
						<span>LinkedIn</span>
					</a>
				</li>
				<li>
					<a href="mailto:seb@sebsowter.com">
						<span>Email</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

export default Contact;
