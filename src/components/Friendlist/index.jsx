import css from './friendlist.module.css';

const Friendlist = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => {
        const statusColor = friend.isOnline ? '#008000' : '#ff0000';
        return (
          <li className={css.friend__item} key={friend.id}>
            <span
              style={{
                backgroundColor: statusColor,
              }}
              className={css.friend__status}
            ></span>
            <img
              src={friend.avatar}
              alt="User Avatar"
              className={css.friend__avatar}
              width={48}
            />
            <p className={css.friend__name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Friendlist;
