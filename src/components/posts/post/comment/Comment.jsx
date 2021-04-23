import React from 'react';
import s from './Comment.module.scss';

const Comment = (props) => {
  return (
    <div className={s.comment}>
      <img src={props.user.avatar} alt="avatar" className={s.avatar} />
      <div className={s.text}>
        <a href="#">
          {props.user.firstName} {props.user.lastName}
        </a>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};
export default Comment;
