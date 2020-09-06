import React from 'react';
import Hero from '../../components/hero';
import WorkList from '../../components/work-list';
import Skills from '../../components/skills';
import { Body3, Intro } from '../../styles'

export const Home = () =>
	<div className="page page--home">
		<div className="wrapper">
      <Intro>
        <Body3>Proin luctus massa iaculis scelerisque pellentesque. Maecenas id vehicula felis, id ultricies diam. Sed at risus imperdiet, aliquam nisl interdum, pulvinar puBody3us. Vestibulum pharetra, erat id tempus maximus, velit mauris venenatis leo, et scelerisque leo risus sit amet nunc. Duis rhoncus tincidunt molestie. Nullam posuere arcu at arcu volutpat elementum. Quisque tempus metus vel arcu tincidunt vestibulum. Curabitur pretium justo vitae ornare molestie.</Body3>
      </Intro>
            <Skills/>
			<WorkList/>
		</div>
	</div>

export default Home;
