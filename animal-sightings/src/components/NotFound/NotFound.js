import React from 'react';

import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles['not-found-page']}>
      <h1>Page Not Found</h1>
      <h3>The page you are looking for does not exist.</h3>
    </div>
  );
};

