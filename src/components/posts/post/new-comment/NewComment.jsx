import React from 'react';
import Button from '../../../button/Button';
import Input from '../../../input/Input';
import s from './NewComment.module.scss';

const NewComment = (props) => {
  let textForComment;
  const getValueFromInput = (text) => {
    textForComment = text;
  };

  const addComment = () => {
    props.addComment(textForComment, props.post_id);
  };

  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="myAvatar" />
      <form className={s.myMessage + ' input-group mb-3'}>
        <Input holder="Post a comment" type="text" cls="classic" getValueFromInput={getValueFromInput} />
        <Button text="Send" cls="black" onClick={addComment} />
      </form>
    </div>
  );
};

export default NewComment;
