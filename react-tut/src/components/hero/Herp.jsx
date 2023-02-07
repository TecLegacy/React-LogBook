import React from 'react';
import CondtionalRender from '../../UI/CondtionalRender';
import styles from './herp.module.css';
const Herp = () => {
  return (
    // Conditonally rendering styles
    <CondtionalRender className={styles.background}>Hey there</CondtionalRender>
  );
};

export default Herp;
