import { Profile } from './components/profile/Profile.jsx';
import { Statistics } from './components/statistics/Statistics.jsx';
import { Friends } from './components/friendList/FriendList.jsx';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory.jsx';

import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App () {
    return (
        <div className='App'>
            <Profile {...user}/>
            <Statistics title="Upload stats" data={statistics} />
            <Friends data={friends} />
            <TransactionHistory data={transactions} />
        </div>
    )
};

export default App;