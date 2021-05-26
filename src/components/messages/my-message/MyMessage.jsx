import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';

import Button from '../../button/Button';
import Textarea from '../../textarea/Textarea';
import s from './MyMessage.module.scss';

const MyMessage = (props) => {
  const updateNewMessageText = (val) => {
    props.updateNewMessageText(val);
  };
  return (
    <form className={s.myMessage + ' input-group mb-3'}>
      <Textarea value={props.newMessageText} holder="Type your message" cls="classic" getValueFromInput={updateNewMessageText} />
      <Button onClick={props.sendMessage} text="Send" cls="black" />
    </form>
  );
};

export default MyMessage;
