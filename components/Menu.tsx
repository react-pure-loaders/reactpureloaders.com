import React, {FunctionComponent} from 'react';
import Link from 'next/link';

import MenuItem from './MenuItem';
import styles from '../styles/Menu.module.css';

const Menu: FunctionComponent = () => {
  return (
    <div className={styles.menuItems}>
      <MenuItem name="Home"/>
      <Link
        href="https://reactpureloaders.com/story/"
        title="Demo on Storybook"
        target="_blank"
      >
        <MenuItem name="Demo"/>
      </Link>
      <Link href="/docs">
        <MenuItem name="Docs"/>
      </Link>
    </div>
  );
};

export default Menu;
