import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import {FriendLi} from './FriendListItem.jsx'
export const FriendList = ({ friends }) => {

    return (
        <div className={css.friends}>
          <ul className={css.friends__list}>
          {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendLi  avatar={avatar} name={name} isOnline={isOnline} id={id} />
          ))}
          </ul>
        </div>
      );
};

FriendList.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};
