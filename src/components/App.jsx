import { Profile } from './Profile';
import user from '../data/user.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        stats={user.stats}
        location={user.location}
      />
    </div>
  );
};
