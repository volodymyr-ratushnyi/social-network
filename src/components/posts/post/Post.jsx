import React from 'react';
import Comment from './comment/Comment';
import NewComment from './new-comment/NewComment';
import s from './Post.module.scss';
import UserInfo from './user-info/UserInfo';

const Post = (props) => {
  const renderSwitch = (type) => {
    switch (type) {
      case 'img':
        return <img src={props.url} alt="Post" className={s.graphic} />;
      default:
        return;
    }
  };

  let comments = props.comments.map((comment) => <Comment key={comment.comment_id} user={comment.user} comment={comment.text} />);

  return (
    <div className={s.post}>
      {renderSwitch(props.graphic)}
      <div className={s.wrapper}>
        <img src={props.user.avatar} alt="avatar" className={s.avatarPost} />
        <div className={s.underPost}>
          <UserInfo user={props.user} time={props.time} likes={props.likes} dislikes={props.dislikes} />
          <div className={s.text}>{props.text}</div>
          <div className={s.comments}>{comments}</div>
          <NewComment
            dataForMe={props.dataForMe}
            addComment={props.addComment}
            updateCommentText={props.updateCommentText}
            post_id={props.post_id}
            newCommentText={props.newCommentText}
          />
        </div>
      </div>
    </div>
  );
};
export default Post;
