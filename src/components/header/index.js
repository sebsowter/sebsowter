import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants';

import './styles.css';

export const Header = () =>
  <header className="header">
    <div className="wrapper">
      <div className="grid">
        <div className="col-9 logo padding-x">
          <Link to={ PATHS.HOME }>
            <h1>Seb Sowter</h1>
          </Link>
        </div>
        <div className="grid col-3 nav">
          <div className="col-6 nav__item">
            <Link to={ PATHS.HOME }>
              Work
            </Link>
          </div>
          <div className="col-6 nav__item">
            <Link to={ PATHS.INFO }>
              Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>

export default Header;
