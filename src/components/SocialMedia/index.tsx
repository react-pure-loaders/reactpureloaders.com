import React, { FunctionComponent } from 'react';

import './style.scss';

interface OwnProps {
  path: string;
  desc: string;
  link: string;
  title: string;
}

const SocialMedia: FunctionComponent<OwnProps> = ({
  path,
  desc,
  link,
  title,
}) => (
  <div className="social-media">
    <a href={link} title={title}>
      <img src={path} alt={desc} />
    </a>
  </div>
);

export default SocialMedia;
