import React, {type FunctionComponent} from 'react';

import styles from '../styles/MenuItem.module.css';

type OwnProps = {
	name: string;
};

const MenuItem: FunctionComponent<OwnProps> = ({name}) => (
	<p className={styles.menuItem}>{name}</p>
);

export default MenuItem;
