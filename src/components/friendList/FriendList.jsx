import PropTypes from "prop-types";
import style from './FriendList.module.css';

export const Friends = ({ data }) => {
  return (
    <ul className={style.friendList}>
      {data.map(({ avatar, name, isOnline, id }) => (
        <li className={style.friendItem} key={id}>
          {isOnline ?
            (<span className={style.statusOnline}></span>) :
            (<span className={style.statusOffline}></span>)
          }
          <img className={style.friendAvatar} src={avatar} alt={name} width="48" />
          <p className={style.friendName}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
}