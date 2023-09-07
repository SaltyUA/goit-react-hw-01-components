import css from './Friendlist.module.css';
import Friend from './Friend';

const Friendlist = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default Friendlist;
