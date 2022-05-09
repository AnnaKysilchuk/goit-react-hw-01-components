import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ data }) => {
  return (
    <ul className={style.friendList}>
      {data.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};
