import React from 'react';

import './styles.css';
import h from '../../images/hero.jpg';

export const Hero = () =>
  <div className="hero">
    <div className="image">
      <img
        src={h}
        alt="Seb Sowter"
      />
    </div>
    <div className="wrapper">
      <div className="grid">
        <div className="col-4">
        </div>
        <div className="col-8">
          <div className="hero-intro">
            <p>Developer, Creator</p>
            <p>(mostly with JavaScript)</p>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Hero;
