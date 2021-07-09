import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../jsonsFiles/eyes-285825_960_720.webp';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
	<div className={styles.container_align}>
		<div className={styles.card_info}>
			<img className={styles.avatar_img} src={avatar} alt="User avatar" width="100" />
			<p className={styles.name}>{name}</p>
			<p className={styles.tag}>@{tag}</p>
			<p className={styles.location}>{location}</p>
		</div>
		<ul className={styles.stats}>
			<li className={styles.stats_item}>
				<span className={styles.label}>Followers</span>
				<span className={styles.quantity}>{stats.followers}</span>
			</li>
			<li className={styles.stats_item}>
				<span className={styles.label}>Views</span>
				<span className={styles.quantity}>{stats.views}</span>
			</li>
			<li className={styles.stats_item}>
				<span className={styles.label}>Likes</span>
				<span className={styles.quantity}>{stats.likes}</span>
			</li>
		</ul>
	</div>
);

Profile.defaultProps = {
	avatar: defaultImage,
};

Profile.protoType = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	// stats: PropTypes.object.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}),
};

export default Profile;
