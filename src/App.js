import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './jsonsFiles/user.json';
import statDatas from './jsonsFiles/statistical-data.json';
import friends from './jsonsFiles/friends.json';
import transactions from './jsonsFiles/transactions.json'

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
			<FriendList friends={friends} />
			<TransactionHistory transactions={transactions} />
		</div>
	);
};


export default App;
