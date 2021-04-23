import React from 'react';
import Button from '../../button/Button';
import Input from '../../input/Input';
import s from './MyMessage.module.scss';

const MyMessage = () => {
  return (
    <form className={s.myMessage + ' input-group mb-3'}>
      <Input holder="Type your message" type="text" cls="classic" />
      <Button text="Send" cls="black" />
    </form>
  );
};

export default MyMessage;
