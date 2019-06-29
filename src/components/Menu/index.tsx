import React, { FunctionComponent } from 'react';

import MenuItem from '../MenuItem';

import './style.scss';

const Menu: FunctionComponent = () => {
  return (
    <div className="menu-items">
      <MenuItem name="Home" />
      <a
        href="https://reactpureloaders.io/?path=/story/"
        title="Demo on Storybook"
        target="_blank"
      >
        <MenuItem name="Demo" />
      </a>

      <MenuItem name="Docs" />
    </div>
  );
};

export default Menu;
