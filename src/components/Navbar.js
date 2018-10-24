import React from 'react';
import './DropDownToggleButton';
import DropDownToggleButton from './DropDownToggleButton';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div>
        <DropDownToggleButton click={props.dropdownMenuClickHandler} />
      </div>
      <div className="navbar__logo">
        <a href="/">The LOGO</a>
      </div>
      <div className="spacer" />
      <div className="navbar__navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
