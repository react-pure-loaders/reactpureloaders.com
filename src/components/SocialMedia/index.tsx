import React, { FunctionComponent } from 'react';

import './style.scss';

interface OwnProps {
  path: string;
  desc: string;
}

const SocialMedia: FunctionComponent<OwnProps> = ({ path, desc }) => (
  <img className="social-media" src={path} alt={desc} />
);

export default SocialMedia;
