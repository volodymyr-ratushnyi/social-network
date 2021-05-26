import React from 'react';
import s from './NewPost.module.scss';
import { BsPencilSquare } from 'react-icons/bs';
import { ImImages } from 'react-icons/im';
import { IoIosVideocam } from 'react-icons/io';
import { RiMap2Line } from 'react-icons/ri';
import Button from '../../button/Button';
import Textarea from '../../textarea/Textarea';
const NewPost = (props) => {
  const addPost = () => {
    props.addPost();
  };
  const updateTextAddPost = (text) => {
    props.updateTextAddPost(text);
  };
  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="" />
      <Textarea value={props.newTextForAddPost} holder="Write what you wish" getValueFromInput={updateTextAddPost} />
      <BsPencilSquare className={s.icon} />
      <ImImages className={s.icon} />
      <IoIosVideocam className={s.icon} />
      <RiMap2Line className={s.icon} />
      <Button text="Publish" cls="blue" onClick={addPost} />
    </div>
  );
};

export default NewPost;
