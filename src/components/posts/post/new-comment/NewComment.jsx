import React from 'react';
import { addCommentCreator, updateCommentCreator } from '../../../../redux/newsfeed-reducer';
import Button from '../../../button/Button';
import Textarea from '../../../textarea/Textarea';
import s from './NewComment.module.scss';

const NewComment = (props) => {
  const getValueFromInput = (text) => {
    props.dispatch(updateCommentCreator(text, props.post_id));
  };

  const addComment = () => {
    props.dispatch(addCommentCreator(props.post_id));
  };

  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="myAvatar" />
      <form className={s.myMessage + ' input-group mb-3'}>
        <Textarea holder="Post a comment" value={props.newCommentText} cls="classic" cls1="comment" getValueFromInput={getValueFromInput} />
        <Button text="Send" cls="black" onClick={addComment} />
      </form>
    </div>
  );
};

export default NewComment;
