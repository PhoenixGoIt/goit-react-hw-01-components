import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendLi = ({  avatar, name, isOnline, id  }) => {

    return (
              <li className={css.friends__item} key={id}>
                <span className={`${css.friends__status} ${css[isOnline]}`}>
                  {isOnline}
                </span>
                <img className={css.avatar} src={avatar} alt={name} />
                <p className={css.friends__name}>{name}</p>
              </li>
      );
};

FriendLi.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};