import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import {FriendLi} from './FriendListItem.jsx'
export const FriendList = ({ friends }) => {

    return (
        <div className={css.friends}>
          <ul className={css.friends__list}>
          <FriendLi friends={friends}/>
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
//{friends.map(({ avatar, name}) => {
//    <li className="item">
//    <span className="status">Yes</span>
//    <img className="avatar" src={avatar} alt="User avatar" width="48" />
//    <p className="name">{name}</p>
//  </li>
//})}