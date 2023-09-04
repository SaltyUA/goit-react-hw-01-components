import './friendlist.css';

const Friendlist = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const statusColor = friend.isOnline ? '#008000' : '#ff0000';
        return (
          <li className="friend__item" key={friend.id}>
            <span
              style={{
                backgroundColor: statusColor,
              }}
              className="friend__status"
            ></span>
            <img
              src={friend.avatar}
              alt="User Avatar"
              className="friend__avatar"
              width={48}
            />
            <p className="friend__name name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Friendlist;
