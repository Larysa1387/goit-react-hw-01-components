import React from 'react';
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

export default Profile;
