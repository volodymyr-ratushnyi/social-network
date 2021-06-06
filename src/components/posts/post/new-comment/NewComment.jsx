import React from 'react';
import Button from '../../../common/button/Button';
import Textarea from '../../../common/textarea/Textarea';
import s from './NewComment.module.scss';

const NewComment = (props) => {
  const updateCommentText = (text) => {
    props.updateCommentText(text, props.post_id);
  };

  const addComment = () => {
    props.addComment(props.post_id);
  };

  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="myAvatar" />
      <form className={s.myMessage + ' input-group mb-3'}>
        <Textarea holder="Post a comment" value={props.newCommentText} cls="classic" cls1="comment" getValueFromInput={updateCommentText} />
        <Button text="Send" cls="black" onClick={addComment} />
      </form>
    </div>
  );
};

export default NewComment;
