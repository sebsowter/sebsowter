import React from 'react';
import Skills from '../../components/skills';

export const Home = () =>
	<div className="page page--info">
        <div className={ 'wrapper' }>
            <div className="grid">
                <div className="col-6">
                </div>
                <div className="col-6">
                    <p>The Grid is a self-portrait of the creative being. It is a visual representation of the lust for diversity and the pursuit of inspiring collaborators. It is a career defined – as a statement of output, and a determination to stay relevant amongst the giants. Every one of these entries is a memory, an arc of emotion; a story that has many conclusions – yet only the most vibrant of tales shall remain as a permanent imprint.</p>
                </div>
            </div>
            <Skills/>
        </div>
	</div>

export default Home;
