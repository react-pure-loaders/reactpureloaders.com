import React from 'react';
import styles from '../styles/GettingStartedSection.module.css';
const GettingStarted = () => (
  <>
    Install into your project using a node package manager.

    Using npm:

    <p className={styles.codeSnippet}>npm install react-pure-loaders</p>

    Using yarn:

    <p className={styles.codeSnippet}>yarn add react-pure-loaders</p>

    Import into the component:

    <p className={styles.codeSnippet}></p>

    Create the component:
    <p>
      As no props are passed, the component will use the default values for the
      color and loading state.If you want to personalize,use a string for the
      color and a boolean for loading.
    </p>
    <p className={styles.codeSnippet}></p>
  </>
);

export default GettingStarted;
