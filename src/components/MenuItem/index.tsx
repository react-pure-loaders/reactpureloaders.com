import React, { FunctionComponent } from 'react';

import './style.scss';

interface OwnProps {
  name: string;
}

const MenuItem: FunctionComponent<OwnProps> = ({ name }) => (
  <p className="menu-item">{name}</p>
);

export default MenuItem;
