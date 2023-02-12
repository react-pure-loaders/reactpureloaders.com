import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import MenuItem from '../MenuItem';

import './style.scss';

const Menu: FunctionComponent = () => {
  return (
    <div className="menu-items">
      <MenuItem name="Home" />
      <a
        href="https://reactpureloaders.com/story/"
        title="Demo on Storybook"
        target="_blank"
      >
        <MenuItem name="Demo" />
      </a>
      <Link to="/docs">
        <MenuItem name="Docs" />
      </Link>
    </div>
  );
};

export default Menu;
