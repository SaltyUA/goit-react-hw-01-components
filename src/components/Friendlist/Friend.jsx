import css from './Friendlist.module.css';

const Friend = ({ id, status, avatar, name }) => {
  const isOnline = status ? 'online' : 'offline';
  return (
    <li className={css.friend__item} key={id}>
      <span className={css[isOnline]}></span>
      <img
        src={avatar}
        alt="User Avatar"
        className={css.friend__avatar}
        width={48}
      />
      <p className={css.friend__name}>{name}</p>
    </li>
  );
};

export default Friend;
