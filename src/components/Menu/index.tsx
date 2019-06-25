import React, { FunctionComponent } from 'react';

import MenuItem from '../MenuItem';

import './style.scss';

interface OwnProps {
  items: string[];
}

const Menu: FunctionComponent<OwnProps> = ({ items }) => {
  return (
    <div className="menu-items">
      {items.map(itemname => (
        <MenuItem name={itemname} />
      ))}
    </div>
  );
};

export default Menu;
