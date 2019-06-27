import React, { FunctionComponent } from 'react';

import './style.scss';

interface OwnProps {
  title: string;
  description: string;
}

const Section: FunctionComponent<OwnProps> = ({ title, description }) => (
  <div className="section">
    <h2 className="section-title">{title}</h2>
    <p className="section-description">{description}</p>
  </div>
);

export default Section;
