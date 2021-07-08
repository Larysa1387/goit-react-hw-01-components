import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from './eyes-285825_960_720.webp';
import './profile.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
	<div className="container_align">
		<div className="card_info">
			<img className="avatar_img" src={avatar} alt="User avatar" width="100" />
			<p className="name">{name}</p>
			<p className="tag">@{tag}</p>
			<p className="location">{location}</p>
		</div>
		<ul className="stats">
			<li className="stats_item">
				<span className="label">Followers</span>
				<span className="quantity">{stats.followers}</span>
			</li>
			<li className="stats_item">
				<span className="label">Views</span>
				<span className="quantity">{stats.views}</span>
			</li>
			<li className="stats_item">
				<span className="label">Likes</span>
				<span className="quantity">{stats.likes}</span>
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
