import React, { FunctionComponent } from 'react';

interface OwnProps {
  image: any;
}

const Logo: FunctionComponent<OwnProps> = ({ image }) => (
  <div className="header-home menu logo">
    <img src={image} alt="Logo" height="35px" width="35px" />
    <p className="header-home menu logo title">
      <span id="span-title-1">React Pure</span>
      <span id="span-title-2">Loaders</span>
    </p>
  </div>
);

export default Logo;
