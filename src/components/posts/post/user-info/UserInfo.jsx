import React from 'react';
import s from './UserInfo.module.scss';

const UserInfo = (props) => {
  return (
    <div className={s.postInfo}>
      <div className={s.userInfo}>
        <p>
          <a href="#">
            {props.user.firstName} {props.user.lastName}
          </a>{' '}
          <span>{props.user.following}</span>
        </p>
        <p>{props.time}</p>
      </div>
      <div className="reaction">
        {props.likes} {props.dislikes}
      </div>
    </div>
  );
};

export default UserInfo;
