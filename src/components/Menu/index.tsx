import React, { FunctionComponent } from 'react';

import MenuItem from '../MenuItem';

import './style.scss';

const Menu: FunctionComponent = () => {
  return (
    <div className="menu-items">
      <MenuItem name="Home" />
      <MenuItem name="Demo" />
      <MenuItem name="Docs" />
    </div>
  );
};

export default Menu;
