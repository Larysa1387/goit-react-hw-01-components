
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './user.json';
import statDatas from './statistical-data.json';


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
			<Statistics title="Upload stats" statDatas={statDatas} />
		</div>
	);
};


export default App;
