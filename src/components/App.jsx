import { Profile } from '../components/Profile/Profile.jsx';
import user from '../assets/user.json';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import data from '../assets/data.json';
import { FriendList } from '../components/FriendList/FriendList.jsx';
import friends from '../assets/friends.json';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory.jsx';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        width: '100%',
        margin: '0 auto',
        gap: '100px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
