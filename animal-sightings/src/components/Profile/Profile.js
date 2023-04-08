import React from 'react';

import { useAuthContext } from '../../contexts/AuthContext';

import styles from './Profile.module.css';

export const Profile = () => {
  const { userFirstName, userLastName, userEmail } = useAuthContext();

  return (
    <div className={styles['profile-page']}>
      <h1 className={styles['profile-title']}>Profile</h1>
      <div className={styles['profile-data']}>
        <p>
          <strong>Name:</strong> {userFirstName} {userLastName}
        </p>
        <p>
          <strong>Email:</strong> {userEmail}
        </p>
      </div>
    </div>
  );
};
