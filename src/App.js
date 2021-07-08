
import Profile from './components/Profile/Profile';
import user from './user.json';

const App = () => {
	return (
		<div>
			<Profile
				avatar={user.avatar}
				name={user.name}
				tag={user.tag}
				location={user.location}
				stats={user.stats}
			/>
		</div>
	);
};


export default App;
