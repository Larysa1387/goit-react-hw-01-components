import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../jsonsFiles/eyes-285825_960_720.webp';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const activeStatus = (isOnline === true) ? styles.active : styles.offline;
  return (
		<div className={styles.align}>
			<span className={activeStatus}></span>
			<img
				className={styles.avatar}
				src={avatar}
				alt="user avatar"
				width="48"
			/>
			<p className={styles.name}>{name}</p>
		</div>
	);
};

// style={{(isOnline=true)? backgroundColor:'green': backgroundColor:'red'}}

FriendListItem.defaultProps = {
	avatar: defaultImage,
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline:PropTypes.bool.isRequired,
};

export default FriendListItem;
