import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.friendItem}>
      <span className={isOnline ? style.statusOnline : style.statusOffline}></span>
      <img className={style.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={style.friendName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
