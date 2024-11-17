import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
