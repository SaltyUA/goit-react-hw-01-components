import Profile from './Profile';
import user from '../data/user.json';
import Statistics from './Statistic';
import data from '../data/data.json';
import Friendlist from './Friendlist';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        stats={user.stats}
        location={user.location}
      />
      <Statistics data={data} />
      <Friendlist friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
