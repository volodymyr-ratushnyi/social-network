import React from 'react';
import s from './NewPost.module.scss';
import { BsPencilSquare } from 'react-icons/bs';
import { ImImages } from 'react-icons/im';
import { IoIosVideocam } from 'react-icons/io';
import { RiMap2Line } from 'react-icons/ri';
import Button from '../../button/Button';
const NewPost = (props) => {
  const textForPost = React.createRef();
  const addPost = () => {
    props.dispatch({ type: 'ADD-POST', text: textForPost.current.value });
    textForPost.current.value = '';
  };
  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="" />
      <textarea name="" id="" cols="30" rows="10" ref={textForPost} placeholder="Write what you wish"></textarea>
      <BsPencilSquare className={s.icon} />
      <ImImages className={s.icon} />
      <IoIosVideocam className={s.icon} />
      <RiMap2Line className={s.icon} />
      <Button text="Publish" cls="blue" onClick={addPost} />
    </div>
  );
};

export default NewPost;
