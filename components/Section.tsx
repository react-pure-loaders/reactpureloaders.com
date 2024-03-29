import React, { FunctionComponent } from 'react';

import styles from '../styles/Section.module.css';
interface OwnProps {
  title: string;
  description?: string;
  children?: any;
}

const Section: FunctionComponent<OwnProps> = ({
  title,
  description,
  children,
}) => (
  <div className={styles.section}>
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
    {children && <div className="section-home-children">{children}</div>}
  </div>
);

export default Section;
