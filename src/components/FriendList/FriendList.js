import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <li key={id}>
        <FriendListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
  })).isRequired,
};
export default FriendList;
