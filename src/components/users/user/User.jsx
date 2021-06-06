import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../common/button/Button';
import s from './User.module.scss';

const User = (props) => {
  const switchFollow = () => {
    props.switchFollow(props.user_id);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.left}>
          <NavLink to={'/profile/' + props.user_id}>
            <img src={props.avatar} alt="ava" className={s.avatar} />
          </NavLink>
          <div className={s.info}>
            <NavLink to={'/profile/' + props.user_id}>
              <h6>
                {props.nickName}
                {props.firstName} {props.lastName}
              </h6>
            </NavLink>
            <p>{'props.profession'}</p>
            <p className={s.textMuted}>
              {'props.location.city'}, {'props.location.country'}
            </p>
          </div>
        </div>

        <div className={s.right}>
          <Button
            text={props.followed ? 'Delete' : 'Add Friend'}
            cls="addFriend blue"
            onClick={switchFollow}
            disabled={props.followingInProgress.includes(props.user_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
